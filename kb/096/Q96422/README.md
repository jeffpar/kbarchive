---
layout: page
title: "Q96422: Detecting Idle Time in Windows"
permalink: /kb/096/Q96422/
---

## Q96422: Detecting Idle Time in Windows

	Article: Q96422
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
	
	
	When the system goes idle under Microsoft Windows version 3.1, Kernel issues a
	single Interrupt 2Fh function 1689h call. This interrupt can be used by a
	Windows-based application to detect idle time.
	
	MORE INFORMATION
	================
	
	Listed as "Windows kernel idle call" in the INT2FAPI.INC file of the Windows
	Device Development Kit (DDK) version 3.1, Interrupt 2Fh function 1689h is the
	system-idle notification. To be notified when the system becomes idle, a
	Windows-based application must put an interrupt service routine (ISR) in the
	Interrupt 2Fh chain using the MS-DOS Set Interrupt Vector call (Interrupt 21h
	function 25h), and look for AX register equal to 1689h. The ISR must call the
	address of the old handler to pass the control down the Interrupt 2Fh chain. The
	address of the old handler can be retrieved using the MS-DOS Get Interrupt
	Vector call (Interrupt 21h function 35h).
	
	The ISR must be part of a device driver, dynamic-link library (DLL), or
	installable device driver. Furthermore, the ISR is required to be in a fixed
	segment. This can be accomplished by marking the segment of the ISR as PRELOAD
	FIXED in the module definition (.DEF) file for the DLL.
	
	Hooking Interrupt 2Fh function 1689h to detect idle time can result in
	performance degradation. Therefore, if a Windows-based application only needs to
	perform background processing, it must use the PeekMessage() and WaitMessage()
	functions. Only those applications that need to detect idle time (for example,
	benchmarking applications) should use Interrupt 2Fh.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
