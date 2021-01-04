import React, { Component } from "react";
import {
  ReactiveBase,
  ResultList,
  MultiList,
  RatingsFilter,
  SelectedFilters,
  MultiDataList,
  DataSearch,
  RangeSlider
} from "@appbaseio/reactivesearch";

import { ReactiveMap } from "@appbaseio/reactivemaps";
 
// Importing Images
import americanFood from "../Images/americanFood.jpg";
import barFood from "../Images/barFood.jpeg";
import breakfast from "../Images/breakfast.jpeg";
import desserts from "../Images/desserts.jpeg";
import sandwich from "../Images/sandwich.jpeg";

export default class Rdetail extends Component {
    render() {
        return (
            <div className="container-fluid">
        <ReactiveBase
          app="yelp-app"
          credentials="hkXdk3vcA:a32683f3-c8ad-45db-8c86-2ac2c0f45e0c"
          type="yelp-app"
        >
 

          <div className="row">
            <div className="col-8 col-lg-3 col-md-3 col-sm-4 scroll">
              <div className="box">
                <MultiList
                  dataField="currency.keyword"
                  title="Currency Options"
                  componentId="currencyReactor"
                  placeholder="Filter Currency"
                  showFilter={true}
                  filterLabel="Currency Options"
                  react={{
                    and: [
                      "ratingsReactor",
                      "cuisineReactor",
                      "deliveringNowReactor",
                      "tableBookinReactor",
                      "deliveryReactor",
                      "bookingReactor",
                      "nameReactor",
                      "RangeSliderSensor"
                    ]
                  }}
                />
              </div>

              <div className="box">
                <MultiList
                  dataField="cuisine.keyword"
                  title="Cuisine Options"
                  componentId="cuisineReactor"
                  placeholder="Filter Cuisine"
                  showFilter={true}
                  filterLabel="Cuisine Options"
                  react={{
                    and: [
                      "ratingsReactor",
                      "currencyReactor",
                      "deliveringNowReactor",
                      "tableBookinReactor",
                      "musicReactor",
                      "bookingReactor",
                      "nameReactor",
                      "RangeSliderSensor"
                    ]
                  }}
                />
              </div>

              <div className="box">

                <RangeSlider
                  componentId="RangeSliderSensor"
                  dataField="average_cost_for_two"
                  title="Average Cost for Two"
                  range={{
                    start: 0,
                    end: 7000
                  }}
                  rangeLabels={{
                    start: "Low",
                    end: "High"
                  }}
                  react={{
                    and: ["cuisineReactor", "currencyReactor"]
                  }}
                />
              </div>

              <div className="box">
                <RatingsFilter
                  componentId="ratingsReactor"
                  dataField="rating"
                  title="Avg. Customer Reviews"
                  data={[
                    { start: 4, end: 5, label: ">= 4 stars" },
                    { start: 3, end: 5, label: ">= 3 stars" },
                    { start: 2, end: 5, label: ">= 2 stars" },
                    { start: 1, end: 5, label: "> 1 stars" }
                  ]}
                  showFilter={true}
                  filterLabel="Avg. Customer Reviews"
                  react={{
                    and: [""]
                  }}
                />
              </div>

              <div className="box">
                <MultiDataList
                  dataField="delivering_now"
                  componentId="deliveringNowReactor"
                  title="Refine By"
                  showSearch={false}
                 
                  data={[
                    {
                      label: "Delivering Now",
                      value: true
                    }
                  ]}
                />

                <MultiDataList
                  dataField="has_table_booking"
                  componentId="tableBookinReactor"
                  showSearch={false}
                  data={[
                    {
                      label: "Has Table Bookings",
                      value: true
                    }
                  ]}
                />
                <MultiDataList
                  dataField="online_delivery"
                  componentId="deliveryReactor"
                  showSearch={false}
                  data={[
                    {
                      label: "Online Delivery",
                      value: true
                    }
                  ]}
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-8 scroll marginBottom">
              <SelectedFilters />
              <ResultList
                componentId="queryResult"
                dataField="name"
                from={0}
                size={15}
                onData={this.onData}
                pagination={true}
                react={{
                  and: [
                    "currencyReactor",
                    "ratingsReactor",
                    "cuisineReactor",
                    "deliveringNowReactor",
                    "bookingReactor",
                    "deliveryReactor",
                    "tableBookinReactor",
                    "nameReactor",
                    "RangeSliderSensor"
                  ]
                }}
              />
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <ReactiveMap
                dataField="location"
                componentId="maps"
                defaultZoom={13}
                defaultCenter={{ lat: 14.55436, lng: -85.76 }}
                historicalData={true}
                setMarkerCluster={true}
                showMapStyles={false}
                showSearchAsMove={false}
                defaultMapStyle="Light Monochrome"
                onPopoverClick={this.onPopoverClick}
                autoCenter={true}
                size={100}
                react={{
                  and: [
                    "currencyReactor",
                    "ratingsReactor",
                    "cuisineReactor",
                    "deliveringNowReactor",
                    "bookingReactor",
                    "deliveryReactor",
                    "tableBookinReactor",
                    "nameReactor",
                    "RangeSliderSensor"
                  ]
                }}
              />
            </div>
          </div>
        </ReactiveBase>
      </div>
        )
    }
}
