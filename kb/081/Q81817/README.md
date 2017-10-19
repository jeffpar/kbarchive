---
layout: page
title: "Q81817: SuperStor Changes RAMDrive Letter"
permalink: /kb/081/Q81817/
---

## Q81817: SuperStor Changes RAMDrive Letter

	Article: Q81817
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When AddStor's SuperStor program is installed and the MS-DOS device driver
	RAMDRIVE.SYS or DRIVER.SYS is loaded, the reported drive letter from
	RAMDRIVE.SYS is off by one drive letter.
	
	CAUSE
	=====
	
	SuperStor loads a device driver called SSTORDRV.SYS that uses the next available
	drive letter for its own use. When RAMDRIVE.SYS is loaded after SuperStor is
	loaded, RAMDRIVE.SYS reports that it is set up as drive Z, when it is really
	drive Y.
	
	For example, if your system has one physical hard drive (drive C) when SuperStor
	loads, SuperStor uses drive D. When RAMDRIVE.SYS loads, it uses drive letter E.
	However, RAMDRIVE.SYS reports that it is set up as drive F, even though it is
	really drive E.
	
	Add Stor is aware of this problem. There are no adverse effects from the missing
	drive letter, other than confusion it may cause you.
	
	WORKAROUND
	==========
	
	To work around this problem, load RAMDRIVE.SYS before the SuperStor driver
	(SSTORDRV.SYS).
	
	If you load RAMDRIVE.SYS before the SSTORDRV.SYS driver, the SuperStor drive
	letter is then off by one rather than RAMDrive. But because you don't need to
	access the SuperStor drive, it should pose no problems.
	
	MORE INFORMATION
	================
	
	SuperStor is a disk storage maximizer similar to Stacker.
	
	Additional query words: 5.00 5.00a 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a
	
	=============================================================================
	
