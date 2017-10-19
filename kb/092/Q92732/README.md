---
layout: page
title: "Q92732: FIX: System Errors or Crash Debugging Large App in CodeView"
permalink: /kb/092/Q92732/
---

## Q92732: FIX: System Errors or Crash Debugging Large App in CodeView

	Article: Q92732
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS 
	- Microsoft CodeView for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When debugging a very large application with versions 4.0, 4.01, or 4.05 of the
	Microsoft CodeView debugger, stepping into, tracing into, or running an
	application can cause various errors which can cause the system to hang. The
	exact error depends on the environment in which CodeView is running.
	
	CAUSE
	=====
	
	CodeView versions 4.0, 4.01, and 4.05 do not determine the amount of available
	memory before loading an application.
	
	RESOLUTION
	==========
	
	Verify that memory is available through DPMI, XMS, or VCPI to load the CodeView
	application and the symbolic information for the application being debugged into
	extended memory. A minimum of 2048K extended memory is required.
	
	Remove any unnecessary device drivers or memory-resident applications to increase
	the amount of available conventional memory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView versions 4.0, 4.01, and
	4.05. This problem was corrected in CodeView version 4.1.
	
	MORE INFORMATION
	================
	
	When CodeView is running in an MS-DOS window in the Microsoft Windows
	environment, stepping into the application may generate the following error
	message:
	
	  This application has violated system integrity due to an invalid fault and
	  will be terminated.
	
	When CodeView is run directly from MS-DOS and the HIMEM.SYS memory manager is
	installed, stepping into the application may generate the following error
	message:
	
	  run-time error R6915
	  - DOSX16 : Unhandled exception
	
	When CodeView is run directly from MS-DOS and the 386MAX memory manager is
	installed, stepping into the application may hang the system.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3
	Version           : :
	Solution Type     : kbfix
	
	=============================================================================
	
