---
layout: page
title: "Q155768: IIS Services Will Not Start"
permalink: /kb/155/Q155768/
---

## Q155768: IIS Services Will Not Start

	Article: Q155768
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:1.0,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	- the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start any of the Internet Information Server (IIS) services,
	such as the World Wide Web, Gopher, or FTP Server services in the Internet
	Service Manager, the service does not start nor does it give a message
	indicating a problem.
	
	If you double-click on the computer name in the Internet Service Manager, the
	following message appears:
	
	  Unable to connect to target machine.
	
	Trying to start any of the IIS services with the Services tool in Control Panel,
	results in the following error message:
	
	  Could not start the (FTP, Gopher, or World Wide Web) Publishing Service
	  service on \\computername
	
	  Error 1075: The dependency service does not exist or has been marked for
	  deletion.
	
	No messages are logged in the event log.
	
	CAUSE
	=====
	
	The Remote Procedure Call (RPC) Service is not installed. All of the IIS
	services depend on the RPC Service.
	
	Additionally, if the TCP/IP protocol is not installed, the same symptoms result.
	
	RESOLUTION
	==========
	
	1. In Control Panel, double-click the Network icon.
	
	2. Select Add Software and then install "RPC Configuration."
	
	3. If TCP/IP is not installed, install it using the Network tool in Control
	  Panel, as described above.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbOSWinSearch kbOSWinNT351 kbiis100 kbOSWinNTSearch
	Version           : winnt:1.0,3.51
	
	=============================================================================
	
