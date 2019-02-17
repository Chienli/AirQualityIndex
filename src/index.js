import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true
    };
  }
  // componentDidMount() {

  //   fetch("http://opendata2.epa.gov.tw/AQI.json", {})
  //     .then(res => res.json())
  //     .then(json => {
  //       console.log(json);
  //       const records = json.result.records;
  //       const result = records.reduce((acc, record) => {
  //         const county = record.County;
  //         const groupedRecords = acc[county] || [];
  //         groupedRecords.push(record);
  //         acc[county] = groupedRecords;
  //         return acc;
  //       }, {});
  //       return result;
  //     })
  //     .then(data =>
  //       this.setState({
  //         data,
  //         isLoading: false
  //       })
  //     )
  //     .catch(e => console.log(e));

  // }

  render() {
    return (
      <div>
        <div className="container">
          <Title cityName={Object.keys(this.state.data)} />
          <StandardTable />
          <City />
          <Status />
        </div>
        <div className="footer">
          <div className="datasrc">資料來源：行政院環境保護署</div>
          <div className="copyright">
            Copyright © 2019 HexSchool. All rights reserved.
          </div>
        </div>
      </div>
    );
  }
}

class Title extends React.Component {
  constructor(props) {
    super(props);
    // this.clickHandler = this.clickHandler.bind(this);
  }
  render() {
    return (
      <div className="titleBox">
        <div onClick={this.clickHandler.bind(this)} className="title">
          空氣品質指標
        </div>
        <select className="location" id="location">
          <option value="">請選擇地區</option>
          {this.props.cityName.map(city => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    );
  }
  clickHandler() {
    console.log(this);
  }
}

class StandardTable extends React.Component {
  render() {
    return (
      <div className="standardTableBox">
        <table className="standardTable">
          <tr>
            <th>0~50</th>
            <th>51~100</th>
            <th>101~150</th>
            <th>151~200</th>
            <th>201~300</th>
            <th>301~400</th>
          </tr>
          <tr>
            <td>
              <div>良好</div>
            </td>
            <td>
              <div>普通</div>
            </td>
            <td>
              <div>對敏感族群不健康</div>
            </td>
            <td>
              <div>對所有族群不健康</div>
            </td>
            <td>
              <div>非常不健康</div>
            </td>
            <td>
              <div>危害</div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

class City extends React.Component {
  render() {
    return (
      <div className="cityBox">
        <div className="cityName">高雄市</div>
        <div className="line" />
        <div className="update">2019-01-24 14:00 更新</div>
      </div>
    );
  }
}

class Status extends React.Component {
  render() {
    return (
      <div className="status">
        <div className="box">
          <div className="chooseBox">
            <div className="name">前金</div>
            <div className="num">156</div>
          </div>
          <div className="o3">
            <div className="chinese">臭氧</div>
            <div className="english">
              O<small>2</small>(ppb)
            </div>
            <div className="value">82</div>
          </div>
          <div className="pm10">
            <div className="chinese">懸浮微粒</div>
            <div className="english">
              PM<small>10</small>(μg/m³)
            </div>
            <div className="value">72</div>
          </div>
          <div className="pm25">
            <div className="chinese">細懸浮微粒</div>
            <div className="english">
              PM<small>2.5</small>(μg/m³)
            </div>
            <div className="value">67</div>
          </div>
          <div className="co">
            <div className="chinese">一氧化碳</div>
            <div className="english">CO(ppm)</div>
            <div className="value">0.49</div>
          </div>

          <div className="so2">
            <div className="chinese">二氧化硫</div>
            <div className="english">
              SO<small>2</small>(ppb)
            </div>
            <div className="value">3.4</div>
          </div>
          <div className="no2">
            <div className="chinese">二氧化氮</div>
            <div className="english">
              NO<small>2</small>(ppb)
            </div>
            <div className="value">13</div>
          </div>
        </div>
        <div className="caseContainer">
          <div className="case">
            <div className="name">前金</div>
            <div className="num">156</div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
