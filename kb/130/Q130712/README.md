---
layout: page
title: "Q130712: PRB: Win32s Errors During Visual FoxPro Installation"
permalink: /kb/130/Q130712/
---

## Q130712: PRB: Win32s Errors During Visual FoxPro Installation

	Article: Q130712
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing Visual FoxPro version 3.0, you may see the following message:
	
	  Win32s error
	  Improper installation
	  Win32s requires w32s.386 in order to run
	  Reinstall win32s
	
	CAUSE
	=====
	
	This is not a Win32s problem. It is related to a missing Device=*vmcpd line in
	the 386Enh section of the SYSTEM.INI file. This line provides a virtual device
	driver for math coprocessors.
	
	WORKAROUND
	==========
	
	Add this line:
	
	  Device=*vmcpd
	
	to the 386ENH section of the SYSTEM.INI file, and re-run setup.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	A virtual device driver (VxD) is a 32-bit, protected-mode, dynamic-link library
	that manages a system resource, such as a hardware device or installed software
	so that more than one application can use the resource at the same time. Virtual
	devices work in conjunction with Windows to process interrupts and carry out I/O
	operations for a given application without disrupting how other applications
	run. A virtual device is required for any hardware device that has settable
	operating modes or retains data over any period of time. In other words, if the
	state of the hardware device can be disrupted by switching between multiple
	applications, the device must have a corresponding virtual device. The virtual
	device keeps track of the state of the device for each application and ensures
	that the device is in the correct state whenever an application continues.
	
	Additional query words: coprocessor VFoxWin
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
