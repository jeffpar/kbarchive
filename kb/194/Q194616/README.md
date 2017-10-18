---
layout: page
title: "Q194616: FIX: error CBE7002: Failed assertion &quot;lab&quot; ascoff.cpp, line 769"
permalink: kb/194/Q194616/
---

## Q194616: FIX: error CBE7002: Failed assertion &quot;lab&quot; ascoff.cpp, line 769

	Article: Q194616
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbVC500 kbOSWinCE200bug kbOSWinCE210fix kbfix
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++, on platform(s):
	   - the hardware: SH3 processor 
	   - the hardware: SH4 processor 
	- Microsoft Windows CE Embedded Toolkit for Visual C++ 5.0, on platform(s):
	   - the hardware: SH3 processor 
	   - the hardware: SH4 processor 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You might get the following error when compiling for the Windows CE SHx
	platform.
	
	  
	
	    fatal internal error CBE7002: Failed assertion "lab" (cbe
	    .\asm\ascoff.cpp, line 769)
	    Error executing shcl.exe.
	
	RESOLUTION
	==========
	
	Use on of the following resolutions:
	
	- Do not use the virtual keyword for member functions.
	
	- Do not export the class derived from an imported class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual C++ compilers
	for Windows CE version 2.01 and later.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a Windows project in Developer Studio for the SH platform. Add the
	following file to the project. Compile the file and the error described in the
	SYMPTOMS section occurs.
	
	Sample Code
	-----------
	
	     // test.cpp
	     #define DLLExport  __declspec(dllexport)
	     #define DLLImport  __declspec(dllimport)
	
	     class DLLImport BClass
	     {
	     public:
	     virtual int Func(void) {return(0);}
	     };
	
	     class  DLLExport AClass : public BClass
	     {
	     };
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC500 kbOSWinCE200bug kbOSWinCE210fix kbfix 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCESearch
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
