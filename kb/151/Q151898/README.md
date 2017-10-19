---
layout: page
title: "Q151898: BUG: Include Directories Cannot End with a Backslash"
permalink: /kb/151/Q151898/
---

## Q151898: BUG: Include Directories Cannot End with a Backslash

	Article: Q151898
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler ignores some or all of the Command Line options that appear after
	the /I switch.
	
	CAUSE
	=====
	
	The compiler incorrectly parses the additional Include Directory Command Line
	switch if its argument ends with a backslash followed by a quotation mark. The
	compiler interprets the \" sequence as meaning the path contains a quotation
	mark.
	
	If you set the additional Include Directories from within Developer Studio,
	double quotes are automatically placed around the directory name. If there is a
	backslash at the end of the directory name, this problem occurs.
	
	RESOLUTION
	==========
	
	Remove the trailing backslash character from the Include Directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  // Compile options needed to generate error (compiler will not detect
	  // the /D"_CMDLINE":)
	  //    CL /c test.cpp /I"test\" /D"_CMDLINE"
	  // 
	  // Compile options needed for successful compiling (compiler will
	  // detect the /D"_CMDLINE":)
	  //    CL /c test.cpp /I"test" /D"_CMDLINE"
	
	  // test.cpp
	  // 
	  #ifdef _CMDLINE
	  #pragma message("Program compiled with _CMDLINE defined.")
	  #else
	  #pragma message("Program compiled without _CMDLINE defined.")
	  #endif
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCompiler kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0,2.1,2.2,4.0,4.1,4.2,4.2b,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
