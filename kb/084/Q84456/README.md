---
layout: page
title: "Q84456: SAMPLE: TERMWAIT Spawns Task and Waits for its Termination"
permalink: /kb/084/Q84456/
---

## Q84456: SAMPLE: TERMWAIT Spawns Task and Waits for its Termination

	Article: Q84456
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310 kbOSWin300
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Termwait.exe is a self-extracting file in the Microsoft Download Center that
	demonstrates how an application can launch a child task and then wait for it to
	complete before executing specific code. Termwait.exe uses notification messages
	from the Toolhelp dynamic-link library (DLL) to determine that the child task
	has completed. The techniques demonstrated by the Termwait.exe sample work for
	both Windows and MS-DOS (non-Windows) child tasks.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Termwait.exe
	  (http://download.microsoft.com/download/platformsdk/file75/3.1/W31/EN-US/termwait.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The Termwait.exe sample application calls the NotifyRegister() function to
	install a notification callback function before it calls the WinExec() function
	to launch the child task. If a callback function is registered, it is called
	before any task in the system terminates. The notification callback function
	calls the TaskFindHandle() function to fill a TASKENTRY data structure with
	information about the terminating task. When the callback determines that the
	child task has terminated, it notifies the Termwait.exe application.
	
	When it spawns the child task, Termwait.exe sets its bChildIsExecuting global
	variable to TRUE. The notification callback resets this variable to FALSE when
	the child task is complete. Any code that must not execute while the child task
	is running can query the value of the bChildIsExecuting flag. During the wait,
	any menu selections that will cause reentrancy problems should be disabled.
	Doing so keeps the user informed about the options that are presently valid. In
	the TERMWAIT sample, the AfterChildHasTerminated() function contains code that
	is executed only after the child task has completed.
	
	If an application tracks a number of child tasks, its NotifyRegister() callback
	function should process both the NFY_STARTTASK and NFY_EXITTASK notifications.
	The callback function uses these notifications to maintain a list of child task
	handles. Note that while no two tasks will have the same handle, it is possible
	for task handles to be reused. Consequently, if one task ends and a new task
	begins, the new task can use the same task handle.
	
	Version 3.1 of the Windows SDK is required to build the Termwait.exe sample.
	However, the compiled code is compatible with both Windows 3.0 and 3.1. Note
	that because the TOOLHELP.DLL is not part of the default installation for
	Windows 3.0, it must be installed into the Windows system directory (by default,
	C:\WINDOWS\SYSTEM) before Termwait.exe will run. The TOOLHELP.DLL file is
	provided as a redistributable file with the Windows 3.1 SDK.
	
	NOTE: The NotifyRegister callback function must be placed in a separate source
	file and this file must be compiled with /GA/GEa. This is because the
	NotifyRegisterCallback function is called with the Data Segment (DS) of the task
	that installed the callback and the Stack egment of the task which is notifying
	the callback. So SS != DS and /GA/GEs cannot be used to compile this file.
	
	Additional query words: synchronize softlib TERMWAIT.EXE
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
