---
layout: page
title: "Q188903: Event Viewer Does Not Show IUSR_machinename Account Logon"
permalink: /kb/188/Q188903/
---

## Q188903: Event Viewer Does Not Show IUSR_machinename Account Logon

	Article: Q188903
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When troubleshooting Internet Information Server (IIS) permission problems, it
	is often useful to turn on Windows NT auditing for successful and failed
	logon/logoff events, as suggested by the following article in the Microsoft
	Knowledge Base:
	
	  Q185874 : How to Troubleshoot Permissions in IIS 4.0
	
	However, sometimes you may not see the IUSR_machinename account being logged on
	to the system when using anonymous access.
	
	CAUSE
	=====
	
	This is a result of the account used for anonymous access being cached by IIS
	for a short period. If the account is re-used before this period has elapsed,
	the account is not logged on again, but instead the cached token is used and no
	event is shown in the event viewer.
	
	WORKAROUND
	==========
	
	To record each time the IUSR_machinename account is logged on and off, you can
	disable the IIS caching of the anonymous user account by setting the
	PasswordCacheTTL ASO property to zero.
	
	The following sample code can be called from Visual Basic, ASP, and Windows
	Script Host with minimal changes in each environment and will affect all Web
	server instances:
	
	     Dim oServer
	     Set oServer = GetObject("IIS://LocalHost/W3SVC")
	     oServer.PasswordCacheTTL = 0
	     oServer.SetInfo
	     Set oServer = Nothing
	
	Please note: There is a performance tradeoff while doing this. The procedure
	should be restricted to development and debugging only.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
