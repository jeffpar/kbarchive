---
layout: page
title: "Q191309: ALT+Numeric Keypad Problem When CHCP Command is Used"
permalink: /kb/191/Q191309/
---

## Q191309: ALT+Numeric Keypad Problem When CHCP Command is Used

	Article: Q191309
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Change Code Page (CHCP) 437 or 850 command to change the
	current code page, the ALT+Numeric keypad characters are not mapped properly.
	This problem was initially observed in an application using the OS/2 subsystem,
	but it is also present in the NTVDM environment (MS-DOS mode).
	
	RESOLUTION
	==========
	
	Using Lucida Console fonts allows ALT+Numeric keypad characters to be entered
	and displayed properly according to the current code page selected by the CHCP
	command. This works in MS-DOS and OS/2 modes.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	MORE INFORMATION
	================
	
	Locale-specific code pages for U.S. versions of the Windows NT systems are
	defined as follows:
	
	- OEM Primary CP (default): 437 (MS-DOS Latin US)
	
	- OEM Secondary CP : 850 (MS-DOS Latin 1)
	
	Locale-specific code pages for European versions of the Windows NT systems are
	defined as follows:
	
	- OEM Primary CP (default): 850 (MS-DOS Latin 1)
	
	- OEM Secondary CP : 437 (MS-DOS Latin US)
	
	The CHCP command allows the user to change the current default code page.
	
	Notes
	-----
	
	- Lucida Console fonts (16-bit) must be selected in the original DOS/OS2 window
	  in order to switch between the code pages.
	
	- The Raster fonts (8-bit) do not allow code page switching.
	
	- The OEM primary code page is always the default.
	
	
	Additional query words: alt-numpad
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
