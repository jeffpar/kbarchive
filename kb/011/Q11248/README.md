---
layout: page
title: "Q11248: Windows: Nonpreemptive vs. Preemptive Scheduling"
permalink: /kb/011/Q11248/
---

## Q11248: Windows: Nonpreemptive vs. Preemptive Scheduling

{% raw %}

	Article: Q11248
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Preemptive scheduling, which Windows DOES NOT do, is defined in the following
	way:
	
	  Between any two application instructions, N instructions may execute in
	  another application's context, where N is greater than or equal to zero.
	
	A nonpreemptive system, such as Windows, will guarantee that this number N will
	always be zero.
	
	MORE INFORMATION
	================
	
	In nonpreemptive scheduling, an application is not forced out of context
	asynchronously (that is, it is not preempted). Instead, the application runs
	until it explicitly gives up control. Windows-aware applications give up control
	through various system calls. Although they are not aware of it, MS-DOS-based
	applications give up control whenever they attempt various I/O functions.
	
	MS-DOS-based applications running under Windows version 3.0 are in fact
	preemptively multitasked. In contrast, all Windows-based applications are
	nonpreemptively multitasked. When the system is viewed from a Win386
	perspective, Windows runs in the system virtual machine (VM) and that VM
	competes for time slices along with the rest of the MS-DOS-based applications
	running in other virtual machines. Keep in mind that unlike MS- DOS-based
	applications, all Windows-based applications run inside the system VM, and are
	not given their own virtual machine.
	
	NOTE: An interrupt is not considered to be a form of preemption unless there is
	an application context switch during the interrupt. An interrupt takes the
	execution stream into the kernel, which returns back to the same place without
	running another application, much in the same way a call would.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
