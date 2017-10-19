---
layout: page
title: "Q126381: RAM Disk Support in Windows NT"
permalink: /kb/126/Q126381/
---

## Q126381: RAM Disk Support in Windows NT

	Article: Q126381
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although Windows NT does not include a RAM disk device driver, there are several
	drivers available from third-party vendors and as shareware or freeware. These
	drivers can be obtained by searching the internet for "RAM DISK" and "NT."
	
	MORE INFORMATION
	================
	
	A RAM disk is used to create an area in your system's extended memory to
	simulate a hard disk drive. The main benefit of a RAM disk is speed. RAM disk
	access is much faster than hard disk access since the RAM disk is always loaded
	into memory. Memory allocated to a RAM disk cannot be used for other purposes,
	and data stored on a RAM disk is lost when you shutdown your computer.
	
	Microsoft included a sample RAM disk with the Windows NT 3.1 version of the
	Microsoft Win32 DDK. This sample RAM disk was intended for educational purposes
	only, and is not supported by Microsoft on any version of Windows NT.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.10 ramdisk ramdrive drive prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50
	
	=============================================================================
	
