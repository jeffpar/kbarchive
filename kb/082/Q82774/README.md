---
layout: page
title: "Q82774: Why Does Setup add STACKS=9,256 to the CONFIG.SYS File?"
permalink: /kb/082/Q82774/
---

## Q82774: Why Does Setup add STACKS=9,256 to the CONFIG.SYS File?

	Article: Q82774
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbsetup kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows operating system version 3.1 will modify the CONFIG.SYS file,
	if allowed, and add the following line:
	
	       STACKS=9,256
	
	This article discusses the STACKS command and why Windows changes the default
	value.
	
	MORE INFORMATION
	================
	
	MS-DOS automatically switches stacks for some hardware interrupts to prevent
	stack overflow errors from occurring. The STACKS=x,y statement in the CONFIG.SYS
	file controls the number and size of these stacks.
	
	The first number of the STACKS= statement specifies the number of stacks and the
	second number specifies the size of each stack. The default setting (if no
	STACKS= statement appears in the CONFIG.SYS file) is 9,128. All stack switching
	can be disabled by setting the entry to STACKS=0,0. In this case, MS-DOS will
	never switch stacks during hardware interrupts.
	
	Below are some questions and answers pertaining to the STACKS command.
	
	1. Q. Why does MS-DOS switch stacks for hardware interrupts?
	
	  A. Every program has a stack. The stack is used to store information for the
	  program. When a hardware interrupt occurs, information is placed on the
	  stack. An example of a device that generates a hardware interrupt is the
	  keyboard; every time a key is pressed, one or more hardware interrupts will
	  occur. Terminate-and-stay- resident (TSR) programs, MS-DOS device drivers,
	  and system BIOS software may examine the hardware interrupt using a technique
	  known as "hooking" the interrupt. Each hardware interrupt hook may require
	  more stack space. If too much stack space is used, a stack overflow error
	  will occur.
	
	  Stack overflows can cause extremely serious problems to occur because memory
	  locations that contain important information can be overwritten. Because many
	  MS-DOS applications do not have stack segments that are large enough for all
	  the interrupt hooks, MS-DOS provides a mechanism for switching stacks.
	
	2. Why isn't the default MS-DOS stack size adequate for Windows 3.1?
	
	  A. Windows itself does not benefit from the increased stack size. In fact, it
	  is actually the combination of EMM386.EXE, SMARTDRV.EXE, and the mouse driver
	  combined with any TSRs and device drivers already installed on the system
	  that can cause problems. For example, SMARTDRV.EXE and the mouse driver hook
	  the timer interrupt. EMM386.EXE and SMARTDRV.EXE hook the keyboard interrupt.
	  When these hooks are added to a machine that is running network software or
	  other TSRs that hook the same interrupts, the stack space requirements exceed
	  128 bytes (the default stack size) and a stack overflow error can occur.
	
	3. Q. Stacks=0,0 seems to work on my machine. Should I use this setting?
	
	  A. Disabling all stack switching may work for some MS-DOS programs, but it can
	  cause stack overflow errors for others. Stack overflow errors can cause
	  completely unpredictable results since interrupts occur at random times.
	  Because it is impossible to tell if stack overflow errors will occur in the
	  applications you run, it is preferable to leave MS-DOS stack switching
	  active.
	
	4. Q. When should this line be modified for troubleshooting?
	
	  A. If your system was previously configured with STACKS=0,0 and does not boot
	  properly after setting up Windows, you should change the entry back to
	  STACKS=0,0. If this corrects the problem, then some software in the machine
	  is incompatible with MS-DOS's stack- switching code. However, please note the
	  earlier warning about using the STACKS=0,0 setting.
	
	  If your computer seems to behave unpredictably, this may be due to stack
	  overflow errors in the MS-DOS stacks. In this case, try increasing the size
	  parameter of the stacks setting to 512 (the maximum value).
	
	  If the message "INTERNAL STACK OVERFLOW. SYSTEM HALTED" appears on your
	  system, then the number of stacks is too small. Increasing the number of
	  stacks will correct this problem.
	
	Additional query words: 3.10 3.11 3.1 stacs
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
