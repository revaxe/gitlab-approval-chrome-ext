'use strict'

/**
 * Scrapes through and gets the ids of the Merge Requests that are currently visible on the page.
 * @param {Integer} projectId the project id.
 */
function parseMergeRequestsOnPage () {
  document.querySelectorAll('li.merge-request').forEach((mr) => {
    // Get the approvals number
    let approvalElement = mr.querySelector('.issuable-meta li.d-none.text-success')
    if (approvalElement) {
      let approvalNumber = RegExp(/(\d+)/).exec(approvalElement.getAttribute("title"))[0]
      approvalElement.innerHTML = approvalElement.innerHTML.concat(approvalNumber)
    }
  })
}

/*
 * Loads up the settings, and then begins pulling in the merge request approval info.
 */
function getSettingsAndStart () {
  // Begin parsing and injecting views
  if (window.location.href.indexOf('merge_requests') !== -1) {
    if (window.location.href.indexOf('groups') !== -1) {
      parseMergeRequestsOnPage()
    }
  }
}

// Begin running
getSettingsAndStart()
