import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'


export default class Services extends Component {
    state = {
        services : [
            {
                icon :<FaCocktail/>,
                title : "free cocktails",
                info : "Providing free cocktails"
            },
            {
                icon :<FaHiking/>,
                title : "endless hiking",
                info : "Providing free cocktails"
            },
            {
                icon :<FaShuttleVan/>,
                title : "free shuttle",
                info : "Providing free cocktails"
            },
            {
                icon :<FaBeer/>,
                title : "strong beer",
                info : "Providing free cocktails"
            }

        ]
    }
    render() {
        return (
            <section className="services">
                <Title  title="services"></Title>
            
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
