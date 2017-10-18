---
layout: page
title: "Q191679: FIX: Wrong Line Number Information Debugging STL"
permalink: kb/191/Q191679/
---

## Q191679: FIX: Wrong Line Number Information Debugging STL

	Article: Q191679
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0sp3
	Operating System(s): 
	Keyword(s): kbDebug kbVC500bug kbVC600fix
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0sp3 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0sp3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to debug a program that uses STL template classes, the debugger may
	point to the wrong line in the source file.
	
	CAUSE
	=====
	
	The Compiler is generating incorrect line-number information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual C++, version
	6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Sample Code
	-----------
	
	     //test.cpp
	     #include <vector>
	     int main()
	     {
	     int a, b ;
	     a=10;
	     std::vector<int>  v; //Incorrect debug line-number info for this line.
	     b=5;
	     return 0;
	     }
	     //end test.cpp
	
	1. Create a Console Application project and add test.cpp to the project.
	
	2. Make a debug build of the project.
	
	3. Start stepping over each line of code by using F10.
	
	RESULTS: After the "a=10;" line, the cursor points to the last line of test.cpp.
	
	Pressing F10 again takes the cursor back to "b=5;" line.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbDebug kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : WINNT:5.0sp3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
