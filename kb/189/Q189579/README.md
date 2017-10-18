---
layout: page
title: "Q189579: F11 and F12 Keys Do Not Function in MS-DOS Applications"
permalink: kb/189/Q189579/
---

## Q189579: F11 and F12 Keys Do Not Function in MS-DOS Applications

	Article: Q189579
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The F11 and F12 function keys do not work or generate extended characters in
	MS-DOS applications running under Windows NT.
	
	CAUSE
	=====
	
	A program compiled or built using the 32-bit compiler is able to read all the
	function keys and to return the right values of the scan codes. When compiled or
	built using the 16-bit compiler, the same program returns the right values for
	the function keys F1 through F10, but does not return anything for F11 and F12.
	
	
	RESOLUTION
	==========
	
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
	
	To read extended characters from an application, two consecutive calls to
	GETCH() are required:
	
	- The first call returns a value indicating that the key is an extended
	  character.
	
	- The second call returns the actual key code (scan code).
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
