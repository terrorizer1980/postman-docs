---
title: "Analyzing with reports"
page_id: "viewing_and_analyzing_apis"
order: 99
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the API Builder"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
  - type: link
    name: "Managing and sharing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Create APIs directly within the Postman app"
    url: "https://blog.postman.com/2019/05/17/postman-7-1-create-apis-directly-within-the-postman-app/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Validating APIs against schema"
    url: "/docs/designing-and-developing-your-api/validating-elements-against-schema/"
---

> [__API reports are available on Postman Enterprise.__](https://www.postman.com/pricing)

You can access reports on your APIs in the [Postman web dashboard](https://app.getpostman.com/dashboard). API reports visualize data on API activities including creation, collection execution, test runs, and more, providing insights on performance, troubleshooting, and SLA adherence, as well as team and organization metrics.

To generate reports in Postman, first ensure you have carried out the following steps:

* [Share your API](/docs/designing-and-developing-your-api/managing-apis/)
* [Add a collection to the API](/docs/designing-and-developing-your-api/the-api-workflow/#generating-a-collection)
* Turn on __Save Responses__ in __History__ on the left of Postman
* Send a request from the collection

To view reports, in __APIs__ on the left of Postman, select the API and click __Reports__.

![API Reports](https://assets.postman.com/postman-docs/api-reports-button.jpg)

The __Reports__ section of the web dashboard will open in your browser. Postman generates reports on [teams](#team-reports) and [APIs](#api-reports).

> [__Postman Enterprise Plan__](https://www.postman.com/pricing)

The __Postman Enterprise__ plan is our enterprise-grade offering, with powerful tools to securely manage, organize, and accelerate large-scale API development.

The left navigation helps to understand around the reports easily:

* __Team Activity__
* __All APIs__
* __Private Network APIs__
* __Individual API View__

## Team activity

The __Reports__ &gt; __Team Activity__ report provides team level metrics, including team overview, team size, billing details, team activity and workspaces. Click to view the details on a particular metric. This dashboard view can be split into 3 sections:

* __Team overview__
* __Billing__
* __Team activity__

Team overview provides the following information:

* __Team created on__ as the date when the team was created
* __Team size__ as the number of user accounts in the team
* __Total slots__  as the number of slots in the team
* __Invitations sent__ is the total number of invitations which was sent
* __Open vs used slots__ used slots include any pending invitations sent or approved by a team admin
* __Active users over time__
* __Team size over time__ is the size of the team over a period of time
* __SSO identity provider__

The active users over time are the users who have signed into Postman atleast once over the past 30 days. In this example, the active users for the month of May 2020 is 83.

Billing provides the following information:

* __Plan__ the current active plan the user has subscribed
* __Billing cycle__ as monthly or annually
* __Renewal date__ as the date of renewal of the existing plan

Team activity provides the following information:

* __Total collections__ is the total number of collections in team and personal workspaces including private workspaces
* __Total APIs__ is the total number of APIs in the team and personal workspaces including private workspaces
* __Publicly documented collection__
* __Active monitors__ is the total number of active monitors in  team workspaces including private workspaces
* __Requests sent in Postman__ as the requests sent manually in Postman and not any requests sent via Newmans, monitoring runs or the collection runner

[![request sent in postman](https://assets.postman.com/postman-docs/request-sent-in-postman.jpg)](https://assets.postman.com/postman-docs/request-sent-in-postman.jpg)

* __Collections created__ as the total number of collections created in team workspaces including private workspaces

[![collections created](https://assets.postman.com/postman-docs/collections-created.jpg)](https://assets.postman.com/postman-docs/collections-created.jpg)

> In this example, the collections created for the month of April is 5392.

* __Collection runs__ made in team workspaces including private workspaces

> In this example, the collection run for the month of March 2020 is 3900.

* __Empty workspaces__ with no collections in them
* __Active workspaces__ with at least one revision during a recent period, not including personal workspaces

## All APIs

The __Reports__ &gt; __All APIs__ report provides metrics, including API overview, total APIs, visualization on API development, and details of APIs with and without mocks, monitors, tests and documentation separately. This dashboard view can be split into 2 sections:

* __API overview__

API overview provides the following information:

* __Total APIs__
* __APIs created over time__ the total number of APIs created over a period of time on a monthly level
* __Private Network APIs__
* __Shared APIs__
* __APIs created/updated in last 24 hours__

[![api overview](https://assets.postman.com/postman-docs/api-overview.jpg)](https://assets.postman.com/postman-docs/api-overview.jpg)

For APIs created over a period of time, the user can access the total count of APIs on a monthly basis.

[![api created over time](https://assets.postman.com/postman-docs/apis-created-over-time.jpg)](https://assets.postman.com/postman-docs/apis-created-over-time.jpg)

> In this example, the total number of APIs created for the month of July is 45.

* __API development__

[![api development](https://assets.postman.com/postman-docs/api-development.jpg)](https://assets.postman.com/postman-docs/api-development.jpg)

API development provides the following information:

* __APIs by schema type__ The information of defined APIs that are present(How many are OpenAPI3, GraphQL, Swagger etc) visualized using a pie chart

[![apis by schema type](https://assets.postman.com/postman-docs/apis-by-schema-type.jpg)](https://assets.postman.com/postman-docs/apis-by-schema-type.jpg)

> In this example, the count of APIs for OpenAPI(3.0) is 249.

* __APIs with mocks/monitors/tests/documentation__ The number of APIs that are defined, documented, monitored, mocked, and tested

[![api mocks monitors tests](https://assets.postman.com/postman-docs/api-mocks-monitors-tests.jpg)](https://assets.postman.com/postman-docs/api-mocks-monitors-tests.jpg)

> In this example, the APIs with/without mocks, monitors, tests and documentation is visualized in percentages. Hover on the chart to view the API data in figures. From the chart, you can observe that the APIs with documentation is 20%.

## Private Network APIs

The __Reports__ &gt; __Private Network APIs__ provide an insight into total published APIs, pie-chart depicting APIs categorised by schema type and details of APIs with and without mocks, monitors, tests and documentation separately.

Private network API provides the following information:

* __Published APIs__ The number of APIs that are published to the Private API network
* __APIs by schema type__ The information of defined APIs that are present(How many are OpenAPI3, GraphQL etc) visualized using a pie chart
* __APIs with mocks/monitors/tests/documentation__ The number of APIs that are defined, documented, monitored, mocked, and tested

[![private-network-api](https://assets.postman.com/postman-docs/private-network-api.jpg)](https://assets.postman.com/postman-docs/private-network-api.jpg)

> [__Postman Business Plan__](https://www.postman.com/pricing)

The __Postman Business__ plan helps you rapidly scale your organization and manage the entire API workflow, all in one place. For users in the business plan, the reports section of the web dashboard will open in your browser.

![Reports Dashboard](https://assets.postman.com/postman-docs/reports-dash.jpg)

The __Team__ &gt; __Overview__ report provides organization level metrics, including new and active APIs, team size, and workspaces. Click to view more data on a particular metric.

## Team reports

Team reports provide the following information:

* __Total number of APIs__ present in the team, including in private and public workspaces
* __New APIs__ created within the team, not including new versions
* __Active APIs__ having at least one request being sent through a linked collection in the Postman request builder
* __Team size__ as the number of user accounts in the team
* __Empty workspaces__ with no collections in them
* __Active workspaces__ with at least one revision during a recent period, not including personal workspaces

Team API requests are the count of requests sent over a period of time. The summary average is calculated by taking into account all days (even if no request is sent during a day).

[![team api req](https://assets.postman.com/postman-docs/Reports-TeamAPI.png)](https://assets.postman.com/postman-docs/Reports-TeamAPI.png)

> In this example, 15 requests were sent on Jun 12. Over the next six days, no requests were sent. The 7-day average is 2.14 (15/7).

## API reports

API reports provide a graphical representation of data and enable you to filter the data by collection and duration (last 7 or 30 days). You can view reports for any individual collections you have linked to an API.

> Reports only track data from APIs you have shared to team workspaces. If your API is only shared to a personal workspace you will not see reports for it.

API reports provide the following information:

* __Average response size__ of requests in bytes or kilobytes
* __Average response time__ for your API to serve a request
* __Number of error responses__ indicating error codes returned by your API
* __Traffic in Postman__ indicating usage and API traffic for performance measurement
* __Failed test runs__ indicating the number of failed tests in collection runs and monitors, for debugging and troubleshooting errors in your requests

The average response size is calculated based on the size of the response and the number of requests sent on a particular day.

[![team api req](https://assets.postman.com/postman-docs/Reports-AvgResp.png)](https://assets.postman.com/postman-docs/Reports-AvgResp.png)

> In this example, the response size is shown for Jun 12. No request is sent on other dates in the graph.

The average response time is calculated based on the time taken to return the response of the request and the number of requests sent on a particular day.

[![team api req](https://assets.postman.com/postman-docs/Reports-AvgRespTime.png)](https://assets.postman.com/postman-docs/Reports-AvgRespTime.png)

> In this example, the response time is shown for Jun 12. No response is received on other dates because no request is sent.
>
> Summary average response size may not match the average of the graph, because raw data is accounted for when calculating averages. In order to determine an accurate average, Postman does not calculate averages using data from already derived averages.

Failed test runs are the number of failed tests for collection runs during a period of time. The summary average is calculated by taking into account all of the days in that time period (even if no requests are sent on certain days).

## Report detail

Reports are not generated in realtime. You may experience a lag of a few minutes to 24 hours in report data being available. You can view the last updated time for reports.

<img alt="Reports Update" src="https://assets.postman.com/postman-docs/reports-last-update.jpg" width="400px"/>

> You cannot currently download or export your reports.

Postman reports track data sent only through the request builder, and not through Newman, collection runs, or monitors. However, failed test runs generate reports using collection runs.

> You cannot view the details of entities you do not have access to.

If you don't see any data in your reports, or your data is incomplete (for example you have empty response times or sizes) this may be due to one of the following reasons:

* It's too early to check. The data refreshes every 24 hours.
* You may not have linked a collection to your API.
* You may not have sent a request—or you may have executed requests from monitoring, collection runs, or Newman, but not from the request builder in Postman.
* You may not have enabled __Save Responses__ in the __History__ tab in Postman.
* Sync is not successfully communicating with the Postman servers.

> If none of the above reasons apply and you can't see your data, please file a [GitHub issue](https://github.com/postmanlabs/).

## Next steps

You can use [monitors](/docs/designing-and-developing-your-api/monitoring-your-api/intro-monitors/) to gain detailed insight into your APIs.
