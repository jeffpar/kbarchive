---
layout: page
title: "Q139476: FIX: File Time Incorrect After Saving During Build"
permalink: kb/139/Q139476/
---

## Q139476: FIX: File Time Incorrect After Saving During Build

	Article: Q139476
	Product(s): Microsoft C Compiler
	Version(s): 1.0,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a source file is saved while the project is being built, the relationships
	between the source file and the .obj file may be incorrect. The saved source
	file may have an earlier date than the .obj file that was created from the
	previous version of the source file.
	
	
	CAUSE
	=====
	
	The problem of file modify or save time being incorrect is caused by the
	Developer's Studio doing front-end processing on all the files before it creates
	the .obj files. This makes it possible to save a changed file after the earlier
	version was processed but before the .obj file is created.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open one of the files in a project, but don't open the file that will be used
	  to create a .pch file (Stdafx.cpp in an MFC application).
	
	2. Start a Rebuild All.
	
	3. Introduce a syntax error in the open file, but do not save it.
	
	4. While the Rebuild All progresses, look in the output window, and wait for it
	  to compile the open file.
	
	5. As soon as it finishes compiling the file, and before it says "Generating
	  Code," save the changed file that has a syntax error. Because the changes
	  occurred after the front end of the compiler has processed the file, there
	  will be no errors in the build. The .obj file will however have a later date
	  because it was created in the "Generating Code" phase.
	
	6. Do a Build (not a Rebuild All). Nothing will happen, and the changed file
	  will not be compiled.
	
	7. Look at the dates of the files, and confirm that the .obj file is newer than
	  the file that was changed.
	
	Additional query words: utilities
	
	======================================================================
	Keywords          : kbide kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbVC410 kbVC420 kbVC500 kbVC600 kbFORTRANPower32100NT kbVC32bitSearch kbVC500Search
	Version           : :1.0,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
