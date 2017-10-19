---
layout: page
title: "Q176629: Disabling CSNW in Hardware Profile Causes Lengthy Logon Delay"
permalink: /kb/176/Q176629/
---

## Q176629: Disabling CSNW in Hardware Profile Causes Lengthy Logon Delay

	Article: Q176629
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you disable Client Services for NetWare (CSNW) or Gateway Services for
	NetWare (GSNW) in a hardware profile, it may result in an additional two-minute
	delay in logging on to the computer and gaining access to the desktop.
	
	Conversely, if the Startup type is set to "disabled" for the CSNW or GSNW service
	in the Services tool in Control Panel (not as part of a hardware profile), the
	logon process takes approximately 10 seconds.
	
	MORE INFORMATION
	================
	
	
	WORKAROUND
	==========
	
	To work around this problem, press CTRL+ALT+DEL again at the Windows NT logo
	bitmap screen to bypass the two-minute wait and immediately get to the desktop.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
