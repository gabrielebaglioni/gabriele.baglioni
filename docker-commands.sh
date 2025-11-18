#!/bin/bash

# Docker Commands for Portfolio Application
# This script builds and runs the Docker container

echo "🐳 Building Docker image..."
docker compose build

echo "🚀 Starting Docker container..."
docker compose up -d

echo "✅ Container started!"
echo "📦 Container name: docker-portfolio"
echo "🌐 Application available at: http://localhost:4000"
echo ""
echo "Useful commands:"
echo "  - View logs: docker compose logs -f"
echo "  - Stop container: docker compose down"
echo "  - Restart container: docker compose restart"
echo "  - View running containers: docker ps"

