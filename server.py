#!/usr/bin/env python3
"""
Легкий веб-сервер та приймач онлайн-замовлень для сайту «ШАШЛИК СМІЛА».
Запуск:
  python3 server.py
Для автоматичної відправки замовлень у Telegram:
  TELEGRAM_BOT_TOKEN="ваш_токен" TELEGRAM_CHAT_ID="ваш_chat_id" python3 server.py
"""
import datetime
import http.server
import json
import os
import urllib.request
from pathlib import Path

PORT = int(os.environ.get("PORT", "8080"))
BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN", "").strip()
CHAT_ID = os.environ.get("TELEGRAM_CHAT_ID", "").strip()
BASE_DIR = Path(__file__).resolve().parent
ORDERS_LOG = BASE_DIR / "orders.jsonl"


def send_telegram_message(text: str) -> bool:
    if not BOT_TOKEN or not CHAT_ID:
        return False
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    payload = json.dumps({"chat_id": CHAT_ID, "text": text}).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=8) as resp:
            return resp.status == 200
    except Exception:
        return False


class OrderHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    def do_POST(self):
        if self.path != "/api/order":
            self.send_error(404, "Not Found")
            return

        length = int(self.headers.get("Content-Length", "0"))
        raw = self.rfile.read(length).decode("utf-8", errors="replace")
        try:
            data = json.loads(raw)
        except json.JSONDecodeError:
            self.send_error(400, "Invalid JSON")
            return

        record = {
            "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            **data,
        }
        with open(ORDERS_LOG, "a", encoding="utf-8") as f:
            f.write(json.dumps(record, ensure_ascii=False) + "\n")

        receipt = data.get("receiptText", "")
        tg_ok = send_telegram_message(receipt) if receipt else False

        resp_bytes = json.dumps({"ok": True, "telegramSent": tg_ok}).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(resp_bytes)))
        self.end_headers()
        self.wfile.write(resp_bytes)


if __name__ == "__main__":
    with http.server.ThreadingHTTPServer(("0.0.0.0", PORT), OrderHandler) as httpd:
        print(f"Serving ШАШЛИК СМІЛА on http://localhost:{PORT}")
        httpd.serve_forever()
