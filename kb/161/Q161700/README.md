---
layout: page
title: "Q161700: WinAT Returns Error &quot;Filename ... Is Incorrect&quot;"
permalink: kb/161/Q161700/
---

## Q161700: WinAT Returns Error &quot;Filename ... Is Incorrect&quot;

	Article: Q161700
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start WinAT command scheduler, which comes with the Windows NT
	Resource Kit, you receive the following error:
	
	  The filename, directory name, or volume label syntax is incorrect.
	
	After you press OK a number of times, WinAT appears, but when you try to use it,
	a Dr.Watson error is generated.
	
	CAUSE
	=====
	
	This problem occurs when the Windows NT Resource Kit is installed to a directory
	with a long file name; such names cannot be handled properly by WinAT.
	
	RESOLUTION
	==========
	
	Install the Windows NT Resource Kit to a directory with an 8.3 name or move
	Winat.exe, Winat.cnt, and Winat.hlp to a directory with an 8.3 name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows NT 4.0 Resource Kit.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt resource kit
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
