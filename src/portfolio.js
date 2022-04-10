import React from 'react';
import Toolbar from "./toolbar";
import ProjectList from "./project-list";

export default class Portfolio extends React.Component {
    filterAll = 'all'

    constructor(props) {
        super(props);
        this.state = {selected: this.filterAll}
        this.onSelectFilter = this.onSelectFilter.bind(this)
        this.filters = [this.filterAll, 'Websites', 'Flayers', 'Business Cards']
    }

    onSelectFilter(filter) {
        const currentFilter = filter.currentTarget.textContent
        this.setState(({selected: currentFilter}))
    }

    render() {
        let {selected} = this.state
        return (
            <>
                <Toolbar filters={this.filters} selected={selected} onSelectFilter={this.onSelectFilter}/>
                <ProjectList
                    projects={projects.filter(project => selected === this.filterAll ? true : project.category === selected)}/>
            </>)
    }

}

const projects = [
    {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
        category: "Business Cards"
    },
    {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites"
    },
    {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites"
    },
    {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
        category: "Websites"
    },
    {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
        category: "Business Cards"
    },
    {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
        category: "Websites"
    },
    {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        category: "Business Cards"
    },
    {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
        category: "Websites"
    },
    {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
        category: "Flayers"
    },
    {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
        category: "Websites"
    },
    {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
        category: "Business Cards"
    },
    {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
        category: "Websites"
    },
    {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
        category: "Websites"
    },
    {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
        category: "Flayers"
    }]