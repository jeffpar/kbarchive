---
layout: page
title: "Q177937: FIX: Debugger Cannot Watch Function Returning struct or union"
permalink: /kb/177/Q177937/
---

## Q177937: FIX: Debugger Cannot Watch Function Returning struct or union

	Article: Q177937
	Product(s): Microsoft C Compiler
	Version(s): 5.0,5.0sp1,5.0sp2,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 5.0sp1, 5.0sp2, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 5.0sp1, 5.0sp2, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Adding a function call in the Developer Studio debugger Watch window may result
	in the following message if the function returns a struct or union with a field
	width greater than 4 bytes:
	
	  Error: cannot display value
	
	RESOLUTION
	==========
	
	There is no workaround for this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	The following procedure reproduces this problem:
	
	1. Create a new console application project and add the following file to the
	  project:
	
	        /* File: TEST.CPP */ 
	
	         struct _XX
	             {
	             char   m1;
	             char   m2;
	             char   m3;
	             char   m4;
	             } XX;
	
	         struct _XX fun()
	         {
	             return XX;
	         }
	
	         int main()
	         {
	             fun();
	             return 0;
	         }
	
	2. Build the project.
	
	3. Click Build|Start Debug|Step Into on the Developer Studio menu.
	
	4. Goto the Watch window by selecting View|Debug Windows|Watch.
	
	5. Add the following watch expression in the "Name" column: fun()
	
	Results: You will see the message "Error: cannot display value" in the "Value"
	column.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbide kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : :5.0,5.0sp1,5.0sp2,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
