---
layout: page
title: "Q47125: Demand Paging MS-DOS-Based Applications"
permalink: /kb/047/Q47125/
---

## Q47125: Demand Paging MS-DOS-Based Applications

	Article: Q47125
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article has two parts. The first part applies to Windows version
	3.0, and to Windows version 3.1 without 32-bit disk access. The second part
	applies to Windows version 3.1 with 32-bit disk access.
	
	MORE INFORMATION
	================
	
	Part 1: Windows 3.0, and Windows 3.1 Without 32-Bit Disk Access
	---------------------------------------------------------------
	
	Under enhanced mode Windows version 3.0, it is not possible to allow MS-DOS-Based
	applications to use virtual (demand paged) memory (VM) when they are active
	(they are the foreground application, or have the background execution option
	set). This is because the paging mechanisms of the system use either:
	
	- MS-DOS plus an MS-DOS device plus INT13
	
	- Just INT13
	
	In other words, to access the paging file (virtual memory that is currently
	demand-paged out) Windows must call code that resides in the VM along with the
	application (BIOS, MS-DOS, and so on).
	
	The problem this causes is best illustrated by an example:
	
	1. Run an MS-DOS-based application that hooks INT 13h.
	
	2. Arrange to "page out" the page that has part of the application's INT 13h
	  hook in it.
	
	3. Touch a "not present" page.
	
	  a. This generates a page fault.
	
	  b. The system calls "page this page in."
	
	  c. This calls INT 13h.
	
	  d. This page faults because the INT 13h hook of the application is currently
	     paged out.
	
	  e. The system calls "page this page in."
	
	  f. This calls INT 13h.
	
	  g. This page faults because the INT 13h hook of the application is currently
	     paged out.
	
	This continues forever, causing a deadlock situation, and the system halts.
	
	To prevent this problem, make sure every page of an MS-DOS-based application is
	always present when the application's VM is active. Thus, MS-DOS-based
	application VMs are always present, and therefore, do not use demand-paged
	memory except when they are not active.
	
	Given the way that system paging works, there is no way to work around this
	limitation, partly because the installed MS-DOS-based application base is so
	diverse. Note also that this problem with INT 13 is only part of the picture.
	Almost all hardware interrupts can cause exactly the same problem.
	
	Part 2: Windows version 3.1 with 32-Bit Disk Assess
	---------------------------------------------------
	
	One solution is to change the way system paging works so that to access the
	paging file, the system paging does not have to use any code that resides in the
	VM with the application. 32-bit disk access for Windows version 3.1 performs
	this type of functionality.
	
	32-bit disk access addresses the problem that prevents the demand paging of
	MS-DOS-based application VMs. 32-bit disk access allows the paging component of
	the system to access the paging file without having to access anything that
	resides in the VM (the application, MS-DOS, the BIOS, and so on). This prevents
	the paging deadlock problem discussed above because all of the code and data
	needed to access the paging file is inside enhanced mode Windows and is designed
	such that access to the paging file will never cause a page fault to occur.
	
	As a side benefit, this is also much faster than calling MS-DOS or some other
	component in the VM because calling VM code requires that the 80386 CPU change
	modes between protected mode and virtual mode. The transitions between CPU modes
	are quite expensive in terms of CPU cycles. Therefore, the other benefit of
	32-bit disk access is that there is an improvement in "paging throughput"
	because the "CPU mode transitions" required by access to the paging file through
	MS-DOS or INT 13h are eliminated.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
