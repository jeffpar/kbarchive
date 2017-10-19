---
layout: page
title: "Q199517: PRB: FreeResource Required for Locked Resources on Macintosh"
permalink: /kb/199/Q199517/
---

## Q199517: PRB: FreeResource Required for Locked Resources on Macintosh

	Article: Q199517
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:2.0,4.0,4.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbMFC kbVC200 kbVC400 kbGrpDSMFCATL kbNoUpdate
	Last Modified: 11-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, versions 2.0, 4.0, 4.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Not calling FreeResource may cause Macintosh applications to leak memory.
	
	CAUSE
	=====
	
	Resources on the Macintosh are fairly similar to Windows resources, but there
	are a few differences.
	
	In Win32 applications, resources do not have to be locked or freed. On Macintosh
	platforms, however, calling LockResource does actually lock a memory block in
	the heap. Not calling FreeResource causes that block to remain locked.
	
	RESOLUTION
	==========
	
	To avoid memory leaks and heap fragmentation, FreeResource must be used on the
	Macintosh when a resource loaded using LoadResource is no longer needed.
	
	REFERENCES
	==========
	
	Macintosh Porting Guide: Resource Differences
	
	Additional query words: FreeResource LockResource UnlockResource memory leak heap fragmentation
	
	======================================================================
	Keywords          : kbHWMAC kbMFC kbVC200 kbVC400 kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev200Mac kbVCXDev400Mac kbVCXDev400bMac
	Version           : MACINTOSH:2.0,4.0,4.0b
	Issue type        : kbprb
	
	=============================================================================
	
