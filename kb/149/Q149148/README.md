---
layout: page
title: "Q149148: BUG: READ with Backspace Fails in Standard Graphics Programs"
permalink: kb/149/Q149148/
---

## Q149148: BUG: READ with Backspace Fails in Standard Graphics Programs

	Article: Q149148
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
	
	The computer display is not properly updated to reflect the current input stream
	of a Standard Graphics application READ operation when the backspace key is used
	to overwrite typed in characters in the displayed input buffer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a Standard Graphics program containing the following code:
	
	  C Compile options needed: /MWs
	
	        character*100 buf
	        read (*,*) buf
	        print *, 'You typed: ', buf
	        end
	
	2. Run the program, and type this character string:
	
	  " fortran " (without the quotation marks)
	
	3. Press the BACKSPACE key four (4) times. Then press the ENTER key.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
