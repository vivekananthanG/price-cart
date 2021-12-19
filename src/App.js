import './App.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
function App() {
  const plans = [{
    price:"0",
    plan: "Free",
    period: "/month",
    user: "Single User",
    storage: "5GB Storage",
    public1: "Unlimited Public Projects",
    access: "Community Access",
    private1: "Unlimited Private Projects",
    support: "Dedicated Phone Support",
    subdomain: "Free Subdomain",
    report: "Monthly Status Reports",
  }, {
    price:"9",
    plan: "Plus",
    period: "/month",
    user: "5 User",
    storage: "50GB Storage",
    public1: "Unlimited Public Projects",
    access: "Community Access",
    private1: "Unlimited Private Projects",
    support: "Dedicated Phone Support",
    subdomain: "Free Subdomain",
    report: "Monthly Status Reports",
  }, {
    price:"49",
    plan: "Pro",
    period: "/month",
    user: "Unlimited Users",
    storage: "150GB Storage",
    public1: "Unlimited Public Projects",
    access: "Community Access",
    private1: "Unlimited Private Projects",
    support: "Dedicated Phone Support",
    subdomain: "Free Subdomain",
    report: "Monthly Status Reports",
  }];
  return (
    <div className="App">

      <section className="pricing">
        <div className="container">
          {
            plans.map(({ price,plan, period, user, storage, public1, access, private1, support, subdomain, report }) => (
              <Pricecart
                price={price}
                plan={plan}
                period={period}
                user={user}
                storage={storage}
                public1={public1}
                access={access}
                private1={private1}
                support={support}
                subdomain={subdomain}
                report={report} />
            ))
          }
        </div>
      </section>

    </div>
  );
}

export default App;

function Pricecart({price,plan, period, user, storage, public1, access, private1, support, subdomain, report}) {
  const data=plan;
  console.log(data)
  return (
    <div>
      <Card variant="outlined" className="card">
        <div className="card-body">
          <h5 className="card-title">{plan}</h5>
          <h6 className="card-price">${price}<span className="period">{period}</span></h6>
          <hr />
          <ul>
            <li><span><DoneIcon /></span> {user}</li>
            <li><span><DoneIcon /></span> {storage}</li>
            <li><span><DoneIcon /></span> {public1}</li>
            <li><span><DoneIcon /></span> {access}</li>
            <li className={plan==="Free"?"text-muted":null}><span>{plan==="Free"?<ClearIcon/>:<DoneIcon />}</span> {private1}</li>
            <li className={plan==="Free"?"text-muted":null}><span>{plan==="Free"?<ClearIcon/>:<DoneIcon />}</span> {subdomain}</li>
            <li className={plan==="Free"?"text-muted":null}><span>{plan==="Free"?<ClearIcon/>:<DoneIcon />}</span> {support}</li>
            <li className={plan==="Free"?"text-muted":plan==="Plus"?"text-muted":null}><span>{plan==="Free"?<ClearIcon/>:plan==="Plus"?<ClearIcon/>:<DoneIcon />}</span> {report}</li>
          </ul>
          <div>
            <Button variant="contained" className="btn">Button</Button>
          </div>
        </div>
      </Card>
      </div>
  );
}