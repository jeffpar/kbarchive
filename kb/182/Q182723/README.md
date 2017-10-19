---
layout: page
title: "Q182723: Problems Adding New Hardware in Windows 95"
permalink: /kb/182/Q182723/
---

## Q182723: Problems Adding New Hardware in Windows 95

	Article: Q182723
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg osr2 win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install new hardware, you may experience the following
	behavior:
	
	Windows 95 (Retail Release)
	---------------------------
	
	You may receive the following error message
	
	  Windows was unable to add this <device>.
	
	where <device> is the type of hardware that you are trying to install.
	
	Windows 95 OEM Service Release 2 (OSR2)
	---------------------------------------
	
	Windows detects the hardware, but lists it as an unknown device, and then
	requests the disk supplied by the hardware manufacturer.
	
	CAUSE
	=====
	
	This behavior can occur if the file or files in the Windows\Inf folder that
	contain the information about your hardware are missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, extract new copies of the default Windows 95 .inf files.
	To do so, use the following steps:
	
	1. Click Start, click Shut Down, click Restart in MS-DOS Mode, and then click
	  OK.
	
	2. If you installed Windows 95 from CD-ROM, verify that you have access to your
	  CD-ROM drive in MS-DOS mode by typing the following line and then pressing
	  ENTER
	
	  " <CD-ROM drive letter>: " (without the quotation marks)
	
	  where <CD-ROM drive letter> is the drive letter assigned to your
	  CD-ROM.
	
	  NOTE: If you are unable to access your CD-ROM drive from MS-DOS mode, please
	  refer to the following article in the Microsoft Knowledge Base:
	
	  Q135174 Cannot Access CD-ROM Drive from MS-DOS Mode or Command Prompt
	
	3. At the command prompt, type the following commands, pressing ENTER after each
	  command:
	
	  " c:
	  cd windows\inf
	  ren *.inf *.old " (without the quotation marks)
	
	4. Extract new copies of the default Windows 95 .inf files to the Windows\Inf
	  folder. To do so, use the appropriate method:
	
	  Windows 95 Installed from CD-ROM
	  --------------------------------
	
	  a. Insert your original Windows 95 CD-ROM in to your CD-ROM drive.
	
	  b. At the command prompt, type the following commands, pressing ENTER after
	     each command
	
	  " extract /a <CD-ROM drive>\win95\precopy1.cab *.inf
	  extract /a <CD-ROM drive>\win95\win95_02.cab *.inf " (without the
	  quotation marks)
	
	     where <CD-ROM drive> is the drive letter assigned to your CD-ROM
	     drive.
	
	  Windows 95 Installed from Floppy Disks
	  --------------------------------------
	
	  a. Insert disk 1 of your original Windows disks in to your floppy disk drive.
	
	  b. At the command prompt, type the following commands, pressing ENTER after
	     each command
	
	  " extract /a <floppy Drive>\win95\precopy1.cab *.inf
	  extract /a <floppy Drive>\win95\win95_02.cab *.inf " (without the
	  quotation marks)
	
	     where <floppy Drive> is the drive letter assigned to your floppy
	     drive.
	
	5. Restart your computer normally.
	
	
	======================================================================
	Keywords          : kberrmsg osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
