---
layout: page
title: "Q74363: PRB: Fatal Exit 0x00FF or 0xD000: MakeProcInstance Fails"
permalink: kb/074/Q74363/
---

## Q74363: PRB: Fatal Exit 0x00FF or 0xD000: MakeProcInstance Fails

	Article: Q74363
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application running under the Microsoft Windows graphical environment
	receives FatalExit error 0x00FF or 0xD000, "MakeProcInstance only for Current
	Instance."
	
	CAUSE
	=====
	
	A function in a dynamic-link library (DLL) calls the MakeProcInstance() function
	using an application's instance handle. The FatalExit() occurs because the
	current value of the DS register does not match the instance handle passed to
	MakeProcInstance().
	
	RESOLUTION
	==========
	
	A DLL should not call MakeProcInstance() on behalf of the calling application.
	The MakeProcInstance() function is not designed to be used this way.
	
	MORE INFORMATION
	================
	
	When an application is executing, the value of the DS register is equal to the
	application's data segment, which is identified by the application's instance
	handle.
	
	Additional query words: 3.00 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
