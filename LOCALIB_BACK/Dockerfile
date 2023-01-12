FROM openjdk:18

# Setting up work directory
WORKDIR /app

# Copy the jar file into our app
COPY ./target/ecfback-0.0.1-SNAPSHOT.jar app.jar

# Exposing port 8080
EXPOSE 8080

# Starting the application
CMD ["java", "-jar", "app.jar"]