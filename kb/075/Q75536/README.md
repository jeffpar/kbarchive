---
layout: page
title: "Q75536: Idle Interrupt (INT 28h) Under Windows 3.0"
permalink: /kb/075/Q75536/
---

## Q75536: Idle Interrupt (INT 28h) Under Windows 3.0

{% raw %}

	Article: Q75536
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
	
	MS-DOS TSR (terminate-and-stay-resident) programs that rely on the MS-DOS Idle
	interrupt (INT 28h) to receive a "time-slice" under Windows version 3.0 may not
	function consistently.
	
	MORE INFORMATION
	================
	
	The MS-DOS Idle interrupt (INT 28h), also known as the MS-DOS Safe to Use
	interrupt, is commonly used by TSRs to determine when it is safe to do
	background processing. During this interrupt, it is known that it is safe to use
	MS-DOS file operations and other MS-DOS (INT 21h) functions with numbers greater
	than 0Ch.
	
	However, if a TSR relies on INT 28h to give it a time-slice to carry out
	background tasks, then the TSR will not perform consistently because of the way
	that some applications process messages under Windows.
	
	For example, Write (a word processing application provided with Windows) does not
	let the system go idle; it uses a PeekMessage() loop. Because of this, the
	Windows KERNEL module never gets into its idle loop to issue an INT 28h.
	Therefore, when Write is running in Windows, no INT 28h interrupts will be
	issued. Note that Write will idle when a menu is pulled down -- allowing a few
	Idle interrupts to be generated.
	
	Do not rely on INT 28h to perform background processing under Windows; use some
	other mechanism to determine that the processor is idle. The MS-DOS Idle
	interrupt may be removed in a future version of Windows, and therefore should
	not be used if at all possible. The following is from AmitC:
	
	INT 28h is the MS-DOS Idle interrupt. KERNEL tries to simulate this and issues
	INT 28h's when it thinks that the system is idle. WinWord never lets the system
	go idle. It does PeekMessage() calls constantly and KERNEL never gets a chance
	to get into its idle loop to issue an INT 28h.
	
	Write has a similar behavior. However, Write does go idle once you pull down a
	menu.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
