---
layout: page
title: "Q176616: Errors Logon Alerts in Performance Monitor"
permalink: kb/176/Q176616/
---

## Q176616: Errors Logon Alerts in Performance Monitor

	Article: Q176616
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Performance Monitor, if you have set up an alert for Errors Logon to catch
	failed logon attempts, you see an alert generated every five seconds.
	
	CAUSE
	=====
	
	The number of failed logon attempts since the server was last restarted has
	exceeded the alert parameter that was set when the alert was configured.
	
	MORE INFORMATION
	================
	
	The counter for Errors Logon is not reset to zero whenever the alert is issued.
	This can lead Administrators to believe that a password hacking program is being
	used, or that a rogue service is on the network. If the alert parameter is set
	to five, after Windows NT records six bad logon attempts, it will log an alert
	every five seconds (the default interval) until the computer is restarted.
	
	Additional query words: audit perfmon
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
