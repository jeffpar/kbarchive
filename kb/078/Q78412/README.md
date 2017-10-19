---
layout: page
title: "Q78412: System Hangs with DCA E78 (IRMA) and EMM386.EXE"
permalink: /kb/078/Q78412/
---

## Q78412: System Hangs with DCA E78 (IRMA) and EMM386.EXE

	Article: Q78412
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are using Digital Communications Associates, Inc. (DCA) E78 terminal
	emulation software, and your IRMA Workstation for Windows software is unable to
	establish communications, causing the computer to stop responding (hang). You
	may also be unable to load EMM386.EXE.
	
	RESOLUTION
	==========
	
	DCA recommends that you use E78 versions 1.4.2 or later if you have EMM386.EXE
	installed on your machine.
	
	If you are unable to access the mainframe through IRMA when EMM386.EXE tries to
	load or if EMM386.EXE refuses to install for reasons other than the inability to
	set a page frame, increase the DMA buffer size. The current buffer size may not
	be large enough to handle the amount of DMA transfers made by E78 versions
	earlier than 1.4.2. In the CONFIG.SYS file, the EMM386.EXE device line should
	include the d=nnn switch where nnn is the amount of memory in kilobytes to be
	reserved for buffered DMA:
	
	  device=[drive]:\[dir]\emm386.exe d=48
	
	where [drive] and [dir] are the location of the EMM386.EXE device driver.
	
	The DMA buffer size should be increased to at least 48 (the default is 16). If
	the DMA switch does not solve the problem, you should upgrade E78.
	
	MORE INFORMATION
	================
	
	DCA E78 is a 3270 terminal emulation that supports IRMA convertible
	communications adapters. IRMA links an IBM PC or compatible system to an IBM
	3270 mainframe network without losing the independent processing functions of
	the PC or PC software.
	
	For additional information, contact DCA.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 5.00 3rdparty 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
