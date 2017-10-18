---
layout: page
title: "Q194423: XCLN: RPC Configuration Service Needed for Client to Connect"
permalink: kb/194/Q194423/
---

## Q194423: XCLN: RPC Configuration Service Needed for Client to Connect

	Article: Q194423
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03; WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a computer running Microsoft Exchange Server
	using the Microsoft Exchange or Outlook Client for Windows NT, the following
	error message is displayed:
	
	  Your Microsoft Exchange Server is unavailable.
	
	If you retry connecting to the server using the network, or work offline and
	connect using Dial-Up Networking, the following error message is displayed:
	
	  Network problems are preventing connection to the Microsoft Exchange
	  Server computer. Contact your system administrator if this condition
	  persists.
	
	Also, trying to resolve a mailbox name with the server by clicking the Check
	Names button in the properties sheet for the Exchange Server service displays
	the following error message:
	
	  The name could not be resolved. Network problems are preventing
	  connection to the Microsoft Exchange Server computer. Contact your
	  system administrator if this condition persists.
	
	CAUSE
	=====
	
	The Remote Procedure Call (RPC) Configuration service has not been installed or
	RPC services have been disabled.
	
	WORKAROUND
	==========
	
	To work around this problem, install the RPC Configuration Service in Windows NT
	4.0 by performing the following steps:
	
	1. Click the Start menu, point to Settings, click Control Panel, and then
	  double-click Network.
	
	2. Click the Services tab, click Add, and then click RPC Configuration Service.
	
	3. Click OK, and then type the path for the Windows NT source files. For
	  example, if you are using the Windows NT CD in drive D, type the following
	  line:
	
	  d:\i386
	
	4. Restart the computer when prompted.
	
	-OR-
	
	If the service has been disabled, perform the following steps:
	
	1. Click the Start menu, point to Settings, click Control Panel, and then
	  double-click Services.
	
	2. Select the Remote Procedure Call (RPC) Service, and then click Start to start
	  the service.
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT
	Version           : :8.0,8.01,8.02,8.03; WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
