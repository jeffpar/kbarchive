---
layout: page
title: "Q94607: PRB: MULTIPAD Sample from Win 3.1 SDK Gives Printing Error"
permalink: /kb/094/Q94607/
---

## Q94607: PRB: MULTIPAD Sample from Win 3.1 SDK Gives Printing Error

	Article: Q94607
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly _IK kbSDKWin16
	Last Modified: 04-JUL-1999
	
	3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MULTIPAD sample that ships with the Microsoft Windows version 3.1 SDK allows
	only one print job to be sent to the printer. Any further attempts to print
	result in the following error:
	
	  Cannot print <document name>!
	
	The document is not printed, and you must re-start MULTIPAD to do any printing.
	
	CAUSE
	=====
	
	The PRINTDLG data structure used for printing is a global variable, and two
	members of this structure are invalid after the first print job is sent. These
	members are not properly initialized for subsequent print jobs.
	
	RESOLUTION
	==========
	
	In the MPPRINT.C file, in the GetPrinterDC() routine, the following lines:
	
	     if (pd.hDevNames)
	
	     GlobalFree(pd.hDevNames);
	
	     if (pd.hDevMode)
	
	     GlobalFree(pd.hDevMode);
	
	should be changed to:
	
	     if (pd.hDevNames)
	     {
	
	      GlobalFree(pd.hDevNames);
	      pd.hDevNames=NULL;
	
	     }
	     if (pd.hDevMode)
	     {
	
	      GlobalFree(pd.hDevMode);
	      pd.hDevMode=NULL;
	
	     }
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
