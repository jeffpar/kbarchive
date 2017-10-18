---
layout: page
title: "Q136273: System Hangs When CD-ROM Is Not in Drive"
permalink: kb/136/Q136273/
---

## Q136273: System Hangs When CD-ROM Is Not in Drive

	Article: Q136273
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
	
	When you are using a computer with a SCSI host adapter and an early version of
	the NEC 4X CD-ROM drive, Windows 95 may stop responding (hang) approximately two
	minutes after you remove a CD-ROM from the drive.
	
	CAUSE
	=====
	
	Early versions of the NEC 4X CD-ROM drive have a problem with synchronous data
	transfer on some SCSI host adapters. This problem may also occur with some NEC
	3Xi and 3Xe CD-ROM drives.
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps:
	
	1. In Control Panel, double-click the System icon.
	
	2. On the Device Manager tab, double-click the CD-ROM branch.
	
	3. Double-click the CD-ROM drive you want to reconfigure.
	
	4. On the Settings tab, click the Auto Insert Notification and Sync Data
	  Transfer check boxes to clear them.
	
	5. Click OK until you return to Control Panel.
	
	6. If the problem persists, try disabling synchronous data transfer on the SCSI
	  host adapter.
	
	  For information about disabling synchronous data transfer on the SCSI host
	  adapter, please consult the documentation included with the adapter.
	
	7. If these steps do not succeed in resolving the problem, you may want to
	  contact NEC to inquire about obtaining a firmware upgrade for the drive.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
