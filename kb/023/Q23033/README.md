---
layout: page
title: "Q23033: HOWTO: Use NetBIOS Interrupts Under Windows"
permalink: /kb/023/Q23033/
---

## Q23033: HOWTO: Use NetBIOS Interrupts Under Windows

{% raw %}

	Article: Q23033
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbnetwork kb16bitonly kbAPI kbNetBIOS kbSDKPlatform kbOSWin310 kbOSWin300 kbGrpDSNet
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows SDK API NetBIOSCall() is provided as an interface for application
	developers using network communication protocols.
	
	MORE INFORMATION
	================
	
	The NetBIOSCall() translates to an interrupt 5Ch call and is handled by the
	Virtual NetBIOS driver under 386 enhanced mode Windows or by the MS-DOS Extender
	(DOSX.EXE) under standard mode.
	
	The interface provides for both synchronous and asynchronous NetBIOS commands.
	
	When asynchronous commands are used, there are two rules that an application
	developer must follow:
	
	- The POST routine provided to the network control block (NCB) MUST be in a
	  fixed code segment in a DLL (dynamic-link library).
	
	  This is necessary because the asynchronous event could complete while a BIOS
	  operation is in progress. Because the BIOS is used to reload segments, if the
	  event occurred while in the BIOS, it would not be possible to reload a
	  not-present segment. A FIXED code segment in a DLL remains fixed and
	  page-locked in memory at all times.
	
	- The NCB and associated read or write buffer for asynchronous commands must be
	  allocated as GMEM_FIXED from within a DLL. This ensures that the buffers will
	  be page-locked.
	
	It is recommended that synchronous commands not be used if a comparable
	asynchronous command is available. Synchronous NetBIOS() commands cause the
	entire Windows system to halt until the command completes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kb16bitonly kbAPI kbNetBIOS kbSDKPlatform kbOSWin310 kbOSWin300 kbGrpDSNet 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
