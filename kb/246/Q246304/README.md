---
layout: page
title: "Q246304: Debugging Ported Code"
permalink: kb/246/Q246304/
---

## Q246304: Debugging Ported Code

	Article: Q246304
	Product(s): Microsoft Windows NT
	Version(s): 2.2.1,2.2.2,2.2.3,2.2.4
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Interix versions 2.2.1, 2.2.2, 2.2.3, 2.2.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When debugging ported code, there are several behavioral differences between
	Interix and traditional systems like Solaris.
	
	Some users porting code notice that their application memory faults more often
	than it did on the original platform. This is usually a result of defects in the
	code, and not in the Interix subsystem.
	
	A common cause of this behavior is trying to dereference an uninitialized
	pointer. An uninitialized pointer contains some random bit pattern. An attempt
	to read or write to that location will succeed or fail depending on whether the
	user is permitted access to that address. If the attempt fails, it fails with a
	segment fault. If it succeeds, it may cause problems for other programs using
	that memory space.
	
	In Microsoft Windows NT 4.0, most of the four-gigabyte address space is off
	limits to the user program. Any attempt to read or write to this space causes
	the segmentation violation.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For a more complete description of this issue, see the "Porting Applications in
	C" Tech Note topic at the following Interix Web site:
	
	  http://www.interix.com/newinterix/main_technotes.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4
	Issue type        : kbinfo
	
	=============================================================================
	
