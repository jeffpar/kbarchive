---
layout: page
title: "Q148185: BUG: FOR3852 Syntax Error Caused by Semicolon in Source Line"
permalink: /kb/148/Q148185/
---

## Q148185: BUG: FOR3852 Syntax Error Caused by Semicolon in Source Line

	Article: Q148185
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling source code that contains a line that holds only a semicolon causes
	the following compile-time syntax error message:
	
	  error FOR3852: syntax error
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Usually semicolons are used to separate FORTRAN statements on the same line.
	Although not useful, the FORTRAN standard considers a semicolon on a source line
	by itself to be a valid use of the language. Therefore, any source lines
	containing only a semicolon should compile without any errors.
	
	The following code illustrates the problem:
	
	  C Compile options needed: none
	
	        program semicolon
	        ;              ! Compiler syntax error
	        end
	
	The following code demonstrates the intended use of semicolons:
	
	  C Compile options needed: none
	
	        program semicolon
	        write(*,*) 'Hello,' ; write(*,*) ' World'
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
