---
layout: page
title: "Q73666: WINMEM32 Not Version Dependent"
permalink: kb/073/Q73666/
---

## Q73666: WINMEM32 Not Version Dependent

	Article: Q73666
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WINMEM32 is a dynamic-link library (DLL) designed to run in Microsoft Windows
	enhanced mode to provide support for 32-bit flat memory model code under
	Windows. While WINMEM32 is not bound to a particular version of Windows, it does
	require enhanced mode.
	
	New versions of WINMEM32 that might become available in the future should not
	affect the ability to use old versions of WINMEM32 on a given system. Note,
	however, that only one version of WINMEM32 can be loaded at a time.
	
	Newer versions of WINMEM32 will be backward compatible with older versions.
	Because you should upgrade to the new version, if possible, it is very important
	that WINMEM32 applications do not tightly version bind to WINMEM32. An
	application should always use the greater-than- or-equal-to operator (>=),
	never the equal-to operator (==), to compare the result of the WINMEM32
	GetWinMem32Version function to the required version.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
