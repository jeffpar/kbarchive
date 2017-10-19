---
layout: page
title: "Q179444: Error Message: NetWare Authentication Failure"
permalink: /kb/179/Q179444/
---

## Q179444: Error Message: NetWare Authentication Failure

	Article: Q179444
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to a Novell NetWare server using Client Services for
	NetWare (CSNW), you may receive the following error message:
	
	  NetWare Authentication Failure
	
	  You cannot be authenticated on <server> due to the following reason:
	  A connection to the server could not be made because the limit on the
	  number of concurrent connections for this account has been reached.
	
	  Do you want to select another preferred server?
	
	CAUSE
	=====
	
	This behavior can occur if you log in to a computer that has remote access
	service (RAS) Autodial Manager service enabled, log out of Windows NT, and then
	immediately log back in without restarting the computer.
	
	RESOLUTION
	==========
	
	To work around this issue, disable the RAS Autodial Manager service. To do this,
	follow these steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. Click Remote Access Autodial Manager, and then click Startup.
	
	3. Click Disabled, click OK, and then click Close.
	
	If you are using hardware profiles, this service can be disabled in a specific
	profile. To do this, follow these steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. Click Remote Access Autodial Manager, and then click HW Profiles.
	
	3. Click the appropriate profile, and then click Disable.
	
	4. Click OK, and then click Close.
	
	MORE INFORMATION
	================
	
	This issue occurs when the previous preferred server connection is not closed
	because the Logon User ID (LUID) for the previous user is not released when the
	user logs off. This can occur when the RAS Autodial Manager service impersonates
	the user and uses the LUID.
	
	The previous logon is not released because its LUID has a reference counter that
	is incremented when the user's credentials are impersonated (used) and
	decremented when the impersonation is released.
	
	When the reference count for an LUID reaches 0, the kernel notifies the Local
	Security Authority (LSA) that the user has logged out. The LSA then notifies
	CSNW to disconnect the user's preferred connection to the Novell NetWare server.
	When the RAS Autodial Manager is enabled, the LUID for the user that is
	currently logged in is not decremented to 0. Therefore, the LSA is not notified
	when the user logs out.
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
