---
layout: page
title: "Q136782: Unable To Connect To AT&amp;T Advanced Server For UNIX Printer Share"
permalink: kb/136/Q136782/
---

## Q136782: Unable To Connect To AT&amp;T Advanced Server For UNIX Printer Share

	Article: Q136782
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt from a Windows NT computer to connect to an AT&T Advanced Server
	for UNIX printer share fails.
	
	CAUSE
	=====
	
	The AT&T Advanced Server for UNIX is a Windows NT server on a UNIX network
	environment. Windows NT computers view the print provider of the AT&T
	Advanced Server for UNIX as a downlevel print server (for example, a LAN Manager
	2.x print server). The AT&T Advanced Server for UNIX provides full server
	functionality except for the print server functionality (SpoolSS) to Windows NT
	computers.
	
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt printman
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
