---
layout: page
title: "Q158587: 16-Bit Named Pipe File Open Leads to WOW Access Violation"
permalink: kb/158/Q158587/
---

## Q158587: 16-Bit Named Pipe File Open Leads to WOW Access Violation

	Article: Q158587
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a 16-bit application running under Window NT opens a file as a named pipe,
	subsequent reads from that file can result in an access violation (AV) in the
	WOW subsystem.
	
	In the third-party test code that exposed this bug, a call to _lread() failed.
	(This is a valid possibility; in this case, for example, there was no data
	available at the pipe.) However, rather than return the standard failure code of
	HFILE_ERROR (-1), a garbage value was returned, indicating success. When
	processing was attempted using the garbage data extracted from the buffer
	returned by the lread() call, an AV occurred.
	
	CAUSE
	=====
	
	The file was opened as a named pipe under the WOW subsystem, but the DOS SFT_
	flags in the file handle were not marked to indicate that the handle was for a
	named pipe. (When _lread() fails under the WOW subsystem, the DOS subsystem will
	make an attempt to carry out the read operation before returning failure to the
	application.) When the read-file operation failed in WOW, the DOS emulation
	layer incorrectly determined that, since the named pipe flag wasn't set for the
	handle, it would deal with the handle as with a disk-based file, leading to the
	unexpected result.
	
	RESOLUTION
	==========
	
	To solve this problem the WOW code was fixed. When a named pipe file is
	opened/created, the named pipe bit is now set in the file handle.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5, 3.51,
	and 4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
