---
layout: page
title: "Q100579: Claiming Critical Sections on Timer Ticks"
permalink: kb/100/Q100579/
---

## Q100579: Claiming Critical Sections on Timer Ticks

	Article: Q100579
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A deadlock situation in which the system is apparently frozen but the mouse
	still moves on the screen.
	
	CAUSE
	=====
	
	Claiming a critical section from inside a timer (IRQ 0) interrupt handler may
	cause a deadlock in the following scenario:
	
	1. Virtual machine (VM) A claims the critical section.
	
	2. VM B receives a virtual timer interrupt, tries to claim the critical section
	  itself, and gets suspended.
	
	3. VM A waits on a timer tick before it releases the critical section, but will
	  no longer see timer interrupts. This deadlocks the machine.
	
	Note that it is not uncommon for global terminate-and-stay-resident (TSR)
	programs to wait for timer interrupts to occur before resuming execution; in
	particular, many network drivers use this technique to periodically retry
	unsuccessful packet transmissions.
	
	WORKAROUND
	==========
	
	The workaround for this problem is to use the documented TimerCriticalSection
	entry in SYSTEM.INI, which will implicitly wrap the virtual interrupt into a
	critical section.
	
	Alternatively, application code could call into a VxD to obtain the critical
	section status (using the Get_Crit_Sect_Status service) before attempting to
	claim the critical section in a timer tick.
	
	MORE INFORMATION
	================
	
	VM A no longer receives timer interrupts in the above scenario because the
	virtual timer device (VTD) sets the V86 interrupt vector of each virtual machine
	to a small code stub that filters out certain timer interrupts. In particular,
	the code stub does not allow nested timer interrupts to be reflected into the
	same virtual machine. Thus, virtual machine B has a pending timer interrupt, and
	therefore, virtual machine A does not receive any timer interrupts but does not
	release the critical section because it waits for a timer interrupt, while VM B
	does not finish processing the timer interrupt because it is suspended on the
	critical section. This scenario will deadlock the two processes.
	
	NeilSa discovered a bug in the VTD that initializes the code stub at the wrong
	time, causing a black screen of death under certain circumstances. The 1-byte
	fix for that bug involves relocating the VTD_Device_Init code to Init_Complete,
	but it will not fix the problem discussed in this article. dskbsweep
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
