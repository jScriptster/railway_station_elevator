import PubSub from 'pubsub-js';
import * as pubSubTopics from '../pub-sub-topics.js';

export default class Publisher {

    publish(topic, value) {
        PubSub.publish(topic, value);
    }

    get pubSubTopics() {
        return pubSubTopics;
    }

}