---
layout: page
title: "Q66778: FIX: Error Messages May Say &quot;short&quot; or &quot;int&quot; Instead of &quot;enum&quot;"
permalink: kb/066/Q66778/
---

## Q66778: FIX: Error Messages May Say &quot;short&quot; or &quot;int&quot; Instead of &quot;enum&quot;

	Article: Q66778
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,6.0,6.0a,6.0ax
	Operating System(s): 
	Keyword(s): kbCompiler kbVC500fix
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Because an enumerated type is handled internally the same as a short type,
	certain compiler error messages may refer to a "short" even though the error
	involves an "enum". The following sample code contains an error to demonstrate
	this situation:
	
	     enum {A, B, C}      /* missing ';' at end */ 
	     double y;
	
	When the above code is compiled with the Microsoft C compiler, the following
	error message is generated:
	
	  error C2139: type following 'short' is illegal
	
	Visual C++ for Windows and Visual C++ 32-bit Edition return:
	
	  error C2632: 'int' followed by 'double' is illegal
	
	In this particular case, the error should say:
	
	  type following 'enum' is illegal"
	
	However, the compiler does not keep track of whether or not an item was specified
	as an enum.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	Visual C++ 5.0 compiler generates the following error message:
	
	  error C2628: '__unnamed' followed by 'double' is illegal (did you forget a
	  ';'?)
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbCompiler kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0,4.0,6.0,6.0a,6.0ax
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
