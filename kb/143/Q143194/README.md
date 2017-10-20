---
layout: page
title: "Q143194: World Wide Web Server Monitor Counters"
permalink: /kb/143/Q143194/
---

## Q143194: World Wide Web Server Monitor Counters

{% raw %}

	Article: Q143194
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install the World Wide Web (WWW) server from the Internet Information
	Server, four new objects are added to the existing list of objects in Windows NT
	Performance Monitor. This article describes an object called Internet
	Information Server which contains 28 counters.
	
	Performance Monitor is a graphical tool for measuring the performance of your own
	computer or other computers on a network. On each computer, you can view the
	behavior of objects such as processors, memory, cache, threads, and processes.
	Each of these objects has an associated set of counters that provide information
	on such things as device usage, queue lengths, and delays, as well as
	information used for throughput and internal congestion measurements. It
	provides charting, alerting, and reporting capabilities that reflect current
	activity along with ongoing logging. You can also open log files at a later time
	for browsing and charting as if they were reflecting current activity.
	
	MORE INFORMATION
	================
	
	The definitions of the counters under the Performance Monitor object World wide
	Web server are given below:
	
	BGI Requests
	------------
	
	Binary Gateway Interface (BGI) requests are custom gateway Dynamic Link Libraries
	(*.DLL files) the administrator can install to add forms processing or other
	dynamic data sources.
	
	Bytes Received/sec
	------------------
	
	Bytes Received/sec is the rate that data bytes are received by the HTTP server.
	
	Bytes Sent/sec
	--------------
	
	Bytes Sent/sec is the rate that data bytes are sent by the HTTP server.
	
	Bytes Total/sec
	---------------
	
	Bytes Total/sec is the sum of Bytes Sent/sec and Bytes Received/sec. This is the
	total rate of bytes transferred by the HTTP server.
	
	CGI requests
	------------
	
	Common Gateway Interface (CGI) requests are custom gateway executables (*.EXE
	files) the administrator can install to add forms processing or other dynamic
	data sources.
	
	Connection Attempts
	-------------------
	
	Connection Attempts is the number of connection attempts that have been made to
	the HTTP server.
	
	Connections/sec
	---------------
	
	Connections/sec is the number of HTTP requests being handled per second.
	
	Current Anonymous Users
	-----------------------
	
	Current Anonymous Users is the number of anonymous users currently connected to
	the HTTP server.
	
	Current BGI Requests
	--------------------
	
	Current BGI Requests is the current number of BGI requests that are
	simultaneously being processed by the HTTP server.
	
	Current CGI Requests
	--------------------
	
	Current CGI Requests is the current number of CGI requests that are
	simultaneously being processed by the HTTP server. This includes WAIS index
	queries.
	
	Current Connections
	-------------------
	
	Current Connections is the current number of connections to the HTTP server.
	
	Current NonAnonymous Users
	--------------------------
	
	Current NonAnonymous Users is the number of nonanonymous users currently
	connected to the HTTP server.
	
	Files Received
	--------------
	
	Files Received is the total number of files received by the HTTP server.
	
	Files Sent
	----------
	
	Files Sent is the total number of files sent by the HTTP server.
	
	Files Total
	-----------
	
	Files Total is the sum of Files Sent and Files Received. This is the total number
	of files transferred by the HTTP server.
	
	Get Requests
	------------
	
	Get Requests is the number of HTTP requests using the GET method. Get requests
	are generally used for basic file retrievals or image maps, though they can be
	used with forms.
	
	Head Requests
	-------------
	
	Head Requests is the number of HTTP requests using the HEAD method. Head requests
	generally indicate a client is querying the state of a document they already
	have, to see if it needs to be refreshed.
	
	Logon Attempts
	--------------
	
	Logon Attempts is the number of logon attempts that have been made by the HTTP
	server.
	
	Maximum Anonymous Users
	-----------------------
	
	Maximum Anonymous Users is the maximum number of anonymous users simultaneously
	connected to the HTTP server.
	
	Maximum BGI Requests
	--------------------
	
	Maximum BGI Requests is the maximum number of BGI requests that are
	simultaneously being processed by the HTTP server.
	
	Maximum CGI Requests
	--------------------
	
	Maximum CGI Requests is the maximum number of CGI requests that are
	simultaneously being processed by the HTTP server. This includes WAIS index
	queries.
	
	Maximum Connections
	-------------------
	
	Maximum Connections is the maximum number of simultaneous connections to the HTTP
	server.
	
	Maximum NonAnonymous Users
	--------------------------
	
	Maximum NonAnonymous Users is the maximum number of nonanonymous users
	simultaneously connected to the HTTP server.
	
	Not Found Errors
	----------------
	
	Not Found Errors is the number of requests that could not be satisfied by the
	server because the requested document could not be found. These are generally
	reported as an HTTP 404 error code to the client.
	
	Other Request methods
	---------------------
	
	Other Request methods is the number of HTTP requests that are not GET, POST or
	HEAD methods. These may include PUT, DELETE, LINK or other methods supported by
	gateway applications.
	
	Post Requests
	-------------
	
	Post Requests is the number of HTTP requests using the POST method. Post requests
	are generally used for forms or gateway requests.
	
	Total Anonymous Users
	---------------------
	
	Total Anonymous Users is the total number of anonymous users that have ever
	connected to the HTTP server.
	
	Total NonAnonymous Users
	------------------------
	
	Total NonAnonymous Users is the total number of nonanonymous users that have ever
	connected to the HTTP server.
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
