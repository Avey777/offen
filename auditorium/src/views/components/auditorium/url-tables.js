/**
 * Copyright 2020 - Offen Authors <hioffen@posteo.de>
 * SPDX-License-Identifier: Apache-2.0
 */

/** @jsx h */
const { h } = require('preact')

const Tables = require('./tables')
const ExplainerIcon = require('./explainer-icon')

const URLTable = (props) => {
  const { model, showExplainer } = props
  return (
    <div class='flex-auto pa3 bg-white'>
      <h4 class='f4 normal mt0 mb4'>
        {__('Top pages')}
        {showExplainer ? <ExplainerIcon marginLeft /> : null}
      </h4>
      <Tables.Container
        showExplainer={showExplainer}
      >
        <Tables.Table
          columnNames={[__('URL'), __('Pageviews')]}
          rows={model.pages}
          showExplainer={showExplainer}
        />
      </Tables.Container>
      <Tables.Container
        showExplainer={showExplainer}
      >
        <Tables.Table
          headline={__('Referrers')}
          columnNames={[__('Host'), __('Pageviews')]}
          rows={model.referrers}
        />
        <Tables.Table
          headline={__('Campaigns')}
          columnNames={[__('Campaign'), __('Pageviews')]}
          rows={model.campaigns}
        />
        <Tables.Table
          headline={__('Sources')}
          columnNames={[__('Source'), __('Pageviews')]}
          rows={model.sources}
        />
      </Tables.Container>
      <Tables.Container
        showExplainer={showExplainer}
      >
        <Tables.Table
          headline={__('Landing Pages')}
          columnNames={[__('URL'), __('Landings')]}
          rows={model.landingPages}
        />
        <Tables.Table
          headline={__('Exit Pages')}
          columnNames={[__('URL'), __('Exits')]}
          rows={model.exitPages}
        />
      </Tables.Container>
    </div>
  )
}

module.exports = URLTable
