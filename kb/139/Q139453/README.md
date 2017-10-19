---
layout: page
title: "Q139453: NET TIME Does Not Report Correct Remote Time in Windows NT"
permalink: /kb/139/Q139453/
---

## Q139453: NET TIME Does Not Report Correct Remote Time in Windows NT

	Article: Q139453
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the NET TIME command to display the time of a remote computer, the
	remote time appears in your computer's time zone. For example, if the time of
	the local computer (TEST1) is in Pacific Standard Time (GMT-8:00) and the time
	of the remote computer (TEST2) is in Eastern Standard Time (GMT-5:00), the
	following appears on TEST1 when you type TIME at the MS-DOS command prompt:
	
	  The current time is: 12:00:00.00
	
	When you type NET TIME \\TEST2, the following appears:
	
	  Current time at \\TEST2 is 11/10/95 12:00 PM
	  The command completed successfully.
	
	NOTE: The correct time of the remote computer is displayed when you use Windows
	98; Windows 95; Windows for Workgroups 3.11; Microsoft Network Client for
	MS-DOS, version 3.0; or LAN Manager 2.2c.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5, 3.51,
	and 4.0. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	
