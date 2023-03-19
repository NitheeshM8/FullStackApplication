import axios from 'axios'

const URL = 'http://localhost:8080/Car';

class Carservice{

    getAllCars(){
        return axios.get(URL)
    }

    createCar(car){
        return axios.post(URL,car)
    }

    getCarById(carId){
        return axios.get(URL + '/' + carId);
    }

    updateCar(carId, car){
        return axios.put(URL + '/' +carId, car);
    }

    deleteCar(carId){
        return axios.delete(URL + '/' + carId);
    }
    deleteAllCar(carId){
        return axios.delete(URL);
    }
}

export default new Carservice();