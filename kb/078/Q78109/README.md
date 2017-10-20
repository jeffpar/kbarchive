---
layout: page
title: "Q78109: MS-DOS Setup with LOCKIT Utility, Version 1.5"
permalink: /kb/078/Q78109/
---

## Q78109: MS-DOS Setup with LOCKIT Utility, Version 1.5

{% raw %}

	Article: Q78109
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	According to Security Microsystems Consultants, upgrading to MS-DOS version 5.0
	or later with LOCKIT Utility version 1.5 installed may cause the MS-DOS Setup
	program to default to the "Welcome to SETUP" message screen that prompts for the
	setup to floppy disks routine.
	
	CAUSE
	=====
	
	The LOCKIT Utility is a password protection product of Security Microsystems
	Consultants.
	
	During installation the LOCKIT Utility, the partition table and boot sector of
	the hard disk are modified, and the following line is added to the CONFIG.SYS
	file:
	
	  " device=cleandsk.drv " (without the quotation marks)
	
	As a result, SETUP is unable to recognize the hard disk and defaults to the setup
	to floppy disks routine.
	
	WORKAROUND
	==========
	
	LOCKIT Utility version 1.5 must be deleted before you upgrade to MS-DOS 5.0 or
	later, and LOCKIT version 2.1 or later should be installed after the upgrade.
	
	Security Microsystems Consultants recommends the following steps when upgrading
	to MS-DOS with LOCKIT Utility version 1.5:
	
	1. Uninstall LOCKIT Utility version 1.5 by following guidelines outlined in
	  LOCKIT documentation. (Do NOT disable the DEVICE=CLEANDSK.DRV line in the
	  CONFIG.SYS file or rename the CONFIG.SYS to disable this utility. The hard
	  disk is completely inaccessible without the DEVICE=CLEANDSK.DRV driver
	  enabled.)
	
	2. Install the MS-DOS Upgrade.
	
	3. Re-install LOCKIT Utility version 2.1 or later to use with MS-DOS version 5.0
	  or later, or upgrade to version 3.0 for use with Windows 3.0 or 3.1.
	
	For more information, contact Security Microsystems Consultants.
	
	The LOCKIT product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.22 3.00 5.00 3rdparty 6.00 6.20 5.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
