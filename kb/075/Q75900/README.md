---
layout: page
title: "Q75900: Second Hard Disk Inaccessible Using SMARTDrive in Enhanced"
permalink: /kb/075/Q75900/
---

## Q75900: Second Hard Disk Inaccessible Using SMARTDrive in Enhanced

{% raw %}

	Article: Q75900
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A second hard disk cannot be accessed in enhanced mode when you use SMARTDRV.SYS
	version 3.03. Symptoms of this problem include
	
	  sector not found
	
	and
	
	  Violated System Integrity
	
	errors when you attempt to use non-Windows-based applications.
	
	WORKAROUND
	==========
	
	You may need to add the /b- switch to SMARTDRV.SYS to access a second hard drive
	consistently.
	
	To load SMARTDRV.SYS correctly, rewrite the device line in the CONFIG.SYS file as
	follows:
	
	  DEVICE=C:\DOS\SMARTDRV.SYS 1792 256 /b-
	
	MORE INFORMATION
	================
	
	The /b- switch turns off the double buffering feature. It is used primarily for
	SCSI hard drives, although it is sometimes necessary when a system includes a
	SCSI CD-ROM drive. This switch may also be needed even if the CD- ROM drive does
	not contain a disk.
	
	Additional query words: 3.00 win30 3.00a cdrom
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
