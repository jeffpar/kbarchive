---
layout: page
title: "Q107163: Registering KERNEL Functions in Viewer"
permalink: /kb/107/Q107163/
---

## Q107163: Registering KERNEL Functions in Viewer

	Article: Q107163
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To directly register a Windows KERNEL function in a Viewer title, you must
	specify either KRNL286 or KRNL386 for the first parameter in RegisterRoutine().
	KRNL286 should be used if the Viewer title will be run under standard mode
	Windows; KRNL386 should be used if the title will be run under enhanced mode
	Windows. If the title might be run under either enhanced or standard mode
	Windows, then the KERNEL function cannot be directly registered in the Viewer
	title.
	
	Instead, the title author should write a wrapper function in a dynamic-link
	library (DLL) for the KERNEL function. The wrapper function would call the
	KERNEL function, passing the necessary parameters. This wrapper function should
	be registered in the [CONFIG] section of the .MVP file with RegisterRoutine(),
	and it can then be called anywhere within the Viewer title.
	
	For example, to use the KERNEL function WinExec() from a Viewer title, one would
	write a wrapper function in a DLL as follows:
	
	Sample Code
	-----------
	
	  UINT FAR PASCAL WinExecWrap(LPCSTR lpszCmdLine,UINT fuCmdShow)
	  {
	     return (WinExec(lpszCmdLine,fuCndShow));
	  }
	
	This WinExecWrap() function should be exported from the DLL so that it can be
	called from the Viewer title. For this example, let's assume the filename of the
	DLL is MYKRNL.DLL.
	
	The function would be registered in the [CONFIG] section of the Viewer title's
	.MVP file as follows:
	
	     RegisterRoutine("mykrnl","WinExecWrap","u=Su")
	
	WinExecWrap() can then be called from anywhere within the Viewer title. A typical
	call would look like the following:
	
	     WinExecWrap("clock",1)
	
	This would launch the Clock application in a normal window.
	
	Because the title can use the WinExecWrap() wrapper function in place of
	WinExec(), it no longer needs to register or call WinExec() directly from within
	the title.
	
	Additional query words: 2.00 2.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a
	
	=============================================================================
	
