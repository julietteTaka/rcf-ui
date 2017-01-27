import {createElement as ce} from 'react';

import {Card, CardTitle, CardText, Spinner, IconButton} from 'react-mdl';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import {mdlclass} from '.';
import {dateFormatter, infoprops} from '..';
import {Link} from '../urls';
import {STYLES} from '../styles';


function registerPlaysOverview({plays}){

    function playFormatter(cell, row) {
        return ce(Link, {to: `/play/${row.play_id}`}, cell )
    }

    function authorFormatter(cell, row) {
        return ce(Link, {to: `/author/${row.author_id}`}, cell )
    }

    return ce(Card, {className: mdlclass({col: 9, tablet: 12})},
              ce(CardTitle, {style: STYLES.titleChart}, 'Pièces jouées'),
              ce(CardText, {style: {margin: "auto", fontSize: "1em"}},
                 ce(BootstrapTable, {data: plays, hover: true},
                    ce(TableHeaderColumn, {dataField: "title",
                                           dataSort: true,
                                           dataFormat: playFormatter}, 'Titre'),
                    ce(TableHeaderColumn, {dataField: "author_name",
                                           dataSort: true,
                                           dataFormat: authorFormatter}, 'Auteur'),
                    ce(TableHeaderColumn, {dataField: "genre",
                                           dataSort: true}, 'Genre'),
                    ce(TableHeaderColumn, {dataField: "reprise",
                                           dataSort: true}, 'Reprise'),
                    ce(TableHeaderColumn, {dataField: "ordering",
                                           dataSort: true,
                                           isKey: true}, 'Ordre')
                   )));
}


function registerMainCardView({register}) {
    const {date, weekday, receipts} = register;
    let {prevdate, nextdate} = register;
    const titleNavElements = [];

    if (prevdate) {
        prevdate = new Date(prevdate);
        titleNavElements.push(ce(Link, {to: `/register/${dateFormatter(prevdate)}`,
                                        title: `Soirée du /${dateFormatter(prevdate)}`},
                                 ce(IconButton, {name: "keyboard_arrow_left", colored: true})));
    }
    titleNavElements.push(dateFormatter(date));
    if (nextdate) {
        nextdate = new Date(nextdate);
        titleNavElements.push(ce(Link, {to: `/register/${dateFormatter(nextdate)}`,
                                        title: `Soirée du /${dateFormatter(nextdate)}`},
                                 ce(IconButton, {name: "keyboard_arrow_right", colored: true})));
    }
    return ce('section', {className: 'section--center mdl-grid', style: {justifyContent: "center"}},
              ce(Card, {className: mdlclass({col: 3, tablet: 6, phone: 4})},
                 ce(CardTitle, null, ...titleNavElements),
                 infoprops([
                     {label: 'Jour de la semaine', value: weekday},
                     {label: 'Recettes', value: `${receipts} livres`},
                 ])));
}


export function RegisterPrimaryView({loading, mainentity}) {
    if (!loading) {
        return ce('div', {id: 'overview'},
                  ce(registerMainCardView, {register: mainentity}),
                  ce('section', {className:"section--center mdl-grid"},
                     ce(registerPlaysOverview, {plays: mainentity.plays})
                    ));
    } else {
        return ce(Spinner, {style:{margin: "auto", display: "block"}});
    }
}
