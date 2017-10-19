---
layout: page
title: "Q208005: FIX: Page Table Initialization Missing in x86 OAL"
permalink: /kb/208/Q208005/
---

## Q208005: FIX: Page Table Initialization Missing in x86 OAL

	Article: Q208005
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbETK kbVC500
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Embedded Toolkit for Visual C++ 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An x86-based implementation of the Windows CE operating system does not boot
	when a custom physical memory layout is used.
	
	CAUSE
	=====
	
	The Windows CE x86 OAL code supplied in the Windows CE Embedded Toolkit for
	Visual C++ 5.0 lacks an OEM customizable routine to preset entries into the page
	table. This prevents the OEM from building a proper initial virtual memory
	address space during system initialization.
	
	RESOLUTION
	==========
	
	To correct this problem, the Windows CE kernel component NK.LIB has been updated
	to call a new OAL function, OEMInitPageTable(). A new OAL sample file has been
	added (Oeminit.asm) to implement this new OAL function. By modifying the
	OEMInitPageTable() function an OEM can properly build the initial page table to
	match the physical memory layout of the platform.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in the Windows CE 2.1
	Enhancement Pack for the Embedded Toolkit, and is also available as a patch for
	Windows CE 2.0 from Microsoft Developer support.
	
	MORE INFORMATION
	================
	
	The Windows CE x86 kernel contains an initial page table that maps memory
	resources for a x86 development platform. This page table may not be appropriate
	for all other x86 platform implementations.
	
	Flash memory, additional DRAM, and ROM address space may not be a part of the
	built-in page table and will cause the system to halt when the switch from
	physical addressing to virtual addressing takes place.
	
	Additional query words: wceoem
	
	======================================================================
	Keywords          : kbETK kbVC500 
	Technology        : kbAudDeveloper kbWinCEETKSearch kbWinCESearch kbWinCEETKVC500
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
