# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies deterministically
COPY ClaireWeb/package.json ClaireWeb/package-lock.json ./
RUN npm ci

# Build application
COPY ClaireWeb/. .
RUN mkdir -p /app/public
RUN npm run build

# Production runtime stage
FROM node:18-alpine AS runner

WORKDIR /app

# Enhance security: non-root user
# Create the group and user first
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
# Change ownership of the /app directory itself to the new user
# This is crucial so the appuser can write to WORKDIR if needed,
# but we avoid recursive chown on large content.
RUN chown appuser:appgroup /app
# Switch to the non-root user for all subsequent commands
USER appuser

# Install only production dependencies
COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm ci --only=production

# Copy build artifacts
# These COPY commands will now create files owned by 'appuser' by default
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public

# Expose port and metadata
EXPOSE 3000
LABEL maintainer="Ember <hello@loafykitten.cafe>" \
    description="MeowgicWare.com web fontend"

# Start application
CMD ["npm", "start"]