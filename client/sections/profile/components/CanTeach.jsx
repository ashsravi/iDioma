import React, { Component } from 'react';
import Language from '../../../components/Language.jsx';

class CanTeach extends Component {

  render() {
    const { canTeach, onAddTeachClick, onRemoveTeachClick } = this.props;
    return (
      <div className="profile-section">

        <div className="profile-title">Languages I can offer</div>

        <div>
          {canTeach.map((language, i) => (
            <div key={i}>
              <Language level={language[1]} name={language[0]} />
              <button onClick={() => { onRemoveTeachClick([language[0], language[1]]); }}>X</button>
            </div>
          ))}
        </div>

        <div>
          <div className="language-label">Language</div><div className="level-label">My Level</div>
        </div>

        <select ref="teach" className="language-selection" defaultValue="english">
          <option value="English">English</option> 
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>

        <select ref="teach-level" className="level-selection" defaultValue="native">
          <option value="native">Native</option> 
          <option value="fluent">Fluent</option>
        </select>

        <button onClick={() => { onAddTeachClick([this.refs['teach'].value, this.refs['teach-level'].value]); }}>Add</button>

      </div>
    );
  }
}

export default CanTeach;
