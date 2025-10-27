import './CustomerSatisfaction.css';

const CustomerSatisfaction = ({ 
  percentage = 98, 
  label = "Customer Satisfaction",
  avatars = [
    { id: 1, icon: "👨‍💼" },
    { id: 2, icon: "👩‍💼" },
    { id: 3, icon: "👨‍💻" }
  ]
}) => {
  return (
    <div className="customer-satisfaction-card">
      <div className="satisfaction-content">
        <div className="customer-avatars">
          {avatars.map((avatar) => (
            <div key={avatar.id} className="avatar">
              <div className="avatar-icon">{avatar.icon}</div>
            </div>
          ))}
        </div>
        <div className="satisfaction-text">
          <span className="satisfaction-percentage">{percentage}%</span>
          <span className="satisfaction-label">{label}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
