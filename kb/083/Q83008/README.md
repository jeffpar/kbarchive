---
layout: page
title: "Q83008: XMS Calls Under Windows 3.1"
permalink: kb/083/Q83008/
---

## Q83008: XMS Calls Under Windows 3.1

	Article: Q83008
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
	
	When enhanced mode Windows is running, the WIN386 module answers all extended
	memory specification (XMS) calls. The standard mode MS-DOS Extender (DOSX)
	answers all calls only in protected mode.
	
	The standard mode task swapper answers memory allocation calls to arbitrate the
	use of extended memory between Windows and MS-DOS applications, and to
	facilitate task swapping.
	
	MORE INFORMATION
	================
	
	Windows enhanced mode provides its own XMS services, without regard to the XMS
	driver that was installed before Windows started up. The amount of XMS memory
	available in an MS-DOS window under enhanced mode is determined by the PIF
	(program information file) settings, and not by the amount of memory actually
	available in the system. The enhanced mode XMS driver returns failure for all
	XMS Lock Region calls, because enhanced mode XMS uses virtual memory rather than
	physical memory.
	
	In standard mode, the task swapper hooks the XMS driver, allowing it to arbitrate
	XMS use between Windows-based and MS-DOS-based applications. Most XMS calls are
	passed through to the original XMS driver. However, calls that manage extended
	memory are affected by the PIF settings. Because it hooks the XMS driver, the
	standard mode task swapper can use extended memory allocated to Windows, but not
	currently in use, for swapping. This feature is disabled if a "limulator"
	[Lotus/Intel/Microsoft (LIM) standard expanded memory system driver] is
	present.
	
	The standard mode MS-DOS extender hooks XMS detection in protected mode. The INT
	2Fh call that retrieves the address of the XMS driver's control function
	(AX=4310h) returns a protected mode address that an application can call to
	perform XMS control functions. This is intended for the use by application
	installation programs that must determine the version number of an installed XMS
	driver. Applications in the Windows environment are discouraged from making
	other XMS calls in protected mode. In particular, attempting to lock XMS memory
	in standard mode may result in a page fault or fatal system crash.
	
	Additional query words: 3.10 no32bit switcher
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
