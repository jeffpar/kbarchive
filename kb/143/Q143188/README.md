---
layout: page
title: "Q143188: Gopher Server Monitor Counters"
permalink: kb/143/Q143188/
---

## Q143188: Gopher Server Monitor Counters

	Article: Q143188
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install the Gopher Server from the Internet Information Server, four
	new objects are added to the existing list of objects. This article describes an
	object called "Gopher server" which contains 19 counters.
	
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
	
	The definitions of the counters under the Performance Monitor object "Gopher
	Server" are listed below:
	
	Aborted Connections
	-------------------
	
	Aborted Connections is the total number of connections aborted due to error or
	over the limit requests made to the Gopher Server.
	
	Bytes Received/sec
	------------------
	
	Bytes Received/sec is the rate that data bytes are received by the Gopher
	Server.
	
	Bytes Sent/sec
	--------------
	
	Bytes Sent/sec is the rate that data bytes are sent by the Gopher Server.
	
	Bytes Total/sec
	---------------
	
	Bytes Total/sec is the sum of Bytes Sent/sec and Bytes Received/sec. This is the
	total rate of bytes transferred by the Gopher Server.
	
	Connection Attempts
	-------------------
	
	Connection Attempts is the number of connection attempts that have been made to
	the Gopher Server.
	
	Connections in Error
	--------------------
	
	Connections in Error is the number of connections that had errors when processed
	by the Gopher Server.
	
	Current Anonymous Users
	-----------------------
	
	Current Anonymous Users is the number of anonymous users currently connected to
	the Gopher Server.
	
	Current Connections
	-------------------
	
	Current Connections is the current number of connections to the Gopher Server.
	
	Current NonAnonymous Users
	--------------------------
	
	Current NonAnonymous Users is the number of nonanonymous users currently
	connected to the Gopher Server.
	
	Directory Listings Sent
	-----------------------
	
	Directory Listings Sent is the total number of directory listings sent by the
	Gopher Server.
	
	Files Sent
	----------
	
	Files Sent is the total number of files sent by the Gopher Server.
	
	Gopher Plus Requests
	--------------------
	
	Gopher Plus Requests is the number of Gopher Plus requests received by Gopher
	Server.
	
	Logon Attempts
	--------------
	
	Logon Attempts is the number of logon attempts that have been made by the Gopher
	Server.
	
	Maximum Anonymous Users
	-----------------------
	
	Maximum Anonymous Users is the maximum number of anonymous users simultaneously
	connected to the Gopher Server.
	
	Maximum Connections
	-------------------
	
	Maximum Connections is the maximum number of simultaneous connections to the
	Gopher Server.
	
	Maximum NonAnonymous Users
	--------------------------
	
	Maximum NonAnonymous Users is the maximum number of nonanonymous users
	simultaneously connected to the Gopher Server.
	
	Searches Sent
	-------------
	
	Searches is the total number of searches performeed by the Gopher Server.
	
	Total Anonymous Users
	---------------------
	
	Total Anonymous Users is the total number of anonymous users that have ever
	connected to the Gopher Server.
	
	Total NonAnonymous Users
	------------------------
	
	Total NonAnonymous Users is the total number of nonanonymous users that have ever
	connected to the Gopher Server.
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	
