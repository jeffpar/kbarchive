---
layout: page
title: "Q135709: PRB: Visual C++ Link Error LNK2001: unresolved external symbol"
permalink: /kb/135/Q135709/
---

## Q135709: PRB: Visual C++ Link Error LNK2001: unresolved external symbol

	Article: Q135709
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to build a dynamic link library (DLL) (Hello.dll or another .dll
	file) using Visual C++, 32-bit Edition, and following the instructions in the
	Professional Features Guide on page 188. You could receive the following
	errors:
	
	  Linking ..
	  Linking error LNK2001: unresolved external symbol "__PutStr"
	  WinRel/YourDll.dll ; error LNK1120: 1 unresolved externals Error executing
	  link.exe
	
	CAUSE
	=====
	
	The problem is that you have not set the Calling Convention to _fastcall. It may
	still be set to __cdedl*.
	
	In the Project Settings of Visual C++, 32-bit Edition, if you do not set the
	C/C++ Tabs Category "Code Generation" Calling Convention: to _fastcall You will
	receive these errors. This is covered on page 188 in the "To establish project
	settings" section.
	
	NOTE: In the Project Settings Dialog Box, you can give the setting for either or
	both projects (Win32 Debug or the Win32 Release). To set the settings for both,
	select one and drag to highlight all others under the Settings For: area of the
	Project Settings.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
