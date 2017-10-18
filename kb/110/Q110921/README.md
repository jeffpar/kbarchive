---
layout: page
title: "Q110921: How to Debug .PLB and .FLL Source Code"
permalink: kb/110/Q110921/
---

## Q110921: How to Debug .PLB and .FLL Source Code

	Article: Q110921
	Product(s): Microsoft FoxPro
	Version(s): 2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, Professional Edition, version 3.0 
	- Microsoft FoxPro Library Construction Kit for MS-DOS, versions 2.5x, 2.6x 
	- Microsoft FoxPro Library Construction Kit for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order to step through the source code of a .PLB or .FLL file, you must
	compile the source code with the _BreakPoint() function. This macro generates
	the debugger breakpoint instruction Interrupt 3h. (NOTE: All interrupts are
	given in hexadecimal.)
	
	Once this is done, you must start the debugger and execute FoxPro from within the
	debugger. After FoxPro has been started, it can be used normally, which means
	you must load the library and then call the functions from within the library
	that have the _BreakPoint() function. The library will execute normally until
	the _BreakPoint() function is reached. When this statement is reached, control
	will be transferred to the debugger. At this point, you will be able to step
	through the .C source code. When the code terminates, control will then be
	transferred back to FoxPro.
	
	MORE INFORMATION
	================
	
	The following are step-by-step instructions for stepping through the source code
	of a .PLB or .FLL file. Depending on your version of FoxPro, use one of the
	following instructions:
	
	FoxPro 2.x
	----------
	
	1. Include the _BreakPoint() function in the .C source code.
	
	2. Start the debugger.
	
	3. Start FoxPro from within the debugger.
	
	4. Load the library and call the functions.
	
	5. Step through the C source code and then return to FoxPro.
	
	6. Quit FoxPro.
	
	7. Quit the debugger.
	
	Visual FoxPro and Microsoft Visual C++ 2.0
	------------------------------------------
	
	1. Add the _BreakPoint() in the source code
	
	2. Compile and build a debug version of the .DLL
	
	3. Start Visual FoxPro and issue the 'SET LIBRARY TO <DLL file>'
	
	4. Call the function in the library (for example ?HELLO() )
	
	When the code hits the _BreakPoint() instruction you will get an "Application
	Error" with options for 'OK' to terminate and 'Cancel' to debug. Picking the
	'Cancel' option will allow you to start VC++ with the debugger active and to
	step through the sourcecode.
	
	REFERENCES
	==========
	
	Library Construction Kit "Developer's Guide," Chapter 8
	
	Additional query words: VFoxWin 3.00 FoxWin FoxDos 2.50 2.50a 2.50b 2.60 2.60a debug fll plb lck
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxProLibCK250xDOS kbFoxProLibCK260xDOS kbVFP300
	Version           : :2.5x,2.6x,3.0
	
	=============================================================================
	
