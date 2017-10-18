---
layout: page
title: "Q168410: FIX: Dependency Information Is Lost After Workspace Is Closed"
permalink: kb/168/Q168410/
---

## Q168410: FIX: Dependency Information Is Lost After Workspace Is Closed

	Article: Q168410
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC500bug kbVC600fix kbGrpDSToolskbbuglist
	Last Modified: 06-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If there are changes to a header included in a .C file that cause a build to
	fail and the workspace is closed and re-opened, then the dependency information
	is lost and the build system will report the build is up-to-date.
	
	CAUSE
	=====
	
	The dependency information in the project .IDB file containing the header file
	was deleted during the failed build.
	
	RESOLUTION
	==========
	
	- Compile the .C file instead of selecting Build from the Build menu.
	
	-or-
	
	- Select Rebuild All from the Build menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 6.0.
	
	MORE INFORMATION
	================
	
	Note that this only applies to .C files. Files with recognized C++ file
	extensions (such as .CPP) are unaffected.
	
	Additional query words: BetaPublic
	
	======================================================================
	Keywords          : kbide kbVC kbVC500bug kbVC600fix kbGrpDSTools kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
