/**
 * Created by truong.tuan.quang on 3/29/17.
 */

import React from 'react';
import Todo from '../../components/Todo';
import Layout from '../../components/Layout';

const title = 'Log In';

export default {

  path: '/todo',

  action() {
    return {
      title,
      component: <Layout><Todo title={title} /></Layout>,
    };
  },
};
