---
layout: page
title: "Q195549: PRB: Exception When Calling RegisterDevice"
permalink: /kb/195/Q195549/
---

## Q195549: PRB: Exception When Calling RegisterDevice

	Article: Q195549
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbDebug kbOSWinCE100
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE, version 1.0 Embedded ToolKit (ETK) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows CE embedded application that tries to load a stream interface device
	driver throws an exception inside the call to RegisterDevice(). The debugger
	output shows messages similar to the following:
	
	  0x80efdda4: ObjectCall: Failed(1): 16
	  0x80efdda4: Exception 000 Thread=80efdda4 Proc=20efa42a 'testapp.exe'
	  0x80efdda4: AKY=00000021 PC=8022f35d ESP=0c02ecec EA=00000000
	  First chance exception c000001c () occurred
	  Thread stopped.
	
	CAUSE
	=====
	
	The RegisterDevice() function is implemented in the device manager (Device.exe)
	component of Windows CE. If the current target project does not contain the
	DEVICE component, the RegisterDevice() function is not available.
	
	RESOLUTION
	==========
	
	The DEVICE component and its related components (such as filesys) must be added
	to the CE_MODULES component list used by CESYSGEN. Refer to the Windows CE ETK
	documentation for information about component selection.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbOSWinCE100 
	Technology        : kbAudDeveloper kbWinCEETKSearch kbWinCESearch kbWinCEETK100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
