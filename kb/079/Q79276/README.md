---
layout: page
title: "Q79276: HOWTO: Subclass the Desktop and Windows of Other Applications"
permalink: kb/079/Q79276/
---

## Q79276: HOWTO: Subclass the Desktop and Windows of Other Applications

	Article: Q79276
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The code to subclass the desktop window, or windows that belong to other
	applications, must be placed in a dynamic-link library (DLL).
	
	MORE INFORMATION
	================
	
	In most cases, the desktop window uses the stack segment (SS) of the currently
	scheduled task. This is done for performance reasons because it reduces the
	number of task switches that take place when the desktop receives paint or mouse
	messages. In some cases, the desktop cannot be switched immediately to the
	currently scheduled task. In this situation, it will temporarily use the SS of
	the previously scheduled task.
	
	When the desktop is subclassed, the data segment (DS) that the subclass procedure
	uses is specified by the hInstance used in a MakeProcInstance() call. However,
	the subclass procedure's SS depends on the currently scheduled task, as
	described earlier. Because the currently scheduled task may not be the task that
	subclassed the desktop, it is possible that SS != DS when the subclass procedure
	is executed. Therefore, the subclass procedure cannot assume that SS == DS. For
	this reason, the code to subclass the desktop must reside in a DLL where it is
	assumed that SS != DS.
	
	When a window belonging to another application is subclassed, the DS that the
	subclass procedure uses is specified by the hInstance used in the
	MakeProcInstance() call. The SS used by the subclass procedure is the SS of the
	application that owns the window. Therefore, the subclass procedure cannot
	assume that SS == DS. For this reason, the code to subclass another
	application's window must reside in a DLL where it is assumed that SS != DS.
	
	The DLL in which the subclass procedure is placed should be compiled with the
	Microsoft C Compiler's -Aw option, which tells the compiler that SS != DS. Using
	this option causes the compiler to generate a warning message when it detects
	the improper creation of a near pointer to an automatic variable.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbhowto
	
	=============================================================================
	
