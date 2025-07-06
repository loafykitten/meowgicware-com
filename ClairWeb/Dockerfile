# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies deterministically
COPY ClairWeb/package.json ClairWeb/package-lock.json ./
RUN npm ci

# Build application
COPY ClairWeb/. .
RUN mkdir -p /app/public
RUN npm run build

# Production runtime stage
FROM node:18-alpine AS runner

WORKDIR /app

# Install only production dependencies
COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm ci --only=production

# Copy build artifacts
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public

# Enhance security: non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup \
    && chown -R appuser:appgroup /app
USER appuser

# Expose port and metadata
EXPOSE 3000
LABEL maintainer="Ember <hello@loafykitten.cafe>" \
    description="MeowgicWare.com web fontend"

# Start application
CMD ["npm", "start"]