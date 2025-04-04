import brain_1 from "../src/assets/img/brain-1.jpg";
import brain_2 from "../src/assets/img/brain-2.jpg";
import brain_3 from "../src/assets/img/brain-3.jpg";

export const plans = [
	{
		id: "plan-4w",
		name: "4-WEEK PLAN",
		totalCost: 1.00,
		durationDays: 28,
		costPerDay: (1.00 / 28).toFixed(3),
		discount: "",
		popular: true,
		img:brain_1
	},
	{
		id: "plan-12w",
		name: "12-WEEK PLAN",
		totalCost: 2.50, // Cheaper per day
		durationDays: 84,
		costPerDay: (2.50 / 84).toFixed(3),
		discount: "Save 50%",
		popular: false,
		img:brain_2
	},
	{
		id: "plan-24w",
		name: "24-WEEK PLAN",
		totalCost: 3.00,
		durationDays: 168,
		costPerDay: (3.00 / 168).toFixed(3),
		discount: "Save 70%",
		popular: false,
		img:brain_3
	},
];