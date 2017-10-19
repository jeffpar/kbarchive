---
layout: page
title: "Q82353: BallPoint Mouse and Suspend/Resume"
permalink: /kb/082/Q82353/
---

## Q82353: BallPoint Mouse and Suspend/Resume

	Article: Q82353
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:1.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft BallPoint Mouse version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a Microsoft BallPoint Mouse on a laptop computer with a power-saving
	suspend/resume function, the BallPoint mouse may behave erratically upon
	resuming.
	
	This problem occurs on laptop computers or other personal computers with a
	suspend/resume function that includes powering down the PS/2 mouse port. The
	computer suspends normally, but when it resumes, the BallPoint mouse cursor may
	not move away from the left edge of the screen.
	
	RESOLUTION
	==========
	
	In Windows 3.0, the BallPoint mouse support is provided through a virtual device
	driver named BPVKD.386. To correct the problem, remove the BPVKD.386 virtual
	device driver, thereby making the BallPoint an ordinary mouse.
	
	In Windows 3.1 and 3.11, removing the BPVKD.386 does not resolve the problem
	because the *vkd code for the BallPoint support is built into Windows. The only
	way to correct this behavior is to obtain a PS/2 mouse port BIOS update.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbMSHardwareSearch kbZNotKeyword3 kbWin310 kbWin311 kbBallPointMouse100
	Version           : WINDOWS:1.0,3.1,3.11
	
	=============================================================================
	
