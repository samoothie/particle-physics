import numpy as np

# Note: Assumes particle is subject to constant gravitational field in z-direction... possibly

def lagrange(mass, velocity, position):  # Note position is a 3D vector, so is velocity i believe
    kinetic_energy = 0.5 * mass * np.dot(velocity, velocity)
    potential_energy = np.linalg.norm(position) ** 2
    return kinetic_energy - potential_energy


def euler_lagrange(mass, velocity, position):
    dl_dv = mass * velocity
    dl_dx = -2 * position
    return np.array([dl_dv, dl_dx])


def track_particle_movement(mass, initial_velocity, initial_position, time_step, num_steps):
    velocity = np.array(initial_velocity)
    position = np.array(initial_position)
    trajectory = [position]
    
    for i in range(num_steps):
        dL_dv, dL_dx = euler_lagrange(mass, velocity, position)
        velocity += dL_dv * time_step
        position += velocity * time_step
        trajectory.append(position)
        
    return np.array(trajectory)


def track_particle_movement_user_input():
    mass = float(input("Enter the mass of the particle: "))
    initial_velocity = np.array(
        [float(x) for x in input("Enter the initial velocity of the particle (x, y, z): ").split()])
    initial_position = np.array(
        [float(x) for x in input("Enter the initial position of the particle (x, y, z): ").split()])
    time_step = float(input("Enter the time step: "))
    num_steps = int(input("Enter the number of steps to simulate: "))
    return mass, initial_velocity, initial_position, time_step, num_steps


def main():
    particle_data = track_particle_movement_user_input()
    mass, initial_velocity, initial_position, time_step, num_steps = particle_data
    particle_trail = track_particle_movement(mass, initial_velocity, initial_position, time_step, num_steps)
    print(particle_trail)

        
        
if __name__ == '__main__':
    main()
    
    

        

