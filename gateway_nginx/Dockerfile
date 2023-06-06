FROM nginx:latest

# Copy the custom Nginx configuration file to the container
COPY default.conf /etc/nginx/conf.d/

# Expose port 80 for incoming traffic
EXPOSE 80

# Start Nginx in the foreground when the container starts
CMD ["nginx", "-g", "daemon off;"]