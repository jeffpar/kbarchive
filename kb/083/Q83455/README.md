---
layout: page
title: "Q83455: PRB: XMS Version Information in MS-DOS Window Incorrect"
permalink: /kb/083/Q83455/
---

## Q83455: PRB: XMS Version Information in MS-DOS Window Incorrect

	Article: Q83455
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an MS-DOS window under Windows, the version number of the extended memory
	system (XMS) driver is not the installed XMS driver (started before Windows is
	started). It is a version of the XMS manager built into Windows. The same thing
	is true for the expanded memory system (EMS) driver, the DOS Protected Mode
	Interface (DPMI), and any other drivers that enhanced mode Windows virtualizes.
	
	CAUSE
	=====
	
	This is by design. When Windows starts, it takes over all the XMS memory from
	the original XMS, EMS, and DPMI drivers. When you open an MS-DOS box, Windows
	provides extended memory to the MS-DOS-based application. NOTE: The XMS manager
	is XMS 2.0 compliant.
	
	RESOLUTION
	==========
	
	It is not possible to retrieve the version number of the original provider.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
