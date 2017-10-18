---
layout: page
title: "Q130288: PC NTMMTA: Using Performance Monitor with MMTA"
permalink: kb/130/Q130288/
---

## Q130288: PC NTMMTA: Using Performance Monitor with MMTA

	Article: Q130288
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	- Microsoft Mail Multitasking MTA, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to monitor CPU utilization in Microsoft Windows NT
	when you run either the Microsoft Mail Multitasking MTA for Windows NT (NT MMTA)
	or the Microsoft Mail Multitasking MTA for OS/2 (MMTA).
	
	MORE INFORMATION
	================
	
	If you run multiple instances of the MMTA, it may create a situation where the
	CPU cannot adequately service all processes running on that machine. You can
	detect this situation by using the Windows NT application Performance Monitor
	(found in the Administrative Tools group).
	
	To detect this situation, first check the %Processor Time counter. %Processor
	Time is expressed as a percentage of the elapsed time that a processor is busy
	executing a non-Idle thread. It can be viewed as the fraction of the time spent
	doing useful work. Each processor is assigned an Idle thread in the Idle process
	that consumes those unproductive processor cycles not used by any other
	threads.
	
	To monitor %Processor Time
	--------------------------
	
	1. Run Performance Monitor from the Administrative Tools group.
	
	2. From the Edit menu, choose Add to Chart.
	
	3. Select the machine that External or Dispatch is running on from the Computer
	  option.
	
	4. From the Object checkbox, select Process.
	
	5. From the Counter checkbox, select %Processor Time.
	
	6. Click Add. Then click Done.
	
	%Processor time greater than 90 percent on average can indicate that the
	processor is being over utilized, and it can cause problems.
	
	To further analyze this situation, it is possible to monitor an individual
	process' %Processor Time. Process - %Processor Time is the percentage of elapsed
	time that all of the threads of this process used in order for the processor to
	execute instructions. An instruction is the basic unit of execution in a
	computer; a thread is the object that executes instructions, and a process is
	the object created when a program is run. Code executed to handle certain
	hardware interrupts or trap conditions may be counted for this process.
	
	To monitor individual External and Dispatch processes
	-----------------------------------------------------
	
	1. Run Performance Monitor from the Administrative Tools group.
	
	2. From the Edit menu, choose Add to Chart.
	
	3. Select the machine that External or Dispatch is running on from the Computer
	  item.
	
	4. From the Object checkbox, select Process.
	
	5. From the Counter checkbox, select %Processor Time.
	
	6. From the Instance checkbox, select all the OS2 instances.
	
	7. Click Add. Then click Done.
	
	The OS2 counter is the client side of every OS/2 application. There is an
	instance of OS2.EXE for each OS/2 application that is running. External will
	launch two processes of OS2.EXE because it is multithreaded, where Dispatch will
	launch only one.
	
	Also, if the machine running External and Dispatch is also running other network
	applications, then monitor these processes. If any one process is taking an
	inordinate amount of CPU time, move that process to another Windows NT machine
	to improve External's performance.
	
	Performance monitor might show 100 percent CPU utilization when SCHDIST.EXE is
	running. Schdist is running normally under Windows NT, and the Performance
	Monitor is giving an incorrect reading on CPU utilization.
	
	
	Additional query words: 3.50 process
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA320 kbMailMMTA350NT
	Version           : :3.2,3.5
	
	=============================================================================
	
