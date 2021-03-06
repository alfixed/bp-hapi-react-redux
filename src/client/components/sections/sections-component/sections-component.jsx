import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import { normalizeDate } from '../../../utils/visual-functions';
import './sections-component.css';

class SectionsComponent extends PureComponent {
  static propTypes = {
    viewId: PropTypes.number.isRequired,
    section: PropTypes.object.isRequired
  };

  // cn-decorator
  render() {
    const {
      _id,
      name,
      duration,
      createdAt,
      comment,
      course
    } = this.props.section;

    return (
      <Grid container spacing={8}>
        <Grid item xs={1}>{this.props.viewId}</Grid>
        <Grid item xs={2} className="section-line__link"><Link to={`/sections/${_id}`}>{name}</Link></Grid>
        <Grid item xs={1}>{duration}</Grid>
        <Grid item xs={2}>{normalizeDate(createdAt)}</Grid>
        <Grid item xs={3}>{comment}</Grid>
        <Grid item xs={3}>{course}</Grid>
      </Grid>
    );
  }
}

export default SectionsComponent;
