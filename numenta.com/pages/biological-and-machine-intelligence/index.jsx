import moment from 'moment'
import React from 'react'

import Anchor from '../../components/Anchor'
import Code from '../../components/Code'
import ListItem from '../../components/ListItem'
import ListOrder from '../../components/ListOrder'
import Paragraph from '../../components/Paragraph'
import Section from '../../components/Section'
import Strong from '../../components/Strong'
import SubTitle from '../../components/SubTitle'
import TextLink from '../../components/TextLink'


/**
 *
 */
const BamiPage = (props, {config}) => {
  const {links} = config

  return (
    <div>
      <Section
        headline={true}
        open={true}
        title="Biological and Machine Intelligence (BaMI)"
      >
        <Paragraph>
          <Strong>Biological and Machine Intelligence (BAMI)</Strong> is a
          living book authored by Numenta researchers and engineers. Its purpose
          is to document Hierarchical Temporal Memory, a theoretical framework
          for both biological and machine intelligence. While there’s a lot more
          work to be done on HTM theory, we have made good progress on several
          components of a comprehensive theory of the neocortex and how to apply
          that knowledge to practical applications.  We would like to share our
          work as we go.  We hope this book will become the standard reference
          for people who want to learn about HTM cortical theory and its
          applications for machine intelligence. Going forward we anticipate
          using two main forms of documentation of our research, one is
          published research papers and the other is additions to this book,
          Biological and Machine Intelligence.
        </Paragraph>
        <Paragraph>
          Just as we make all of our research and technology available in open
          source, we want to be transparent with this manuscript as well, even
          well-ahead of its completion. When it is finished, this book will
          cover all the fundamental concepts of HTM theory. For now, we are
          sharing the chapters that have been completed, each of which contains
          a revision history, so you can see what has changed in each chapter.
          Over time, we will add chapters to BAMI.
        </Paragraph>
        <Paragraph>
          The “Content to be Incorporated” section has place holders for new
          chapters. Importantly, it contains links to updated psuedocode for the
          current Spatial Pooler and Temporal Memory algorithms. It also has
          links to scientific papers and other material that cover topics we
          intend to make into chapters.
        </Paragraph>
        <Paragraph>
          We {' '}
          {/* eslint-disable max-len */}
          <TextLink to="https://numenta.wufoo.com/forms/biological-and-machine-intelligence-bami/">
            welcome your feedback and comments.
          </TextLink> {' '}
          {/* eslint-enable max-len */}
          We will make revisions available on an occasional basis. If you want
          to be notified about additions and revisions, please follow this
          Twitter feed: {' '}
          <TextLink to="https://twitter.com/NumentaBAMI">
            @NumentaBAMI.
          </TextLink>
        </Paragraph>

        <Anchor name="sections" />
        <SubTitle level={3}>Book Sections</SubTitle>
        {/* eslint-disable max-len */}
        <ListOrder marker="disc">
          <ListItem>
            <TextLink to="http://numenta.com/assets/pdf/biological-and-machine-intelligence/0.4/BaMI-Introduction.pdf" target="_new">
              Introduction
            </TextLink>
          </ListItem>
          <ListItem>
            <TextLink to="http://numenta.com/assets/pdf/biological-and-machine-intelligence/0.4/BaMI-HTM-Overview.pdf" target="_new">
              HTM Overview
            </TextLink>
          </ListItem>
          <ListItem>
            <TextLink to="http://numenta.com/assets/pdf/biological-and-machine-intelligence/0.4/BaMI-SDR.pdf" target="_new">
              Sparse Distributed Representations
            </TextLink>
          </ListItem>
          <ListItem>
            <TextLink to="http://numenta.com/assets/pdf/biological-and-machine-intelligence/0.4/BaMI-Encoders.pdf" target="_new">
              Encoders
            </TextLink>
          </ListItem>
          <ListItem>
            <TextLink to="http://numenta.com/assets/pdf/biological-and-machine-intelligence/0.4/BaMI-Other-Content.pdf" target="_new">
              Content to be Incorporated
            </TextLink>
          </ListItem>
          <ListItem>
            <TextLink to="http://numenta.com/assets/pdf/biological-and-machine-intelligence/0.4/BaMI-Problem-Sets.pdf" target="_new">
              Problem Sets
            </TextLink>
          </ListItem>
          <ListItem>
            <TextLink to="http://numenta.com/assets/pdf/biological-and-machine-intelligence/0.4/BaMI-Glossary.pdf" target="_new">
              Glossary
            </TextLink>
          </ListItem>
        </ListOrder>
        {/* eslint-enable max-len */}

        <Anchor name="citation" />
        <SubTitle>Citing the Book</SubTitle>
        <Paragraph>
          This release of Biological and Machine Intelligence is not close to
          being complete, so the book is not formally “published”. However, we
          encourage you to cite this book in your own work by using one of these
          formats:
        </Paragraph>
        <SubTitle level={3}>End Reference</SubTitle>
        <Code>
Hawkins, J. et al. 2016. Biological and Machine Intelligence.
  Release 0.4. Accessed at
  http://numenta.com{links.in.bami}.
        </Code>
        <SubTitle level={3}>Bibtex</SubTitle>
        <Code>
@unpublished&#123;Hawkins-et-al-2016-Book,
  title=&#123;Biological and Machine Intelligence&#125;,
  author=&#123;Hawkins, J. and Ahmad, S. and Purdy, S. and Lavin, A.&#125;,
  note=&#123;Initial online release 0.4&#125;,
  url=&#123;http://numenta.com{links.in.bami}&#125;,
  year=&#123;{moment().year()}&#125;
&#125;
        </Code>
        <Paragraph>
          Note that some of the material in BAMI has been formally published;
          you can look at these {' '}
          <TextLink to={links.in.papers}>papers</TextLink> to get the
          appropriate citations.
        </Paragraph>
      </Section>
    </div>
  )
}

BamiPage.contextTypes = {
  config: React.PropTypes.object,
}

export default BamiPage
