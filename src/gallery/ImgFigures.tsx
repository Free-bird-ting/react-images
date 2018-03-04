import * as React from 'react';
export interface ImgFiguresProps {
    arrange: any;
    data: any;
    inverse: any;
    center: any;
}
export interface ImgFiguresState {

}
export default class ImgFigures extends React.Component<ImgFiguresProps, ImgFiguresState> {
    constructor(props: ImgFiguresProps) {
        super(props);
    }
    handleClick(e: any) {
        if (this.props.arrange.isCenter) {
            this.props.inverse();
        } else {
            this.props.center();
        }
        e.stopPropagation();
        e.preventDefault();
    }
    render() {
        let styleObject: any = {};
        if (this.props.arrange.pos) {
            // styleObject = this.props.arrange.pos;
            Object.assign(styleObject, this.props.arrange.pos);
        }
        if (this.props.arrange.rotate) {
            (['MozTransform', 'msTransform', 'WebkitTransform', 'transform']).forEach(value => {
                styleObject[value] = 'rotate(' + this.props.arrange.rotate + 'deg)';
            });
        }
        if (this.props.arrange.isCenter) {
            styleObject.zIndex = 11;
        }
        let imgFigureClassName = 'img-figure';
        imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : '';
        return (
            <figure className={imgFigureClassName} style={styleObject} onClick={this.handleClick.bind(this)}>
                <img src={require(`./images/${this.props.data.fileName}`)} alt={this.props.data.title} width={'260'}/>
                <figcaption>
                    <h2 className="img-title">{this.props.data.title}</h2>
                    <div className="img-back" onClick={this.handleClick.bind(this)}>
                        <p>{this.props.data.desc}</p>
                    </div>
                </figcaption>
            </figure>
        );
    }
}