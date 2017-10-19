---
layout: page
title: "Q76390: Full-Screen MS-DOS Apps Slow Timer Msgs in Enhanced Mode"
permalink: /kb/076/Q76390/
---

## Q76390: Full-Screen MS-DOS Apps Slow Timer Msgs in Enhanced Mode

	Article: Q76390
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
	
	In 386 enhanced mode, Windows system timer (WM_TIMER) messages are generated
	less often when an MS-DOS-based application runs full-screen with its PIF file
	specifying background execution than when the same MS-DOS-based application runs
	in a window.
	
	When a full-screen MS-DOS-based application is running, Windows does not need to
	track the mouse and update the screen. Therefore, Windows runs with a low
	priority in the background. Windows-based applications receive fewer WM_TIMER
	messages because the number of timer ticks that Windows receives decreases from
	18.2 per second to 2 per second or even fewer.
	
	MORE INFORMATION
	================
	
	Windows's 386 enhanced mode architecture and display mechanism account for the
	way that WM_TIMER messages behave when MS-DOS-based applications are running.
	
	First of all, WM_TIMER messages are not guaranteed to be sent exactly at a
	specified time; they may be sent any time after the specified time has elapsed.
	For example, a WM_TIMER message set for 60 milliseconds may be sent at exactly
	60 milliseconds, or it may be sent more than two minutes later. WM_TIMER
	messages behave this way because they have the lowest priority of any Windows
	message. Applications receive WM_TIMER messages only after all other messages in
	the system have been processed (that is, when all message queues are empty).
	
	In 386 enhanced mode, Windows uses a virtual machine architecture that sets up a
	virtual machine (VM) for each MS-DOS-based application. Windows is essentially
	an MS-DOS-based application and creates a VM for itself called the System VM.
	The System VM runs Windows and all Windows-based applications; each MS-DOS-based
	application receives a separate VM.
	
	Virtual machines behave like 8086 processors with additional privileged
	instructions provided by the 80386 processor's virtual-8086 mode. Virtual- 8086
	mode differs from real mode in that it has memory protection, virtual memory,
	and privilege-checking mechanisms. Each virtual machine also has an optional
	protected-mode portion. The System VM uses its protected mode portion to run
	Windows-based applications.
	
	The Windows Virtual Machine Manager (VMM) controls the multitasking of the
	virtual machines; it manages memory, CPU execution time, and device
	coordination. The VMM runs in the 80386 processor's 32-bit flat memory model
	along with Windows virtual devices (VxDs), and preemptively schedules the
	virtual machines.
	
	Foreground virtual machines running MS-DOS-based applications always receive 18.2
	timer ticks each second so that the VM looks exactly like a stand-alone 8086
	machine. When the System VM is in the foreground, it (and Windows) receives 18.2
	timer ticks per second as well.
	
	Background virtual machines do not receive 18.2 timer ticks per second; they
	receive 2 or fewer ticks per second because the VMM reduces their relative
	priorities. As a result, the foreground VM can run faster.
	
	When the System VM is in the background and a full-screen MS-DOS-based
	application is in the foreground, Windows receives fewer timer ticks, and
	therefore runs slower than normal. Windows-based applications process their
	messages slower, causing WM_TIMER messages to be delayed.
	
	Windowed MS-DOS-based applications behave differently from full-screen
	MS-DOS-based applications. Windows creates a special agent application,
	WINOLDAP, to run windowed MS-DOS-based applications. WINOLDAP's job is to place
	all output from an MS-DOS-based application into the client area of a window.
	Windows controls all parts of the display, including the area of the windowed
	MS-DOS-based application, and tracks the mouse pointer.
	
	Under such circumstances, Windows is running in the background with a high
	priority. The windowed MS-DOS-based application is running in the foreground in
	a VM. The VMM preemptively multitasks the VMs so that the MS-DOS-based
	application can run and Windows can manage the screen. Because the System VM has
	a high priority, it receives more timer ticks per second than other background
	VMs. Windows and Windows-based applications, therefore, process more messages,
	which allows WM_TIMER messages to be sent more often.
	
	Even though background VMs receive fewer timer ticks per second, they still
	receive time slices according to their relative priorities.
	
	NOTE: This article applies to MS-DOS-based applications that have a PIF file set
	for background execution. If the MS-DOS-based application is running full-screen
	in the foreground with its PIF file set to exclusive processing, all other
	applications, including Windows, will be suspended, just as if the MS-DOS-based
	application were run under Windows in standard mode. If the MS-DOS-based
	application runs in a window with exclusive processing set, then Windows does
	not get suspended because it must manage the screen output for the MS-DOS-based
	application.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
