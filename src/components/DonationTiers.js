export default function DonationTiers() {
  const tiers = [
    { name: "Feed a Cow for a Day", amount: "₹206", covers: "1 cow, 1 day" },
    { name: "Cow Guardian (Monthly)", amount: "₹6,180", covers: "1 cow, 1 month" },
    { name: "Cow Protector (Yearly)", amount: "₹75,190", covers: "1 cow, 1 year" },
    { name: "Shelter Supporter (Daily Herd)", amount: "₹4,120", covers: "20 cows, 1 day" },
    { name: "Shelter Supporter (Monthly Herd)", amount: "₹1,23,600", covers: "20 cows, 1 month" },
    { name: "Shelter Patron (Yearly Herd)", amount: "₹15,03,800", covers: "20 cows, 1 year" },
  ];

  return (
    <section id="donate" className="py-12 px-6">
      <h3 className="text-2xl font-bold text-center mb-6">Donation Tiers</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((tier, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-xl text-center border">
            <h4 className="text-xl font-bold mb-2">{tier.name}</h4>
            <p className="text-lg text-green-700 font-semibold">{tier.amount}</p>
            <p className="text-gray-600 mb-4">{tier.covers}</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-900">
              Donate Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
