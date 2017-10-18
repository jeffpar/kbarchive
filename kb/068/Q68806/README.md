---
layout: page
title: "Q68806: Windows Err Msg: Problem With Disk Drive C (with Bus Mouse)"
permalink: kb/068/Q68806/
---

## Q68806: Windows Err Msg: Problem With Disk Drive C (with Bus Mouse)

	Article: Q68806
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Windows version 3.0 on a system with a bus mouse, you
	may get the following message:
	
	  Problem with disk drive C: Please check that the diskette is properly
	  inserted in the disk drive and the door is closed.
	
	CAUSE
	=====
	
	A hardware interrupt conflict with the hard disk controller and a bus mouse set
	to IRQ2 can cause this message. Many AT and 386 computers use interrupt 2 (IRQ2)
	to communicate with the hard disk drive. If your mouse hardware is also on this
	interrupt, you may have interrupt conflicts. Some examples of mouse hardware
	that can cause interrupt conflicts are as follows:
	
	- A bus mouse card set for IRQ2
	
	- A built-in mouse port on the motherboard that is configured for IRQ2
	
	- A video card with a built-in mouse port that is configured for IRQ2 such as
	  the ATI VIP VGA
	
	RESOLUTION
	==========
	
	The solution is to reassign the mouse to an unused interrupt. Do this by
	resetting the jumpers on the bus card, or by using the software setup program
	for the mouse. The owner's manual of the hardware causing the problem should
	list the proper steps to change the IRQ.
	
	Additional query words: 3.00 3.00a win30 KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
