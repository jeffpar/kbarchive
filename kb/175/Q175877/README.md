---
layout: page
title: "Q175877: CSNW Connection Leak When Running 16-bit Applications"
permalink: /kb/175/Q175877/
---

## Q175877: CSNW Connection Leak When Running 16-bit Applications

{% raw %}

	Article: Q175877
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix kbinfo kbArtTypeINF
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Client Services for NetWare (CSNW) or Gateway Services for NetWare
	(GSNW) to connect to a NetWare server and you are running a logon script or
	manually invoking a 16-bit application on a NetWare server, you may receive the
	following error when you attempt to log back on:
	
	  NetWare Authentication Failure
	
	  You cannot be authenticated on <NetWare Tree and Context> due to the
	  following reason: A connection to the server could not be made because
	  the limit on the number of concurrent connections for this account has
	  been reached.
	
	  Do you want to select another preferred server or context?
	
	CAUSE
	=====
	
	The NetWare server has Limit Concurrent Connections for your user account set to
	1. When the client logs off after running the 16-bit application, the connection
	on the NetWare server is not closed. This results in an unlicensed connection on
	the NetWare server. The connections are cleaned up if the user shuts down and
	restarts the server before logging back on.
	
	NOTE: You can determine if a connection is unlicensed by going to the NetWare
	server, loading monitor, and then selecting the active connection list.
	Unlicensed connections will have an asterisk (*) in front of the user name.
	
	RESOLUTION
	==========
	
	You can work around this problem by performing any of the following:
	
	- Set the concurrent connections for your user account to a higher value on the
	  NetWare server.
	
	  -or-
	
	- Shut down and restart the workstation after each use.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	For additional information on ensuring that the connection leak is fixed, please
	see the following article in the Microsoft Knowledge Base:
	
	ARTICLE-ID: Q174676
	TITLE : "NetWare Authentication Failure" Logging On to NetWare Server
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix kbinfo kbArtTypeINF 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
