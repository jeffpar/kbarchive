---
layout: page
title: "Q140721: Error Message: An Exception 00 Has Occurred..."
permalink: /kb/140/Q140721/
---

## Q140721: Error Message: An Exception 00 Has Occurred...

	Article: Q140721
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 95, you may receive the following error message on a blue
	screen:
	
	  An exception 00 has occurred at 0028:<xxxxxxxx> in VxD ESDI_506(01) +
	  00000476. This was called from 0028:<xxxxxxxx> in VxD VPICD(01) +
	  <xxxx?>.
	
	CAUSE
	=====
	
	Exception 00 is the divide overflow exception. In this situation, the hard disk
	controller is reporting a disk geometry of zero sectors per track. This causes
	the driver to divide by zero when attempting to communicate with the device.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. Start your computer to a command prompt. To do so, restart your computer,
	  press the F8 key when you see the "Starting Windows 95" message, and then
	  choose Command Prompt Only from the Startup menu.
	
	2. Type the following commands. Press ENTER after each command:
	
	  " cd\windows\system\iosubsys
	
	  ren esdi_506.pdr esdi_506.old " (without the quotation marks)
	
	3. Restart your computer normally.
	
	Renaming the Esdi_506.pdr file causes Windows 95 to use MS-DOS Compatibility mode
	for the hard disk, which can result in less than optimal performance.
	
	MORE INFORMATION
	================
	
	Windows 95 obtains disk geometry information from the Basic Input/Output System
	(BIOS) by issuing software interrupt 13h subfunction 08h. The BIOS is supposed
	to return the number of sectors per track in the low 5 bits of the CL register,
	but it is returning zero instead.
	
	Contact your BIOS manufacturer to see if an updated version of the BIOS is
	available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
