
import Card from './components/Card'
const App = () => {

  const jobs = [
  {
    company: "Amazon",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    role: "Senior UI/UX Designer",
    type: "Part-time",
    level: "Senior",
    location: "Mumbai, India",
    salary: "₹25L - ₹40L",
    posted: "5 days ago"
  },
  {
    company: "Google",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmi4Vk21FM38m3NyEa0E2anJEmJanNZVzYNw&s",
    role: "Product Designer",
    type: "Full-time",
    level: "Mid-level",
    location: "Bangalore, India",
    salary: "₹30L - ₹60L",
    posted: "2 days ago"
  },
  {
    company: "Microsoft",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ccmph3FIPRRoY9m6aYXblfogFTczyMqDGg&s",
    role: "Frontend Developer",
    type: "Full-time",
    level: "Senior",
    location: "Hyderabad, India",
    salary: "₹28L - ₹50L",
    posted: "1 week ago"
  },
  {
    company: "Apple",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpoGhnWW9wN-P9X7Ckt3y0snA59WDlcsjeHg&s",
    role: "UI Designer",
    type: "Full-time",
    level: "Junior",
    location: "Remote",
    salary: "₹20L - ₹35L",
    posted: "3 days ago"
  },
  {
    company: "Meta",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    role: "UX Researcher",
    type: "Full-time",
    level: "Senior",
    location: "Delhi, India",
    salary: "₹35L - ₹70L",
    posted: "1 month ago"
  },
  {
    company: "Netflix",
    logo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
    role: "Motion Designer",
    type: "Contract",
    level: "Senior",
    location: "Remote",
    salary: "₹40L - ₹80L",
    posted: "10 days ago"
  },
  {
    company: "Airbnb",
    logo: "https://static.vecteezy.com/system/resources/previews/045/588/943/non_2x/airbnb-logo-online-platform-for-rental-housing-free-vector.jpg",
    role: "Junior UX/UI Designer",
    type: "Contract",
    level: "Junior",
    location: "Goa, India",
    salary: "₹12L - ₹22L",
    posted: "1 day ago"
  },
  {
    company: "Uber",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnM8U7Fu9UbOMCakFdEen8a8sl_EavE10XHw&s",
    role: "Product Designer",
    type: "Full-time",
    level: "Mid-level",
    location: "Bangalore, India",
    salary: "₹22L - ₹45L",
    posted: "4 days ago"
  },
  {
    company: "Adobe",
    logo: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/adobe-color.png",
    role: "Graphic Designer",
    type: "Full-time",
    level: "Senior",
    location: "Noida, India",
    salary: "₹18L - ₹35L",
    posted: "6 days ago"
  },
  {
    company: "Tesla",
    logo: "https://img.icons8.com/win10/1200/tesla-logo.jpg",
    role: "UI Engineer",
    type: "Full-time",
    level: "Senior",
    location: "Pune, India",
    salary: "₹30L - ₹55L",
    posted: "2 weeks ago"
  }
];
  
return (
  <div className='parent'>
    {jobs.map((job, index)=>{
      return <Card key={index} job={job} />;
    })}
  </div>
)

};

  


export default App;
