let id = 1;
let vacations = [
  {
    id: id++,
    title: "Hawaii Trip",
    destination: "Maui Hawaii",
    arrival: "01/01/2020",
    depart: "01/02/2030",
    imageUrl:
      "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    budget: "20000",
  },
  {
    id: id++,
    title: "Bali Trip",
    destination: "Bali Bali",
    arrival: "01/01/2020",
    depart: "01/02/2030",
    imageUrl:
      "https://images.unsplash.com/photo-1545922521-ffc22e0de375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    budget: "10000",
  },
  {
    id: id++,
    title: "Dubai Trip",
    destination: "Dubai",
    arrival: "01/01/2020",
    depart: "01/02/2030",
    imageUrl:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    budget: "50000",
  },
];

module.exports = {
  get: (req, res) => {
    res.send(vacations);
  },
  create: (req, res) => {
    let { title, destination, arrival, depart, imageUrl, budget } = req.body;
    let vacay = {
      id: id++,
      title,
      destination,
      arrival,
      depart,
      imageUrl,
      budget,
    };

    vacations.push(vacay);
    res.status(200).send(vacations);
  },
  delete: (req, res) => {
    let { id } = req.params;

    let i = vacations.findIndex((vacay) => Number(vacay.id) === Number(id));
    vacations.splice(i, 1);
    res.send(vacations);
  },

  edit: (req, res) => {
    let { title, destination, arrival, depart, imageUrl, budget } = req.body;
    let { id } = req.params;
    let i = vacations.findIndex((vacay) => Number(vacay.id) === Number(id));

    let editedVacation = {
      id,
      title: title || vacations[i].title,
      destination: destination || vacations[i].destination,
      arrival: arrival || vacations[i].arrival,
      depart: depart || vacations[i].arrival,
      imageUrl: imageUrl || vacations[i].imageUrl,
      budget: Number(budget) || Number(vacations[i].budget),
    };

    vacations.splice(i, 1, editedVacation);
    res.status(200).send(vacations);
  },
};
