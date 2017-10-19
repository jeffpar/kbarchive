---
layout: page
title: "Q92648: PRB: Linear Addr Mode Display Driver &amp; MS-DOS Virtual Machines"
permalink: /kb/092/Q92648/
---

## Q92648: PRB: Linear Addr Mode Display Driver &amp; MS-DOS Virtual Machines

	Article: Q92648
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Linear address mode display drivers must save the extended portions of the CPU
	registers. Some enhanced mode grabbers assume that the display driver does save
	these register portions. Windowed MS-DOS sessions can become filled with
	'garbage' if the display driver does not save the extended CPU register
	portions.
	
	SYMPTOMS
	========
	
	When an MS-DOS session is opened to full screen and then converted to a windowed
	shell, the client area is filled with text-like 'garbage'. If a DIR or CLS
	command is issued, the windowed MS-DOS session is filled with the correct
	information at the point where the command was entered. Any scrolling thereafter
	displays the correct information.
	
	If the windowed screen is enlarged it will also fill up with the similar type of
	'garbage' and will correct itself when scrolled or cleared.
	
	CAUSE
	=====
	
	The cause of this type of problem is a 'trashing' of the high part of some
	register(s) by the display driver. When the display grabber receives the
	execution focus with corrupted registers, the result is screen garbage.
	
	RESOLUTION
	==========
	
	Modify your display driver so that it saves the extended portions of registers
	before using them and restores them after your through. Do not assume that the
	extended portions of the CPU registers are free to trash.
	
	MORE INFORMATION
	================
	
	While it could be argued that it is not required to save the high portions of
	the CPU registers, the fact is that there are grabbers out there that assume
	otherwise. At a minimum, you need to make sure to save and restore processor
	registers ESI,EDI in BitBlt(). It is likely that your driver code is saving and
	restoring SI,DI but you are using ESI,EDI, which means the high part of ESI,EDI
	is not being preserved correctly. There may also be a need to save the other
	extended registers as well.
	
	Note that this problem does not occur when a 'segmented' driver is used. The
	segmented driver accesses the video memory at the standard locations of
	A0000-BFFFF. This problem does not occur with full screen only MS-DOS sessions.
	
	Additional query words: 3.10 DDK display driver
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK310
	Version           : :3.1
	
	=============================================================================
	
