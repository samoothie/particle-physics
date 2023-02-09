# Import the Flask module and other required modules
from flask import Flask, request, jsonify
import methods

# Create a Flask application object
app = Flask(__name__)

# Define a route for the API endpoint
@app.route("/lagrange", methods=["POST"])
def calculate_lagrange():
    # Retrieve the JSON payload from the request
    data = request.get_json()

    # Extract the mass, velocity, and position values from the payload
    mass = data["mass"]
    velocity = data["velocity"]
    position = data["position"]

    # Use the imported Python module to calculate the Lagrange
    lagrange = methods.calculate_lagrange(mass, velocity, position)

    # Return the calculated Lagrange as a JSON response
    return jsonify({"lagrange": lagrange})

# Run the Flask application if this module is the main module
if __name__ == '__main__':
    app.run()
