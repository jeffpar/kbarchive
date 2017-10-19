---
layout: page
title: "Q152016: FIX: Errors C2065/C2064 When Function L is Called with Macro"
permalink: /kb/152/Q152016/
---

## Q152016: FIX: Errors C2065/C2064 When Function L is Called with Macro

	Article: Q152016
	Product(s): Microsoft C Compiler
	Version(s): 4.1,4.2
	Operating System(s): 
	Keyword(s): kbProgramming kbCompiler kbLangCPP kbVC kbVC410bug kbVC420bug kbVC500fix
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a program that calls the function "L" using a macro will cause the
	following errors:
	
	  error C2065: 'x' : undeclared identifier
	
	  error C2064: term does not evaluate to a function
	
	where "x" is the last letter of the macro identifier.
	
	CAUSE
	=====
	
	In this case, the preprocessor incorrectly generates the letter "x" as the
	resulting output.
	
	RESOLUTION
	==========
	
	Use any other letter after "L" in the macro body.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed:
	     */ 
	         #define thing L
	
	         void  L() {}
	
	         void main (void) {
	            thing();
	         };
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbCompiler kbLangCPP kbVC kbVC410bug kbVC420bug kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC410 kbVC420
	Version           : :4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
