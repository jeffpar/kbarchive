---
layout: page
title: "Q96940: MS-DOS 6 Upgrade Setup Err Msg: Setup Cannot Find the..."
permalink: kb/096/Q96940/
---

## Q96940: MS-DOS 6 Upgrade Setup Err Msg: Setup Cannot Find the...

	Article: Q96940
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your Artisoft LANtastic network server software is running when you try to
	install MS-DOS 6 or later Upgrade, you receive one of the following error
	messages:
	
	  Setup cannot find a hard disk on your computer
	
	  -or-
	
	  Setup cannot identify your hard disk startup partition
	  and therefore cannot install MS-DOS on your hard disk.
	
	CAUSE
	=====
	
	Since LANtastic makes all drives look like network drives, the partition check
	shows a DOS partition. However, the local drive check return no local drives.
	Setup then displays the error message noted above.
	
	REFERENCES
	==========
	
	For more information on using Artisoft LANtastic with MS-DOS 6.0 and later, see
	section 6 of the MS-DOS NETWORKS.TXT file.
	
	
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
