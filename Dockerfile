FROM openjdk
WORKDIR /app
COPY . /app
RUN javac script.js
CMD ["script.js", "runserver 0.0.0.0"]
