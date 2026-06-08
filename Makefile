.PHONY: install install-frontend install-backend run run-frontend run-backend test build validate clean

FRONTEND_DIR := frontend
BACKEND_DIR := backend

install: install-frontend install-backend

install-frontend:
	cd $(FRONTEND_DIR) && npm install

install-backend:
	cd $(BACKEND_DIR) && npm install

run:
	@echo "Starting backend on http://localhost:3000"
	@echo "Starting frontend on http://localhost:5173"
	@(cd $(BACKEND_DIR) && npm run dev) & \
		backend_pid=$$!; \
		(cd $(FRONTEND_DIR) && VITE_API_BASE_URL=http://localhost:3000 npm run dev) & \
		frontend_pid=$$!; \
		trap 'kill $$backend_pid $$frontend_pid 2>/dev/null' INT TERM EXIT; \
		wait $$backend_pid $$frontend_pid

run-frontend:
	cd $(FRONTEND_DIR) && VITE_API_BASE_URL=http://localhost:3000 npm run dev

run-backend:
	cd $(BACKEND_DIR) && npm run dev

test:
	cd $(FRONTEND_DIR) && npm run test
	cd $(BACKEND_DIR) && npm run test

build:
	cd $(FRONTEND_DIR) && npm run build
	cd $(BACKEND_DIR) && npm run build

validate:
	cd $(FRONTEND_DIR) && npm run validate:data
	cd $(BACKEND_DIR) && npm run validate:data

clean:
	rm -rf $(FRONTEND_DIR)/dist $(BACKEND_DIR)/dist
