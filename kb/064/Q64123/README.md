---
layout: page
title: "Q64123: PRB: Encountering an INT 01 with WDEB386"
permalink: /kb/064/Q64123/
---

## Q64123: PRB: Encountering an INT 01 with WDEB386

{% raw %}

	Article: Q64123
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When debugging an application with WDEB386, the program halts on a breakpoint at
	an INT 01 instruction.
	
	CAUSE
	=====
	
	An INT 01 is coded into Windows in the Fatal_Error_Handler. This interrupt is
	hit when some device driver is doing a fatal exit. The INT 01 is there to make
	the debugger useful when diagnosing the fatal error. INT 01 in virtual devices
	(VxDs) is generally ignored (treated as a NOP instruction) in the retail version
	of Windows. However, if the debugger is installed, the system breaks into the
	debugger.
	
	RESOLUTION
	==========
	
	Diagnose and correct the cause of the fatal exit.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
