---
layout: page
title: "Q59654: ALT+TAB Six-Second Delay in Real/Standard Modes"
permalink: /kb/059/Q59654/
---

## Q59654: ALT+TAB Six-Second Delay in Real/Standard Modes

	Article: Q59654
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using a PS/2 Mouse Port style mouse, you may experience a five- to
	six-second delay switching between MS-DOS applications in real or standard mode
	in Microsoft Windows 3.0.
	
	NOTE: This occurs not only on genuine PS/2 machines, but on any machine with a
	PS/2-style mouse port, such as the COMPAQ 386S and 20e.
	
	CAUSE
	=====
	
	This delay is caused by the presence of an MS-DOS mouse driver. The MS-DOS mouse
	driver reinitializes the mouse port with each ALT+TAB, thus causing the delay.
	
	WORKAROUND
	==========
	
	If you can do without a mouse driver for your MS-DOS applications, this increase
	task switching considerably on this type of machine.
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30 3rdparty KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
