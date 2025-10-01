#!/bin/bash
set -euo pipefail

echo "Deploying vbb"

# frontend

cd /home/brig/code/vbb-portal/
npm run build

# nginx

sudo cp /home/brig/code/vbb-portal/deploy/nginx.conf /etc/nginx/conf.d/vbb.conf

sudo nginx -t
sudo systemctl reload nginx

echo "Deployment complete for vbb"
