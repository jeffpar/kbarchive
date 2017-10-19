---
layout: page
title: "Q257547: Event ID 204 in Event Log and ASP Response Is Not Returned"
permalink: /kb/257/Q257547/
---

## Q257547: Event ID 204 in Event Log and ASP Response Is Not Returned

	Article: Q257547
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbiis500
	Last Modified: 31-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to access an Active Server Pages (ASP) page on an Internet
	Information Services (IIS) 5.0 server, the server does not appear to return a
	response to the client's browser.
	
	In addition, the following event is logged in the system event log:
	
	  Event Type: Error
	  Event Source: WAM
	  Event Category: None
	  Event ID: 204
	  Date: 10/1/2000
	  Time: 2:52:48 PM
	  User: N/A
	  Computer: MyComputerName
	  Description:
	  The HTTP server encountered an unhandled exception while processing the ISAPI
	  Application ' IISRTL!ALLOC_CACHE_HANDLER::Alloc(void) + 0x7
	  ISATQ!_AtqAddAsyncHandle@24 + 0x1C ISATQ!CDirMonitor::Monitor(class
	  CDirMonitorEntry *,char const *,int,unsigned long) + 0xA8 asp + 0x879B +
	  0xD86A3FBE '.
	
	CAUSE
	=====
	
	If the Microsoft Winsock Proxy Client is installed, the IWAM_computername user
	account may not have access permissions to the \Winnt\System32\Wspwsp.dll file.
	
	RESOLUTION
	==========
	
	To resolve this problem, give Read permissions to the IWAM_computername account
	on the \Winnt\System32\Wspwsp.dll file.
	
	WORKAROUND
	==========
	
	
	Additional query words: iis 5 win2k iis5.0 204
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbiis500 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
