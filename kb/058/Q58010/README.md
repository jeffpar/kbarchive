---
layout: page
title: "Q58010: WDEB386 Debugger's Use of COM Port"
permalink: /kb/058/Q58010/
---

## Q58010: WDEB386 Debugger's Use of COM Port

	Article: Q58010
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
	
	The only COM port setting for the Windows 80386 Debugger (WDEB386) that can be
	altered through the /C: command-line switch is the specification for which COM
	port to use. (The COM port and the baud rate can also be changed through a
	debugger command.) Unlike CodeView, WDEB386 runs outside the Windows environment
	and does not use WIN.INI or SYSTEM.INI settings to store its configuration.
	
	WDEB386 reprograms the COM port before it sends each character. This feature
	prevents other programs or parts of programs that use or abuse the COM port,
	such as the MS-DOS MODE command, from influencing the operation of WDEB386. This
	prevents misbehaving applications from affecting communication with the
	debugger.
	
	WDEB386 is a systems-level debugger for the Windows version 3.0 protected mode
	environment (enhanced mode and standard mode). Because it can debug the
	initialization portion of device drivers that run under protected mode Windows,
	WDEB386 is often used during device driver development. However, for most uses,
	CodeView is the preferred protected mode debugger.
	
	In Windows version 3.1, WDEB386 adds the /R: command-line switch to specify the
	baud rate.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
