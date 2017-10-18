---
layout: page
title: "Q69137: SCSI Support in Windows 3.0"
permalink: kb/069/Q69137/
---

## Q69137: SCSI Support in Windows 3.0

	Article: Q69137
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article contains information on SCSI device support in Microsoft
	Windows version 3.0 enhanced mode.
	
	MORE INFORMATION
	================
	
	Western Digital 7000 FASST (WD7000FASST)
	----------------------------------------
	
	The WD7000FASST has been tested with, and is directly supported by, Windows 3.0.
	This controller is also sold by NCR as original equipment in some 386 machines.
	
	Columbia Data Products has Western Digital 7000 FASST SCSI hard disk controller
	drivers that are compatible with Microsoft Windows version 3.0. The version of
	the SST driver for Windows 3.0 is 3.36. This driver is available from Columbia
	Data Products for a fee, and is included with some Western Digital controllers.
	
	This package includes the drivers SSTBIO.SYS and SSTDRIVE.SYS. For more
	information, contact Columbia Data Products.
	
	Adaptec 1542A, 1542B, or 1640
	-----------------------------
	
	These Adaptec SCSI host adapters have been informally tested under Windows 3.0
	and have been found to function correctly.
	
	To work with Windows 3.0, these devices require an optional Adaptec software
	package known as the Adaptec ASPI MS-DOS Manager. This package contains the
	drivers ASPI4DOS.SYS and ASPIDISK.SYS, along with an installation program. The
	package should be version 2.1 or later for proper operation under Windows 3.0
	enhanced mode.
	
	Future Domain SCSI
	------------------
	
	Microsoft has not tested Future Domain host adapters with Windows 3.0. For
	compatibility information, contact Future Domain technical support.
	
	According to Future Domain, the company has tested its adapters with Windows 3.0.
	Future Domain supplies a device driver that should be placed after SmartDrive in
	the CONFIG.SYS for proper operation. The device driver is LDRIVE.SYS for MS-DOS
	versions 3.3 or earlier, and HDDEVICE.SYS for MS-DOS versions 4.0 or later.
	
	Seagate ST01 or ST02
	--------------------
	
	Microsoft has not tested Seagate SCSI host adapters with Windows 3.0. For
	compatibility information, contact Seagate technical support.
	
	Distributed Processing Technology (DPT) PM2001, PM3011, PM2012A
	---------------------------------------------------------------
	
	DPT SCSI host adapters have been informally tested under Windows 3.0 and have
	been found to function correctly if used with DPT's SmartDriver for MS-DOS
	device driver (SKYDRV1.SYS) version 1.34 or later. For more information, contact
	DPT technical support.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30 KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
