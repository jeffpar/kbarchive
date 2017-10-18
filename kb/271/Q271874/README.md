---
layout: page
title: "Q271874: Global Optimizations Generate Incorrect Code When Using unions"
permalink: kb/271/Q271874/
---

## Q271874: Global Optimizations Generate Incorrect Code When Using unions

	Article: Q271874
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCodeGen kbCompiler kbVC600 kbVC600bug kbDSupport kbGrpDSVCCompiler
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a union value is modified by one member variable in a loop, but read by
	another variable in the same loop, global optimizer incorrectly moves the
	modification operation to outside the loop, which results in incorrect code
	generation.
	
	Please refer to the sample code in the "More Information" section for details.
	
	RESOLUTION
	==========
	
	To work around the bug, turn off global optimization by using #pragma optimize.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code demonstrates the bug:
	
	  // Test.cpp
	  // Compiler option needed: /Og
	
	  #include <windows.h>
	  #include <stdio.h>
	  //#pragma optimize("g",off) //Uncomment this line to work around the problem.
	  int  main()
	  {
	  	LARGE_INTEGER data; // union
	  	data.HighPart = 0;
	  	data.LowPart = 0;
	  	int count = 4;
	
	  	for (int k = 0; k < count; k++, data.LowPart++)
	  		printf("%I64d\t", data.QuadPart);
	  	return 0;
	  }
	
	Output:
	0 0 0 0
	Correct Output:
	0 1 2 3
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCodeGen kbCompiler kbVC600 kbVC600bug kbDSupport kbGrpDSVCCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
