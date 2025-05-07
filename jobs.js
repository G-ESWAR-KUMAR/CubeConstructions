const jobOpenings = [
    {
      title: "Software Engineer",
      type: "Full-time",
      location: "Hyderabad, Telangana",
      salary: "120k - 150k"
    },
    {
      title: "Frontend Developer",
      type: "Contract",
      location: "Bangalore, Karnataka",
      salary: "90k - 110k"
    },
    {
      title: "Backend Developer",
      type: "Part-time",
      location: "Remote",
      salary: "100k - 130k"
    }
  ];

  
  const container = document.querySelector('.container-fluid');

// Create outer row and col only once
const row = document.createElement('div');
row.className = 'row justify-content-center';

const col = document.createElement('div');
col.className = 'col col-lg-6 col-md-12';

// Section heading
const heading = document.createElement('h5');
heading.textContent = 'Current Openings';

const br = document.createElement('br');

col.appendChild(heading);
col.appendChild(br);

// Loop through job openings and create a card for each
jobOpenings.forEach(job => {
  const card = document.createElement('div');
  card.className = 'card mb-3';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const jobTitle = document.createElement('h4');
  const jobLink = document.createElement('a');
  jobLink.href = '';
  jobLink.style.color = 'black';
  jobLink.textContent = job.title;
  jobTitle.appendChild(jobLink);

  const jobDetails = document.createElement('p');
  jobDetails.className = 'text-secondary';
  jobDetails.innerHTML = `
    <i class="bi bi-building"></i>&nbsp;${job.type} &nbsp;
    <i class="bi bi-geo-fill"></i>&nbsp;${job.location} &nbsp;
    <i class="bi bi-bank2"></i>&nbsp;<i class="bi bi-currency-dollar"></i>${job.salary}
  `;

  cardBody.appendChild(jobTitle);
  cardBody.appendChild(jobDetails);
  card.appendChild(cardBody);
  col.appendChild(card);
});

// Append everything to row and then to container
row.appendChild(col);
container.appendChild(row);
