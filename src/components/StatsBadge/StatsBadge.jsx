import React from "react";

export default function StatsBadge({ teams }) {
  let totalCombat = 0;
  let totalDurability = 0;
  let totalIntelligence = 0;
  let totalPower = 0;
  let totalSpeed = 0;
  let totalStrength = 0;

  let totalStats = [];

  let sortTotalStats = []

  const getTotalPowerstats = () => {
    teams.map((character) => {
      totalCombat += parseInt(character.powerstats.combat);
      totalDurability += parseInt(character.powerstats.durability);
      totalIntelligence += parseInt(character.powerstats.intelligence);
      totalPower += parseInt(character.powerstats.power);
      totalSpeed += parseInt(character.powerstats.speed);
      totalStrength += parseInt(character.powerstats.strength);
    });

    totalStats = [
      {
        name: "Combat",
        value: totalCombat,
      },
      {
        name: "Durability",
        value: totalDurability,
      },
      {
        name: "Intelligence",
        value: totalIntelligence,
      },
      {
        name: "Power",
        value: totalPower,
      },
      {
        name: "Speed",
        value: totalSpeed,
      },
      {
        name: "Power",
        value: totalStrength,
      },
    ];

    sortTotalStats = totalStats.sort((a,b)=>a.value-b.value).reverse();

    console.log(totalStats);
    console.log(sortTotalStats);
  };

  getTotalPowerstats();

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <ul className="list-group">
            {sortTotalStats.map((powerStats) => {
              return(
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  {powerStats.name}
                  <span className='badge bg-primary' >{powerStats.value}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
