import React from 'react';
import classes from './Qualities.module.css';
import Quality from "./Quality";


class Qualities extends React.Component {
    render() {

        let qualityItemsElements = this.props.qualityItems.map((quality) => {
            return <Quality key={quality.id} quality={quality.quality}/>
        })


        return (
            <div className="quality-items-elements">
                {qualityItemsElements}
            </div>
        );
    }
}

export default Qualities;