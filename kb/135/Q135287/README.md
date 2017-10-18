---
layout: page
title: "Q135287: BUG: Visual C++ Doesn't Generate Dependencies for .RSC Files"
permalink: kb/135/Q135287/
---

## Q135287: BUG: Visual C++ Doesn't Generate Dependencies for .RSC Files

	Article: Q135287
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:2.0
	Operating System(s): 
	Keyword(s): kbide kbHWMAC kbVC
	Last Modified: 02-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a .RSC file, which is an output file of a resource compiler, is included in a
	.R file, which is a Macintosh resource file, using either of the following
	statements, the Visual Workbench will not generate dependencies for it:
	
	- include <filename>;
	
	-or-
	
	- INCLUDE <filename>;
	
	For example, if you have a resource file that has the following include
	statements in it:
	
	     // resource.r
	
	     #include "mrc\types.r"
	     #include "mrc\balloons.r"
	     include "wlm.rsc";
	     include "commdlg.rsc";
	     #include "ftab.r"
	
	then, when generating the dependencies for this file, the Visual Workbench will
	not include WLM.RSC or COMMDLG.RSC in the dependencies list. If any of these
	.RSC files or the .RC/.R file used to generate the .RSC file changes, the .RSC
	file will not be rebuilt. Dependencies are correctly generated for files
	included with #include, such as, MRC\TYPES.R, MRC\BALLOONS.R, and FTAB.R.
	
	CAUSE
	=====
	
	Dependencies are not generated for resources included with the INCLUDE statement
	because while it is legal to include *.RSC using the include <filename>
	syntax, the Visual C++ build system cannot handle this type of .RSC build.
	
	WORKAROUND
	==========
	
	Use one of the following workarounds:
	
	- Remove the include(s) from the .r file and add the .rsc file(s) to the
	  Project/Files or Project/Settings/Link/Object/Library Modules list.
	
	-or-
	
	- Keep track of the .RSC files that are included in the .R file and explicitly
	  build the files if either the .RSC files or the .R/.RC files used to generate
	  the .RSC files change.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbHWMAC kbVC 
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev200Mac
	Version           : MACINTOSH:2.0
	Issue type        : kbbug
	
	=============================================================================
	
