import { getWheels, getInteriors, getTechnologies, getPaints, getOrders, completeOrder } from "./database.js"


const paints = await getPaints()
const interiors = await getInteriors()
const techs = await getTechnologies()
const wheels = await getWheels()

document.addEventListener("click", (event) => {
    const { name, id } = event.target;
    if (name === "complete") {
      completeOrder(id);
    }
  });
export const Orders = async () => {
    const orders = await getOrders()

    return `${
        orders.map(order => {
           

            return `<section class="order">
                ${order.paintColor.color} car with
                ${order.wheels.style} wheels,
                ${order.interior.material} interior,
                and the ${order.technology.package}
                for a total cost of
                ${
                    order.totalCost
                }
                <input type="button" name="complete" id="${order.id}" value="Complete">
            </section>`
        })
        .join("")
    }`
}

