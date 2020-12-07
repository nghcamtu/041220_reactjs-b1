import React, { Component } from 'react'

import BTCarousel from './BTCarousel'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'
import BTSmartPhone from './BTSmartPhone'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader/>
                <BTCarousel/>
                <BTSmartPhone/>
                <BTFooter/>
            </div>
        )
    }
}
