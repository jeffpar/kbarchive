---
layout: page
title: "Q88190: PRB: DLL System Hook Function Not Affecting Apps System-Wide"
permalink: /kb/088/Q88190/
---

## Q88190: PRB: DLL System Hook Function Not Affecting Apps System-Wide

	Article: Q88190
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbHook kbSDKPlatform
	Last Modified: 11-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are trying to install a system hook function with SetWindowsHookEx in a
	Dynamic-Link Library (DLL), the hook function is executed only within the
	calling application even though it is supposed to affect all applications
	system-wide.
	
	CAUSE
	=====
	
	In Windows 3.0, the minimum required compile option to generate the appropriate
	entry/exit code sequence for a Windows-based application is the /Gw switch.
	
	With Microsoft C/C++ version 7.0, however, the documentation states that the /Gw
	and /GW switches should be used only for applications that must run in real mode
	Windows. Because real mode is no longer available in Windows 3.1, most programs
	should now be built using the /GA switch (/GD for DLLs). The C 7.0 /GA and /GD
	switches require that exported functions (especially callback functions) be
	explicitly marked as __export if the switch is to affect them.
	
	RESOLUTION
	==========
	
	If the DLL containing the hook function is compiled with the /GD switch, the
	hook function should be explicitly marked with the __export keyword:
	
	     LRESULT FAR PASCAL __export CbtFunc (int Code,
	
	                                       WPARAM wParam, LPARAM lParam);
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbHook kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
