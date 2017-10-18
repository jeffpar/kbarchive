---
layout: page
title: "Q262602: Third-Party Program Does Not Start with C0000138 Error Message"
permalink: kb/262/Q262602/
---

## Q262602: Third-Party Program Does Not Start with C0000138 Error Message

	Article: Q262602
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A third-party program may not start with a C0000138 (ordinal) error code.
	
	CAUSE
	=====
	
	This behavior can occur if an older or mismatched dynamic-link library (DLL) in
	the system path is loaded by the program instead of the correct DLL.
	
	Older DLLs with missing ordinals can cause a program to work for a new user but
	not to work after the user logs on again. For example, the default user path may
	be \Winnt\System32, but the user path may be \Winnt. If the older DLL is in the
	Winnt folder and the correct DLL is in the Winnt\System32 folder, the program
	starts for a new (default) user profile, but does not work after the user logs
	on to the computer again.
	
	An item's ordinal value is the numeric location of an item within an order. In an
	ActiveX Data Objects (ADO) collection, the ordinal value of the first item is
	zero (0). The next item is one (1), and so on.
	
	RESOLUTION
	==========
	
	Rename the older or mismatched DLL.
	
	MORE INFORMATION
	================
	
	This error was observed under the Cdb.exe debugger.
	
	This issue has occurred with duplicate files from older versions of Microsoft C++
	installed in different folders. This error occurred with a third-party program
	that hooked itself into the Explorer.exe shell.
	
	Additional query words: Shell32
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
