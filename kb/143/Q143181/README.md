---
layout: page
title: "Q143181: File Transfer Protocol (FTP) Server Monitor Counters"
permalink: /kb/143/Q143181/
---

## Q143181: File Transfer Protocol (FTP) Server Monitor Counters

{% raw %}

	Article: Q143181
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install the FTP Server from the Internet Information Server (IIS), four
	new objects are added to the existing list of objects. This article describes an
	object called "FTP server" which contains 19 counters.
	
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
	
	The definitions of the counters under the Performance Monitor object " FTP
	Server" are given below:
	
	  Bytes Received/sec
	  ------------------
	  Bytes Received/sec is the rate that data bytes are received by the FTP
	  Server.
	
	  Bytes Sent/sec
	  --------------
	  Bytes Sent/sec is the rate that data bytes are sent by the FTP Server.
	
	  Bytes Total/sec
	  ---------------
	  Bytes Total/sec is the sum of Bytes Sent/sec and Bytes Received/sec.
	  This is the total rate of bytes transferred by the FTP Server.
	
	  Connection Attempts
	  -------------------
	  Connection Attempts is the number of connection attempts that have been
	  made to the FTP Server.
	
	  Current Anonymous Users
	  -----------------------
	  Current Anonymous Users is the number of anonymous users currently
	  connected to the FTP Server.
	
	  Current Connections
	  -------------------
	  Current Connections is the current number of connections to the FTP
	  Server.
	
	  Current NonAnonymous Users
	  --------------------------
	  Current NonAnonymous Users is the number of nonanonymous users currently
	  connected to the FTP Server.
	
	  Files Received
	  --------------
	  Files Received is the total number of files received by the FTP Server.
	
	  Files Sent
	  ----------
	  Files Sent is the total number of files sent by the FTP Server.
	
	  Files Total
	  -----------
	  Files Total is the sum of Files Sent and Files Received. This is the
	  total number of files transferred by the FTP Server.
	
	  Logon Attempts
	  --------------
	  Logon Attempts is the number of logon attempts that have been made by
	  the FTP Server.
	
	  Maximum Anonymous Users
	  -----------------------
	  Maximum Anonymous Users is the maximum number of anonymous users
	  simultaneously connected to the FTP Server.
	
	  Maximum Connections
	  -------------------
	  Maximum Connections is the maximum number of simultaneous connections to
	  the FTP Server.
	
	  Maximum NonAnonymous Users
	  --------------------------
	  Maximum NonAnonymous Users is the maximum number of nonanonymous users
	  simultaneously connected to the FTP Server.
	
	  Total Anonymous Users
	  ---------------------
	  Total Anonymous Users is the total number of anonymous users that have
	  ever connected to the FTP Server.
	
	Additional query words: prodiis
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
