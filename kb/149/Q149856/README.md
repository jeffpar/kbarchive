---
layout: page
title: "Q149856: BUG: Embedding a String Using the /V Compiler Option Fails"
permalink: /kb/149/Q149856/
---

## Q149856: BUG: Embedding a String Using the /V Compiler Option Fails

	Article: Q149856
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to embed a character string that contains one or more spaces into an
	object code (.obj) file by using the /V compiler option causes all the
	characters following the first space in the character string to be ignored. As a
	result, the characters are not embedded into the object file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a source file (Myfile.for) that contains the following sample code:
	
	  ! Compile options needed: /V
	
	        print *, 'Embedded Message'
	        end
	
	2. Compile the source file using the /V compiler option along with the string
	  ("Embedded String"). At the MS-DOS command-line prompt, type:
	
	  " fl32 /V"Embedded String" myfile.for " (without the quotation marks)
	
	3. Check the object file for the string. Create an object code dump file by
	  using the Dumpbin.exe utility. At the MS-DOS command-line prompt, type:
	
	  " dumpbin /all myfile.obj > myfile.txt " (without the quotation marks)
	
	4. Search the dump file (Myfile.txt) for the string ("Embedded String"). Note
	  that searching the dump file yields only the "Embedded" part of the string in
	  the RAW DATA #2 section.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
