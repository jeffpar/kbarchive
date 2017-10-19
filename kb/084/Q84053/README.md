---
layout: page
title: "Q84053: How a TSR Can Serialize Access to Its Data"
permalink: /kb/084/Q84053/
---

## Q84053: How a TSR Can Serialize Access to Its Data

	Article: Q84053
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the enhanced mode of the Microsoft Windows graphical environment, each
	virtual machine (MS-DOS applications and the Windows system) is scheduled for
	execution using a preemptive multitasking algorithm. A terminate-and-
	stay-resident program (TSR) that is visible to all processes running in Windows
	at any given time (a so-called "global" TSR) must take precautions to prevent
	two or more processes from accessing its data concurrently. This article
	discusses techniques that a TSR can use to serialize other applications' access
	to its data.
	
	MORE INFORMATION
	================
	
	A TSR can employ any of the following four techniques to prevent conflicts when
	more than one process accesses data simultaneously:
	
	1. Use the virtual memory manager (VMM) to instance the data in the TSR. This
	  method requires either a virtual device (VxD) or processing the Windows
	  startup broadcast (Interrupt 2Fh Function 1605h) documented in the "Microsoft
	  Windows Device Development Kit Virtual Device Adaptation Guide." This
	  technique creates a copy of the critical data for each virtual machine that
	  requires access. Because each instance has its own private copy, concurrent
	  access to the data is impossible. A TSR cannot use instanced data to share
	  information between virtual machines or to describe a system-wide state for
	  the machine.
	
	2. Encapsulate the global data in a VxD, which performs all data management.
	  This article does not discuss this technique.
	
	3. Use the critical section services described in the "Microsoft Windows DDK
	  Virtual Device Adaptation Guide."
	
	4. Use semaphores.
	
	An application can implement the third technique by surrounding each access to
	the data with calls to the Begin_Critical_Section (Interrupt 2Fh, Function
	1681h) and End_Critical_Section (Interrupt 2Fh, Function 1682h) services.
	However, doing so can cause a significant performance hit for three reasons:
	
	1. Interrupt 2Fh may be trapped by many TSRs or VxDs; traversing the interrupt
	  chain can take a long time.
	
	2. The critical section is claimed by Windows frequently; each call to
	  Begin_Critical_Section may block the process or Windows unnecessarily.
	
	3. If the virtual timer device (VTD) reflects a timer interrupt into a virtual
	  machine while another VM has claimed the critical section, processing blocks.
	
	Note: The presence of an owned critical section does not suppress task switches
	into VMs that receive reflections of hardware interrupts.
	
	If the critical section is not required by the TSR for other reasons, the TSR can
	perform serialization much more efficiently by using a semaphore. A semaphore is
	a global variable in the TSR than can be maintained using the following code:
	
	      Wait_On_Sem:
	          mov     al,1
	          xchg    al,[Semaphor]   ;; xchg is indivisible!!!
	          test    al,0ffh
	          je      Got_Access      ;; If Semaphor was 0, gained access;
	          mov     ax,1680h        ;; otherwise,
	          int     2fh             ;; release time slice
	          jmp short Wait_On_sem   ;; and try again.
	
	     Got_Access:
	
	          < access the data here >
	
	          xor     al,al           ;; Free semaphore.
	          xchg    al,[Semaphor]
	
	This code uses the variable Semaphor as a binary semaphore that has either the
	value 1, indicating claimed, or 0, indicating free. Note that this technique
	depends on the indivisibility of the XCHG instruction. If the processor receives
	an interrupt while it is processing an indivisible instruction, the processor
	completes the instruction before processing the interrupt. In this example, the
	XCHG instruction transfers data between the AL register and the Semaphor
	variable. If XCHG was not indivisible and an interrupt occurred as the XCHG was
	being processed, two processes could receive the semaphore simultaneously, which
	defeats the mutual exclusion that the semaphore is designed to provide. Careful
	coding is required when using the semaphore because there is always a
	possibility of deadlocking a process.
	
	REFERENCES
	==========
	
	For more information on semaphores and mutual exclusion in general, refer to an
	introductory text on operating systems. One such text is "An Introduction to
	Operating Systems" by Harvey M. Deitel (Addison- Wesley).
	
	Additional query words: 3.00 3.10 DDKTSR DDKVXD
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
