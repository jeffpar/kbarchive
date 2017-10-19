---
layout: page
title: "Q170863: Error in Event Log after Deleting the Anonymous User Account"
permalink: /kb/170/Q170863/
---

## Q170863: Error in Event Log after Deleting the Anonymous User Account

	Article: Q170863
	Product(s): Internet Information Server
	Version(s): WinNT:3.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you delete the IUSER_ account from User Manager for Domains because you are
	not using Anonymous authentication, but have the IUSER_ account and password in
	the WWW Service Properties, the event log may contain the following warning, if
	you use only Basic and Microsoft Windows NT Challenge Response for
	authentication:
	
	  Event id's 100 in the system log, source=w3svc. The server was unable
	  to logon the Windows NT account 'IUSER_ due to the following error:
	
	  Logon failure: Unknown user name or bad password. The data is the error code.
	
	The above warning is logged each time you request a page or image located in a
	directory other than the root directory or the directory that was originally
	authenticated.
	
	Note: The above errors can also occur if Anonymous connections are allowed in
	IIS, but Proxy Server is installed on the same computer and Anonymous is
	disabled.
	
	CAUSE
	=====
	
	The browser is unaware of the authentication method used by the Web server. The
	browser tries the first method on the list, which is the IUSER_ account in the
	Services tab of the WWW Service Properties. When the browser finds that the
	IUSER_ account has been deleted, it checks for the next method on the list,
	Allow Anonymous.
	
	If Allow Anonymous is not selected, the browser tries Basic Clear Text. If Basic
	Clear Text is also not selected, the browser tries Windows NT Challenge
	Response.
	
	If Windows NT Challenge Response is selected and valid, the browser opens the
	site or page using this authentication method. Therefore, you do not see an
	error in the browser, but only a warning in the Event Viewer.
	
	RESOLUTION
	==========
	
	To resolve this problem, use a valid account and password. To do so, follow
	these steps:
	
	1. In the WWW Service properties, click the Service tab.
	
	2. Add a user name that is a valid user account in User Manager for Domains, and
	  give the user Log On Locally permissions.
	
	Note: Do not delete the IUSER_ account, even if you are not using it.
	
	Additional query words: iis
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis300
	Version           : WinNT:3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
