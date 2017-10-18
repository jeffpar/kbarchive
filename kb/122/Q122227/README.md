---
layout: page
title: "Q122227: FIX: Incremental Link Fails to Change the Subsystem Version"
permalink: kb/122/Q122227/
---

## Q122227: FIX: Incremental Link Fails to Change the Subsystem Version

	Article: Q122227
	Product(s): Microsoft Programming Utilities
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbVC400fix
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Linker (LINK.EXE), used with:
	   - Microsoft Visual C++, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you perform a link using the Microsoft Linker, the subsystem version does
	not change.
	
	The subsystem version info is used by the operating system when running the
	application. Applications with incorrect subsystem versions may not run
	correctly.
	
	
	CAUSE
	=====
	
	The linker fails to change the subsystem version when performing an incremental
	link.
	
	RESOLUTION
	==========
	
	Force the linker to perform a full link to force it to change the subsystem
	version number. To force a full link, link with the /incremental:no linker
	option, or delete the executable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 4.0.
	
	MORE INFORMATION
	================
	
	This is a problem only if you want to change the subsystem version without
	changing the subsystem type. If you change the subsystem type, the linker
	automatically performs a full link.
	
	You can view the subsystem version number by using DUMPBIN with the /HEADERS
	option. The subsystem version number specifies the minimum required version of
	the subsystem.
	
	Additional query words: subsystem 2.50 link
	
	======================================================================
	Keywords          : kbVC400fix 
	Technology        : kbVCsearch kbAudDeveloper kbLINKSearch
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
