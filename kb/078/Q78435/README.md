---
layout: page
title: "Q78435: What Is EGA.SYS and What Is Its Function?"
permalink: kb/078/Q78435/
---

## Q78435: What Is EGA.SYS and What Is Its Function?

	Article: Q78435
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article briefly describes the EGA.SYS file, why it is needed, and when it
	will be automatically installed by the MS-DOS 5.0 Setup program.
	
	MORE INFORMATION
	================
	
	EGA.SYS is a device driver that allows different programs to be aware of the
	current state of the registers on an EGA video card. It is necessary because
	many registers on an EGA card can be written to by an application, but there is
	no way to read the registers to determine the current settings. This is a
	problem for programs such as MS-DOS Shell that must save and restore the
	computer screen.
	
	The solution to this problem is to require programs to record the current state
	of the EGA video registers in the EGA.SYS file. A program that changes the state
	of the video display can determine current settings by checking EGA.SYS.
	
	If EGA.SYS is not installed on a system that has an EGA video card, the screen
	may be unreadable after the user switches between two different
	graphics-oriented programs from within Shell.
	
	The MS-DOS 5.0 Setup program installs the EGA.SYS driver in the CONFIG.SYS file
	on any computer that it detects as having an EGA video card.
	
	Additional query words: 5.00 dosshell kbfest newfest
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	
