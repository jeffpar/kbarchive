---
layout: page
title: "Q136080: FIX: Memory Leak Reported in PLEX.CPP When Using CSocket"
permalink: kb/136/Q136080/
---

## Q136080: FIX: Memory Leak Reported in PLEX.CPP When Using CSocket

	Article: Q136080
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.1,2.2
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC210bug kbVC220bug kbVC400fix kbWinsock kbGrpDSMFCATL kbNoUpdatekb
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running an application that uses the CSocket class causes a memory leak report
	to be generated when the application exits. The memory leak report will be
	similar to this:
	
	  {1555} plex.cpp(28) : non-object block at $002ECC8C, 132 bytes long
	
	CAUSE
	=====
	
	The CSocket class will queue up socket notification messages while it waits for
	a particular socket operation to complete. These messages are stored in CPtrList
	(m_listSocketNotifications) on a per-thread basis. This object is destroyed when
	the thread-state information for that thread is cleaned-up. Unfortunately the
	thread-state information for the primary thread is not cleaned-up until after
	the memory leak detection is performed.
	
	Because MFC does not take care to free the plex objects associated with this list
	before the list is destroyed, the perceived memory leak is reported.
	
	Because the problem is related to the frequency and sequence of the socket
	notification messages being received, the memory leak message might not occur
	every time the program is executed. It might only be seen under certain
	circumstances.
	
	RESOLUTION
	==========
	
	This message will only occur when CSocket objects are used in the primary
	thread. The message can be safely ignored because the m_listSocketNotifications
	object is actually being safely deleted before the application exits, so the
	memory will be freed then.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	Additional query words: 2.10 2.20 3.10 3.20 3.1 3.2
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC210bug kbVC220bug kbVC400fix kbWinsock kbGrpDSMFCATL kbNoUpdate kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.1,2.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
