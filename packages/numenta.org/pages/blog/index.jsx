// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import ListItem from 'numenta-web-shared-components/ListItem'
import ListOrder from 'numenta-web-shared-components/List'
import Section from 'numenta-web-shared-components/Section'
import {sortDateDescend} from 'numenta-web-shared-utils/shared'

import PostListRow from '../../components/PostListRow'

const title = 'Blog'


/**
 * Blog Post List index page - React view component.
 */
const BlogPage = (props, {route}) => {
  const {pages} = route
  const posts = pages.filter(({file}) => (file.path.match(/^blog\/.*\.md/)))
  const items = posts.sort(sortDateDescend).map((post) => (
    <ListItem key={post.file.stem}>
      <PostListRow post={post} />
    </ListItem>
  ))

  return (
    <article>
      <Helmet title={title} />
      <Section headline={true} open={true} title={title}>
        <ListOrder copy={false}>
          {items}
        </ListOrder>
      </Section>
    </article>
  )
}

BlogPage.contextTypes = {
  route: React.PropTypes.object,
}

export default BlogPage