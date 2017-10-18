---
layout: page
title: "Q149156: BUG: Common Blocks Cannot Be Viewed in the Watch Window"
permalink: kb/149/Q149156/
---

## Q149156: BUG: Common Blocks Cannot Be Viewed in the Watch Window

	Article: Q149156
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to view a common block in either the watch or quickwatch window
	fails. When you type in the common block name in either window, the following
	message is returned in the corresponding value field:
	
	  Invalid Debug Information
	
	RESOLUTION
	==========
	
	Use the Locals window to view the common block and its members.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a project using the folloiwng sample code in Developer Studio:
	
	  C Compile options needed: /Zi
	
	        REAL A
	        INTEGER B
	        CHARACTER(5) C
	        COMMON /BLOCK1/ A, B, C
	
	        A = 1.0
	        B = 2
	        C = 'THREE'
	
	        PRINT *, A
	        PRINT *, B
	        PRINT *, C
	
	        END
	
	2. After successfully building the project, begin a debugging session. From the
	  Build menu, choose Debug, and then select Step Into.
	
	3. Step into the program to the first PRINT statement.
	
	4. In either the watch or quickwatch window, type the common block name:
	
	  " BLOCK1" (without the quotation marks)
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
