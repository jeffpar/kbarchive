---
layout: page
title: "Q123781: BUG: Additional DLLs Invalid in Debug Project Settings"
permalink: /kb/123/Q123781/
---

## Q123781: BUG: Additional DLLs Invalid in Debug Project Settings

	Article: Q123781
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:2.0
	Operating System(s): 
	Keyword(s): kbide kbHWMAC kbVC kbVC200 kbGrpDSToolskbbuglist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, version 2.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Additional DLLs text box is enabled (but shouldn't be) in the Project
	Settings Debug tab when you choose to modify project settings for a Macintosh
	target.
	
	RESOLUTION
	==========
	
	The Visual C++ 2.0 Cross-Development Edition for the Macintosh does not support
	the creation of DLLs, so the Additional DLLs text box should be disabled for
	Macintosh targets.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.00 buglist2.00 wings mac
	
	======================================================================
	Keywords          : kbide kbHWMAC kbVC kbVC200 kbGrpDSTools kbbuglist
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper
	Version           : MACINTOSH:2.0
	Issue type        : kbbug
	
	=============================================================================
	
