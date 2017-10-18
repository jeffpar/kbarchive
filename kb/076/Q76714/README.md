---
layout: page
title: "Q76714: INFO: Only One .rc File Is Permitted Per Project"
permalink: kb/076/Q76714/
---

## Q76714: INFO: Only One .rc File Is Permitted Per Project

	Article: Q76714
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 k
	Last Modified: 12-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1, 4.2, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Visual C++ development environment supports only one resource
	(.rc) file in each project. An attempt to add a second resource file to a
	project causes the environment to display an error.
	
	In Microsoft Visual C++ for Windows, versions 1.0 through 1.52, and Microsoft
	Visual Workbench, 32-bit Edition, version 1.0:
	
	  You can only add one Resource Script. Would you like to replace the current
	  script?
	
	This message box includes buttons labeled "Yes" and "No."
	
	In Microsoft Visual C++, 32-bit Editions, versions 2.x and later:
	
	  Multiple .rc files exist in the project. Only one can be marked as included
	  in the build. The others will be excluded from the build.
	
	MORE INFORMATION
	================
	
	To store resources in more than one file, create a master .rc file that uses the
	#include preprocessor directive to include resources from the other files. For
	example, consider the case in which the Rc1.rc and Rc2.rc files store resources
	for a project. Create a master .rc file called Proj.rc that contains the
	following text:
	
	     #include "Rc1.rc"
	     #include "Rc2.rc"
	
	This file instructs the resource file to compile all resources contained in the
	other .rc files into the application's resources while the project only contains
	one .rc file.
	
	In Visual C++, versions 5.0 and 6.0, use the following steps to include other
	resource files into one main resource script:
	
	1. On the View menu, click Resource Includes.
	
	2. In the Resource Includes dialog box, click inside the Compile-Time Directives
	  list.
	
	3. Type #include statements at the end of this list in the format of the
	  previous example.
	
	REFERENCES
	==========
	
	Visual C++ Technical Note 35: "Using Multiple Resource Files and Header Files
	with Visual C++"
	
	Additional query words: VWBIss
	
	======================================================================
	Keywords          : kbide kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC410 kbVC420 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
