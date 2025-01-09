import ReactECharts from "echarts-for-react";

function Skill() {

    return (
        <div className="main-skill">
            <h1>SKILL</h1>
            <Frontend/>
            <Backend/>

        </div>
    )
}

const Frontend = () => {
    const option = {
        title: {
            text: "FrontEnd",
            left: 'center',
        },
        dataset: {
            source: [
                ["score", "amount", "product"],
                [85, 85, "HTML5"],
                [96, 92, "REACT.js"],
                [65, 65, "VUE.js"],
                [70, 70, "PhotoShop"]
            ],
        },
        grid: {containLabel: true},
        xAxis: {name: "amount"},
        yAxis: {type: "category"},
        visualMap: {
            orient: "horizontal",
            left: "center",
            min: 10,
            max: 100,
            text: ["High Score", "Low Score"],
            // Map the score column to color
            dimension: 0,
            inRange: {
                color: ["#65B581", "#FFCE34", "#FD665F"],
            },
        },
        series: [
            {
                type: "bar",
                encode: {
                    // Map the "amount" column to X axis.
                    x: "amount",
                    // Map the "product" column to Y axis
                    y: "product",
                },
            },
        ],
        backgroundColor: "transparent",
    };

    return (
        <section style={{marginTop: 40}}>
            <ReactECharts
                option={option}
                style={{height: "300px", width: "100%"}}
                theme="dark"
            />
        </section>
    )
}

const Backend = () => {
    const option = {
        title: {
            text: "BackEnd",
            left: 'center',
        },
        dataset: {
            source: [
                ["score", "amount", "product"],
                [97, 80, "Node.js"],
                [75, 70, "Express.js"],
                [60.4, 60, "SpringBoot"]
            ],
        },
        grid: {containLabel: true},
        xAxis: {name: "amount"},
        yAxis: {type: "category"},
        visualMap: {
            orient: "horizontal",
            left: "center",
            min: 10,
            max: 100,
            text: ["High Score", "Low Score"],
            // Map the score column to color
            dimension: 0,
            inRange: {
                color: ["#65B581", "#FFCE34", "#FD665F"],
            },
        },
        series: [
            {
                type: "bar",
                encode: {
                    // Map the "amount" column to X axis.
                    x: "amount",
                    // Map the "product" column to Y axis
                    y: "product",
                },
            },
        ],
        backgroundColor: "transparent",
    };

    return (
        <section style={{marginTop: 80}}>
            <ReactECharts
                option={option}
                style={{height: "300px", width: "100%"}}
                theme="dark"
            />

        </section>
    )
}


export default Skill;