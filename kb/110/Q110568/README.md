---
layout: page
title: "Q110568: Pentium-Based Machine Hangs with Communication Applications"
permalink: /kb/110/Q110568/
---

## Q110568: Pentium-Based Machine Hangs with Communication Applications

	Article: Q110568
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pentium-based machines with a peripheral component interface (PCI) bus and a
	16550 UART chip stop responding (hang) or exhibit other unexpected behavior when
	you use communication applications, such as Microsoft At Work PC Fax or
	Microsoft Terminal.
	
	In some cases, you may be able to run the software successfully once but then
	experience problems when you try to run it a second time (before Windows is
	restarted).
	
	CAUSE
	=====
	
	The PCI bus uses a new universal asynchronous receiver transmitter (UART) chip
	that identifies itself as a 16550 chip but does not handle the 16-bit buffer the
	same way that the 16550 UART chip does.
	
	These problems occur if there is data in the chip when the serial communications
	application attempts to open the communications port. A problem with the chip
	implementation causes the chip to become trapped in a mode in which data is
	always detected in its FIFO buffer.
	
	
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: appnote 3.11 3.10 3.1 gateway2000 exit restarted gateway Dell XPS AMI motherboard kit machine built-in com comm port ports NEC Image 466ES PCs print Remote Access Services
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
