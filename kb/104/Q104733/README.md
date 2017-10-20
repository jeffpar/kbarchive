---
layout: page
title: "Q104733: ScanDisk /CHECKONLY Mode on Third-Party Compressed Disks"
permalink: /kb/104/Q104733/
---

## Q104733: ScanDisk /CHECKONLY Mode on Third-Party Compressed Disks

{% raw %}

	Article: Q104733
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If ScanDisk detects Stacker, XtraDrive, SuperStor, or DoubleDisk drivers in
	memory, it runs in CHECKONLY mode.
	
	MORE INFORMATION
	================
	
	If you run ScanDisk on a system using third-party disk-compression software
	without specifying any command-line parameters (or with command-line parameters
	that are incompatible with /CHECKONLY), ScanDisk displays the following message
	
	  You cannot use the /<SWITCH_NAME> while <COMPR_SW_NAME> is
	  running.
	  To check for disk problems without fixing them, type SCANDISK /CHECKONLY at
	  the command prompt.
	
	where <SWITCH_NAME> is AUTOFIX or CUSTOM and <COMPR_SW_NAME> is
	Stacker, SuperStor, DoubleDisk, or XtraDrive.
	
	Erroneous Error Message with Third-Party Device Drivers
	-------------------------------------------------------
	
	The following third-party device drivers cause ScanDisk to erroneously report
	that third-party disk-compression software is running:
	
	  Device Driver      Third-Party Product
	  -------------      -------------------
	  BRIDGE.DRV         SYSGEN external floppy drive
	  DISCTEC.SYS        DISCTEC removable hard drive
	
	
	If you run ScanDisk on a system using third-party disk-compression software and
	use command-line parameters that are compatible with /CHECKONLY, no message is
	displayed.
	
	To repair problems with your third-party disk-compression software, use the disk
	repair utility provided with the product.
	
	ScanDisk also refuses to scan uncompressed disks on systems using third- party
	disk-compression software because it detects the disk-compression software by
	scanning memory, rather than attempting to detect which drive is compressed.
	
	
	Additional query words: 6.22 6.20 addstor adstor
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
