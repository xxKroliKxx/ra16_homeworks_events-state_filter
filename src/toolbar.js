import React from 'react';

export default class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {filters, selected, onSelectFilter} = this.props
        return (
            <ul className={'filters'}>
                {filters.map((filter) => {
                        const className = 'filter' + (selected === filter ? ' selected' : '')
                        return (
                            <li className={className} onClick={onSelectFilter}>{filter}</li>)
                    }
                )}
            </ul>
        )
    }
}