import React, { Component } from 'react';

import './filters.styles.scss';

import RefreshIcon from '../../assets/icons/refresh.png';

class Filters extends Component {
  state = {
    filter: '',
    filteredPlaces: false
  };

  setFilteredPlaces = () =>
    this.props.setFilteredPlaces(this.state.filteredPlaces);

  filterPlacesForCategory = currentPlaces => {
    this.setState(
      {
        filteredPlaces: currentPlaces.filter(
          place => place.category === this.state.filter
        )
      },
      () => this.setFilteredPlaces()
    );
  };

  filterPlacesForBestfive = currentPlaces => {
    this.setState(
      {
        filteredPlaces: currentPlaces.filter(
          place => place.bestfive === this.state.filter
        )
      },
      () => this.setFilteredPlaces()
    );
  };

  refreshFilters = () => {
    this.setState({ filter: '', filteredPlaces: false }, () => {
      this.props.setToggleFilter(false);
    });
  };

  handleFiltering = event => {
    const targetValue = event.target.value;
    const targetName = event.target.name;
    this.setState({ filter: '', filteredPlaces: false }, () => {
      this.props.setToggleFilter(false);
      this.setState({ filter: targetValue }, () => {
        this.props.setToggleFilter(!this.props.toggleFilter);
        if (targetName === 'category-filter') {
          this.filterPlacesForCategory(this.props.currentPlaces);
        } else if (targetName === 'b5-filter') {
          this.filterPlacesForBestfive(this.props.currentPlaces);
        } else return;
      });
    });
  };

  render() {
    const { category } = this.props;

    return (
      <div className='filters'>
        <div className='filter-refresh' onClick={this.refreshFilters}>
          <button>
            <img src={RefreshIcon} alt='' />
            <span>Refresh</span>
          </button>
        </div>
        <div className='filter-toggle'></div>
        <div className='search'>
          <input type='text' placeholder='Search for place name' />
        </div>
        <div>
          <select
            name='category-filter'
            id='category-filter'
            value={this.state.filter}
            onChange={this.handleFiltering}>
            <option value='' disabled selected>
              Category
            </option>
            {category.map(item => (
              <option value={item.name} key={item.docID}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            name='b5-filter'
            id='b5-filter'
            placeholder='Bestfive'
            onChange={this.handleFiltering}>
            <option value='' disabled selected>
              Bestfive
            </option>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filters;
