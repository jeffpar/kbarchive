---
layout: page
title: "Q101861: Hard Disk Errors 67 and 69"
permalink: kb/101/Q101861/
---

## Q101861: Hard Disk Errors 67 and 69

	Article: Q101861
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	This article discusses the possible causes for hard disk drive errors 67
	and 69.
	
	Error 67 CONFIG_INITIALIZATION_FAILED
	-------------------------------------
	
	Error 67 is generated for several reasons and can be further narrowed
	down by its first two arguments, which can be: 5 and 1, 5 and 6, 5 and
	8, or 0 and 0.
	
	The first three argument pairs indicate that an allocation failed,
	meaning that a request for memory from the paging file failed. More
	physical memory or increasing the size of the paging file should help
	this error.
	
	However, if the first two arguments are zero, then error 67 was
	generated during initialization. This could mean either of the
	following:
	
	- There is no more memory available.
	
	  -or-
	
	- An internal memory error, failed Registry call, or corruption of a parameter
	  table has occurred.
	
	In this case, error 67 does not point to a lack of paging file space.
	Since the disk is not being read during initialization, a hard disk
	failure has probably not occurred, though a bad read could contribute
	to a bad or corrupted parameter block.
	
	Error 69 IO1_INITIALIZATION_FAILED
	----------------------------------
	
	Error 69 can be caused by several different things, including a
	failure in driver initialization. The following may contribute to this
	error:
	
	- Not enough memory.
	
	  -or-
	
	- Some I/O device fails at the hardware level, particularly if an I/O device
	  returns initialization errors.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
