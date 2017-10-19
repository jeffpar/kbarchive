---
layout: page
title: "Q83301: Retrieving Application Exit Code in MS-DOS Window"
permalink: /kb/083/Q83301/
---

## Q83301: Retrieving Application Exit Code in MS-DOS Window

	Article: Q83301
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under Windows version 3.1, the value returned by an MS-DOS-based application is
	available to other applications in the system. Under Windows version 3.0,
	however, this value is not available; the exit code returned is always zero.
	
	MORE INFORMATION
	================
	
	Windows supports an MS-DOS window in which to run MS-DOS (non-Windows)
	applications. The WINOLDAP module serves as an interface for the application and
	the remainder of the Windows environment. When the MS-DOS-based application
	terminates, WINOLDAP retrieves the application's exit code. Then WINOLDAP itself
	terminates, using the retrieved exit code as its own exit code.
	
	An application developed for the Windows environment can retrieve the exit code
	from WINOLDAP. The application defines a call-back function and calls the
	NotifyRegister function in the tool helper library (TOOLHELP.DLL). The call-back
	function will receive an NFY_EXITTASK message containing the exit code each time
	a task terminates.
	
	The Windows 3.1 WINOLDAP module can return a number of error codes which are
	listed and explained in the "Microsoft Windows Software Development Kit
	Programmer's Reference Volume 1," page 277.
	
	Additional query words: no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
