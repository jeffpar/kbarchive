---
layout: page
title: "Q122539: BUG: C4786 or C1067 Caused by Long Identifier and /Zi"
permalink: kb/122/Q122539/
---

## Q122539: BUG: C4786 or C1067 Caused by Long Identifier and /Zi

	Article: Q122539
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500bug
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using Visual C++ version 4.x and later to compile a C++ program with the /Zi
	option generates the following warning:
	
	  warning C4786: 'identifier' : identifier was truncated to '255' characters in
	  the debug information
	
	Or, using Visual C++ version 2.x to compile a C++ program with the /Zi option
	generates the following error:
	
	  fatal error C1067: compiler limit : debug information module size exceeded.
	  Error executing cl.exe.
	
	CAUSE
	=====
	
	The warning and error are caused by symbols with decorated names that exceed 255
	and 247 characters, respectively.
	
	RESOLUTION
	==========
	
	The best solution is to shorten the length of the identifier or compile for
	Release mode. If the identifier is a function call, reducing the number of
	parameters will help reduce the length.
	
	To work around the fatal error C1067, users of Visual C++ version 2.x can also
	generate debugging information with the /Z7 (C7 Compatible) switch instead of
	the /Zi (Program Database) switch. With Visual C++ versions 2.x and later, using
	/Z7 generates the C4786 warning as listed above. This warning can be ignored
	although the identifier may not be accessible or viewable in the debugger.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Zi
	  */ 
	
	  #include <conio.h>
	  // The next three lines should be on one continous line
	   class CAboutClassaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
	         aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb
	         bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
	  {
	  public:
	  // The next three lines should be on one continous line
	         CAboutClassaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
	         aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb
	         bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb() {}
	
	  // The next three lines should be on one continous line
	        ~CAboutClassaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
	         aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb
	         bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb(){}
	   };
	  void main(void)
	  {
	  // The next three lines should be on one continous line
	   CAboutClassaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
	         aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb
	         bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb test1;
	         getch();
	  }
	
	Additional query words: kbVC400bug 9.00 10.00 10.10 10.20 buglist2.00
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
