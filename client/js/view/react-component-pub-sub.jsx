import React from 'react';
import PubSub from 'pubsub-js';
import * as pubSubTopics from '../pub-sub-topics.js';

export default class ReactComponentPubSub extends React.Component {

    constructor(props) {
        super(props);
        this.__pubSubToken = [];
    }

    subscribe(topic, fct) {
        this.__pubSubToken.push(PubSub.subscribe(topic, fct));
    }

    get pubSubTopics() {
        return pubSubTopics;
    }

    componentWillUnmount() {
        for (let i = 0, len = this.__pubSubToken.length; i < len; i++) {
            PubSub.unsubscribe(this.__pubSubToken[i]);
        }
    }
}