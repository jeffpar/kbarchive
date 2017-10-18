---
layout: page
title: "Q168080: PRB: Debugger Displays Incorrect Information for Variable"
permalink: kb/168/Q168080/
---

## Q168080: PRB: Debugger Displays Incorrect Information for Variable

	Article: Q168080
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC500 kbVC600
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you debug an optimized build of an application that includes debug
	information, the debugger may display incorrect symbol data.
	
	RESOLUTION
	==========
	
	You can work around this problem by displaying the desired variable in a dialog
	box or printing it out using cout or printf();
	
	MORE INFORMATION
	================
	
	The debugger displays incorrect symbol data when debugging an application built
	with the following compiler options:
	
	- /Oy (Frame-Pointer Omission)
	
	- /Og (Global Optimizations)
	
	- /Zi or /Z7 (Debug Info)
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a console application that includes the code listed below.
	
	2. Set the active configuration to Release.
	
	3. In the project Settings dialog box, click the C/C++ tab and select Program
	  Database in the Debug Info list box.
	
	4. In the Project Settings dialog box, click the Linker tab and select the
	  "Generate debug info" check box.
	
	5. Set a breakpoint in Something().
	
	6. Press the F5 key to build and debug the application.
	
	     //Compiler options needed: /GX /Oy /Og /MLd
	     #include <windows.h>
	     #include <iostream>
	
	     void Something(DWORD dwFirst, DWORD dwSecond)
	     {
	        // cout will display the correct information.
	        std::cout << "dwFirst = " << dwFirst << ", dwSecond = " << dwSecond
	        << std::endl;
	     }
	
	     int main()
	     {
	        DWORD dwFirst = 123456;
	        DWORD dwSecond = 234567;
	
	        Something(dwFirst, dwSecond);
	        return 0 ;
	     }
	   
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbide kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : 5.0
	Issue type        : kbprb
	
	=============================================================================
	
