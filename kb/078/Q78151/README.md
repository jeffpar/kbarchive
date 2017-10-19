---
layout: page
title: "Q78151: Using the Interrupt 2Fh Critical Section Services"
permalink: /kb/078/Q78151/
---

## Q78151: Using the Interrupt 2Fh Critical Section Services

	Article: Q78151
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the enhanced mode of the Microsoft Windows graphical environment, MS-DOS
	(non-Windows) applications are scheduled for execution using a preemptive
	multitasking scheme; that is, the amount of time that a process is allowed to
	run is determined by the operating system and not by the process. Therefore,
	there is no way for a process, running in a virtual machine (VM), to claim the
	CPU for an arbitrary amount of time. In particular, the Begin Critical Section
	(Interrupt 2Fh Function 1681h) and End Critical Section (Interrupt 2Fh Function
	1682h) services do not prevent a task switch from occurring. These services
	cannot be used in a terminate-and-stay-resident program (TSR) to run code
	consecutively.
	
	MORE INFORMATION
	================
	
	The services mentioned above, Begin Critical Section and End Critical Section,
	call directly into the virtual machine manager's (VMM's) services
	Begin_Critical_Section and End_Critical_Section. As the documentation for these
	services points out, these VMM services impact task switching only in a limited
	way. The function of the global critical section is to shield a non-reentrant
	portion of code, such as the BIOS-resident MS-DOS services, from being entered
	more than once.
	
	Whenever an application claims the global critical section, the VMM schedules for
	execution VMs that have a priority lower than Time_Critical_Boost. VMs into
	which a hardware interrupt is reflected have at least this priority; however,
	any virtual device driver (VxD) may assign a low execution priority to a VM.
	Therefore, depending on the particular system configuration, the critical
	section may or may not provide exclusive execution of the code.
	
	To influence task switching behavior, code must reside in a VxD. However, there
	are very few scenarios in which code must be run exclusively. In most cases, the
	Switch VMs and Callback service (Interrupt 2Fh Function 1685h) is sufficient to
	leave a TSR in a consistent state. The user can disable task switching entirely
	by modifying setting the AllVMsExclusive option to TRUE in the SYSTEM.INI file.
	The following is from NeilSa:
	
	I can remember Ralphl saying that if an MS-DOS TSR were to SwitchVMsAndCallBack
	to itself and raise the priority to Time_Critical_Boost*4, then no task switch
	would ever occur. The reason is that (for 3.0 and, as far as I know, for 3.1),
	the highest priority a virtual machine will be assigned by the system is
	Time_Critical_Boost*2 during hardware interrupts.
	
	Another way to prevent a task switch under Windows 3.0 is to clear interrupts
	(CLI) and not perform any operation (I/O, for example) that will transfer
	control to WIN386. This method is not very practical; however, many people still
	do not know that an application can physically disable interrupts.
	
	There aren't a lot of compelling reasons to tell customers this. Microsoft should
	be steering customers away from MS-DOS habits, and force them to do the real
	work of making TSRs reentrant.
	
	End of NeilSa information
	
	There are many techniques available to make TSR programs cooperate with enhanced
	mode Windows, including making the TSR's stack/data segment instanced by the
	AddInstanceItem function or instance data at Interrupt 2FH Function 1607H time.
	However, discussing these techniques is beyond the scope of this article.
	
	The code for the Interrupt 2Fh services is in the source for the VMM in the
	INT2FAPI.ASM file. The Function 1681h and Function 1682h cases just call the
	respective VMM services.
	
	Additional query words: 3.00 3.10 DDKTSR DDKVXD
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
