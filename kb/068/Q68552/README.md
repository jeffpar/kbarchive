---
layout: page
title: "Q68552: PRB: Cannot Exit Windows with DLL-Instanced Windows Open"
permalink: kb/068/Q68552/
---

## Q68552: PRB: Cannot Exit Windows with DLL-Instanced Windows Open

	Article: Q68552
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When the user closes the Windows Program Manager and chooses the OK button in the
	Exit Windows dialog box, Windows does not close.
	
	CAUSE
	=====
	
	A window was created in a window class registered by a dynamic-link library
	(DLL), and the DLL was unloaded from the system before the window was destroyed.
	
	RESOLUTION
	==========
	
	Before the DLL is unloaded from the system, explicitly destroy all windows
	created in a window class registered by the DLL.
	
	MORE INFORMATION
	================
	
	When a DLL is unloaded from memory, all window classes registered by that DLL
	are purged. Any windows that have been created with a DLL- registered window
	class become invalid when the window class is purged; however, these windows are
	not destroyed.
	
	Sending any message to an invalid window returns zero. When Windows sends a
	WM_QUERYENDSESSION message to an invalid window, the window returns zero and
	Windows does not shut down. Under the debugging version of Windows, this action
	creates Fatal Exit code 0x0007 messages.
	
	This problem does not occur under Windows 3.1. When a DLL is unloaded, before its
	window classes are purged, any windows created using a DLL- registered window
	class are destroyed. When the debugging version of Windows 3.1 destroys a window
	in this manner, it produces one of the following four messages:
	
	- Module unloaded with windows still subclassed
	
	- Global class freed with existent class windows!
	
	- Window class freed with existent class windows!
	
	- USER: Window not destroyed
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
