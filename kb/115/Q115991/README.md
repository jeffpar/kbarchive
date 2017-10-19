---
layout: page
title: "Q115991: How to Obtain the Current Instance Handle of an .FLL File"
permalink: /kb/115/Q115991/
---

## Q115991: How to Obtain the Current Instance Handle of an .FLL File

	Article: Q115991
	Product(s): Microsoft FoxPro
	Version(s): 2.5x,2.6x,3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro Library Construction Kit for MS-DOS, versions 2.5x, 2.6x 
	- Microsoft Visual FoxPro for Windows, Professional Edition, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Within a standard Windows dynamic-link library (DLL), the instance handle of the
	current .DLL is passed to the function through the LibMain() API function. In a
	FoxPro-link library (FLL), you do not have access to the LibMain() function.
	
	In FoxPro versions 2.x, you have access to a global variable called Inst. Within
	this global variable is the current instance handle. However, if you are using
	Visual FoxPro version 3.0, you can use the FoxPro API call _GetAPIHandle() to
	obtain the the current instance handle.
	
	MORE INFORMATION
	================
	
	FoxPro 2.x
	----------
	
	In FoxPro version 2.x, to obtain the current instance handle, the variable Inst
	must be declared as follows:
	
	       HINSTANCE Inst;
	
	Once this is done, the current instance handle will be stored in the global
	variable Inst.
	
	Visual FoxPro
	-------------
	
	To obtain the current instance handle in FoxPro version 3.0, use the the FoxPro
	API call _GetAPIHandle(). For more information on this API function see the
	_GetAPIHandle() topic in the Visual FoxPro on-line help file.
	
	REFERENCES
	==========
	
	Library Construction Kit "Developer's Guide," version 2.5, page 31
	
	Additional query words: FoxDos FoxWin VFoxWin 2.50 2.50a 2.50b 2.60 2.60a 3.00 3.00b lck api
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxProLibCK250xDOS kbFoxProLibCK260xDOS kbVFP300 kbVFP300b
	Version           : :2.5x,2.6x,3.0,3.0b
	
	=============================================================================
	
