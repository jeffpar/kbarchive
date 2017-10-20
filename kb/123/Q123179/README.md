---
layout: page
title: "Q123179: MDI DB2 Gateway Reports Open Server Error"
permalink: /kb/123/Q123179/
---

## Q123179: MDI DB2 Gateway Reports Open Server Error

{% raw %}

	Article: Q123179
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0; winnt:4.2x
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft SQL Server version 4.2x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you issue a host query through the Micro DecisionWare DB2 database gateway
	for Windows NT (running over SNA Server), the gateway may report the following
	errors:
	
	  Open Server Processor Error.
	
	  -or-
	
	  Open Server OS Error: Not enough storage is available to process this
	  command.
	
	
	The Micro DecisionWare gateway was configured to communicate to SQL Server
	clients over the Netware IPX/SPX protocol.
	
	CAUSE
	=====
	
	There is a memory problem (a memory leak) in SQL Server version 4.21 in the
	DBMSSPXN.DLL file. This problem was fixed in version 4.21a.
	
	RESOLUTION
	==========
	
	To resolve this problem, apply the DBMSSPXN.DLL from SQL Server 4.21a to the
	computer running the Micro DecisionWare DB2 database gateway for Windows NT.
	
	NOTE: While this problem is not related to SNA Server, it is included here to
	make this information easier to locate.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0; winnt:4.2x
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
