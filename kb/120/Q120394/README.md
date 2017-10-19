---
layout: page
title: "Q120394: BUG: PS for DOS GPFs When Using an NT Makefile"
permalink: /kb/120/Q120394/
---

## Q120394: BUG: PS for DOS GPFs When Using an NT Makefile

	Article: Q120394
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a project created with Microsoft FORTRAN PowerStation for
	Windows NT, the visual workbench from Microsoft PowerStation for MS-DOS
	generates this error:
	
	  Application Error: F32VWB caused a General Protection Fault in Module
	  F32VWB.EXE at xxxx:xxxx.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start the FORTRAN Visual Workbench for Windows NT.
	
	2. In the project menu, create a new project. Add a .FOR file to the project.
	
	3. Close the project.
	
	4. Exit Windows NT and start Windows version 3.1.
	
	5. Start the FORTRAN Visual Workbench for MS-DOS.
	
	6. In the project menu, open the project just created.
	
	7. When asked if you want to open it as an external makefile, choose Yes. The
	  visual workbench will now fail giving the error message shown above.
	
	Additional query words: 1.00 nofpsnt 1.00a GPF winnt
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
