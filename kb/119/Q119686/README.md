---
layout: page
title: "Q119686: DRIVER.SYS Message: Please Insert a Diskette for Drive X:..."
permalink: kb/119/Q119686/
---

## Q119686: DRIVER.SYS Message: Please Insert a Diskette for Drive X:...

	Article: Q119686
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following message occurs when you try to create a compressed drive using
	DoubleSpace or DriveSpace
	
	  Please insert a diskette for drive <x>: and press any key when ready
	
	where <x> is a second logical drive associated with a single physical
	floppy disk drive.
	
	CAUSE
	=====
	
	This message is generated when DoubleSpace or DriveSpace examines the system if
	DRIVER.SYS is loading in the CONFIG.SYS file. DRIVER.SYS is a device driver that
	can be used to create a logical drive that refers to a physical floppy disk
	drive.
	
	When an attempt is made to access the drive through this second logical drive
	letter, DRIVER.SYS prompts you to insert a disk and press any key before
	attempting to read the drive.
	
	WORKAROUND
	==========
	
	To work around this problem, start MS-DOS interactively by pressing the F8 key
	as soon as the text "Starting MS-DOS..." appears. When prompted to load
	DRIVER.SYS, choose "N" for No. You can then safely restart DoubleSpace or
	DriveSpace.
	
	For more information about using the DRIVER.SYS device driver, type "help
	driver.sys" (without the quotation marks) at an MS-DOS command prompt, or query
	on the following words in the Microsoft Knowledge Base:
	
	  driver.sys and floppy and disk and drive
	
	Additional query words: 6.00 6.20 dblspace drvspace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
