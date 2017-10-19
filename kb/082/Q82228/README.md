---
layout: page
title: "Q82228: Use of TimerCriticalSection= in 386 Enhanced Mode Windows"
permalink: /kb/082/Q82228/
---

## Q82228: Use of TimerCriticalSection= in 386 Enhanced Mode Windows

	Article: Q82228
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the [386Enh] section of the SYSTEM.INI file, the TimerCriticalSection=
	setting can be used in Microsoft Windows running in 386 enhanced mode to prevent
	system corruption for some networks and terminate-and-stay-resident (TSR)
	programs.
	
	MORE INFORMATION
	================
	
	The TimerCriticalSection= setting must be entered as follows
	
	     [386Enh]
	     TimerCriticalSection=nnnn
	
	where "nnnn" is the amount of time in milliseconds before the critical section is
	timed out. For example, a value of 1000 would indicate a 1 second time-out for
	the timer critical section.
	
	When this feature is enabled, the virtual machine (VM) assumes ownership of the
	critical section before sending a timer interrupt. This prevents timer
	interrupts from being serviced in one virtual machine while another virtual
	machine is in the critical section (for example, making an MS-DOS call).
	
	The time-out feature allows you to fine-tune the amount of time Windows blocks a
	timer interrupt from being serviced in a virtual machine. When a virtual machine
	returns from servicing a timer interrupt, the critical section is released and
	the time-out is canceled to allow other virtual machines to service timer
	interrupts. Typically the time-out will never occur, so it is best to set the
	TimerCriticalSection= value to a large value such as 5000. A virtual machine
	would then be allowed to "own" all timer interrupts for up to 5 seconds before
	other virtual machines would be allowed to run. Because timer interrupt service
	routines return very quickly in almost all situations, this will not present a
	problem. However, a pop-up program such as Borland's SideKick pops-up on a timer
	interrupt and does not return until you pop it down. The time-out is provided to
	handle this situation.
	
	TimerCriticalSection=2000 has prevented system corruption on both Banyan and
	Novell networks.
	
	Additional query words: 3.0 3.0a 3.1 3.00 3.00A 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310
	Version           : :3.1
	
	=============================================================================
	
