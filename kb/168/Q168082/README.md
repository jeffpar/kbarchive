---
layout: page
title: "Q168082: FIX: Crash During Project Conversion If Project Has MAC Targets"
permalink: /kb/168/Q168082/
---

## Q168082: FIX: Crash During Project Conversion If Project Has MAC Targets

	Article: Q168082
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbtool kbide kbVC kbVC500bug kbVC600fix kbGrpDSToolskbbuglist
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When converting a project from Visual C++ 4.x to Visual C++ 5.0, you may
	experience a crash in Developer Studio if the project has configurations for the
	MAC platform.
	
	The error message for the crash may be similar to:
	
	  MSDEV caused an invalid page fault in module DEVBLD.PKG at
	  0137:5104777b.
	
	RESOLUTION
	==========
	
	1. Make a backup copy of the makefile.
	
	2. Edit the makefile and remove all targets for the Macintosh.
	
	3. Try to convert the project again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 6.0.
	
	Additional query words: IPF GPF AV access violation
	
	======================================================================
	Keywords          : kbtool kbide kbVC kbVC500bug kbVC600fix kbGrpDSTools kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
