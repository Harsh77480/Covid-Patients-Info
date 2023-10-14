function bmiCalc(w, h) {
    return w / ((h / 100) * (h / 100));
}

exports.sendData = async (req, res, next) => { //before sending apply all the filters 
    try {
        let data = req.data.users;

        const filters = req.query;

        if (data && filters) {

            if (filters['BMI']) {

                console.log(filters['BMI']);
                let temp = [];
                if (filters['BMI'].indexOf('underweight') != -1) {
                    temp = [...temp, ...data.filter((e) => (bmiCalc(e.weight, e.height) < 18.5))];
                }
                if (filters['BMI'].indexOf('overweight') != -1) {
                    temp = [...temp, ...data.filter((e) => (bmiCalc(e.weight, e.height) >= 25))];
                }
                if (filters['BMI'].indexOf('normal') != -1) {
                    temp = [...temp, ...data.filter((e) => (bmiCalc(e.weight, e.height) > 18.5 && bmiCalc(e.weight, e.height) < 25))];
                }

                data = temp;
            };


            if (filters['gender']) {
                data = data.filter((e) => e.gender == filters['gender']);
            }
            if (filters['sort'] === '0') {
                data.sort((a, b) => a.age - b.age);
            }
            if (filters['sort'] === '1') {
                data.sort((a, b) => b.age - a.age);
            }

            res.send(data);
        }

    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}