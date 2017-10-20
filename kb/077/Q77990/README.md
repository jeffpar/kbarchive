---
layout: page
title: "Q77990: Switching Stacks at Interrupt Time"
permalink: /kb/077/Q77990/
---

## Q77990: Switching Stacks at Interrupt Time

{% raw %}

	Article: Q77990
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows Multimedia Extensions contain two functions to ease the
	work of device driver developers. An interrupt service routine (ISR) can use the
	StackEnter and StackLeave functions to switch stacks at interrupt time and avoid
	the problems that can occur when an ISR makes even moderate use of the stack.
	StackEnter and StackLeave are not documented in version 1.0 of the Microsoft
	Multimedia Device Development Kit (MDDK).
	
	MORE INFORMATION
	================
	
	The size of the stack available to an ISR in a device driver running under
	Multimedia Windows cannot be guaranteed. For example, the Microsoft Windows
	kernel maintains a very small stack to use in its housekeeping chores. When a
	hardware interrupt requiring some stack storage is serviced on this kernel
	stack, problems can easily result.
	
	To make this situation more realistic, assume that several lower-priority
	interrupts that also use the kernel stack are pending. In this worst-case
	scenario, the maximum size of the stack could be exceeded with potentially
	catastrophic results.
	
	To prevent these catastrophic results, device driver developers should use the
	StackEnter and StackLeave functions exported by the MMSYSTEM dynamic-link
	library (DLL). StackEnter saves the current stack selector and stack pointer
	registers before switching to one of many stacks MMSYSTEM maintains internally
	for this purpose. StackLeave restores the previously saved SS:SP from the last
	call to StackEnter.
	
	Calls to these functions may be nested; however, each call to StackEnter must be
	matched with a call to StackLeave. This is true even if nothing is pushed onto
	the new stack and even if StackEnter fails.
	
	StackEnter fails if there are no more stacks available from MMSYSTEM. Failure is
	indicated by the carry flag being set and SS:SP not being modified on return.
	StackEnter should be the first call performed in an ISR.
	
	The following assembly language code demonstrates the typical uses of StackEnter
	and StackLeave:
	
	       MyISR proc far
	
	                 call    StackEnter          ; Switch to a safe stack
	                 pusha                       ; Save registers
	
	                 <handle IRQ>
	
	                 popa                        ; Restore registers
	                 call    StackLeave          ; Return to interrupt stack
	                 iret                        ; Done with ISR
	
	         MyISR endp
	
	The user can specify the size and number of stacks maintained by MMSYSTEM in the
	[mmsystem] section of the SYSTEM.INI file, as follows:
	
	  [mmsystem]
	  StackSize = 1536
	  StackFrames = 3
	
	The decimal values shown above are the default values for these parameters. The
	minimum values allowed are as follows:
	
	  StackSize = 64
	  StackFrames = 1
	
	The maximum allowed values are any product (StackSize * StackFrames) that equals
	65,535 bytes (64K - 1).
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
