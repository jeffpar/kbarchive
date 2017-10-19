---
layout: page
title: "Q78413: Procom SCSI Drives Require Updated Driver with MS-DOS"
permalink: /kb/078/Q78413/
---

## Q78413: Procom SCSI Drives Require Updated Driver with MS-DOS

	Article: Q78413
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Procom Technology's SCSI hard and floppy drives (internal and external) require
	the device driver from version 2.14 of SCSIDISK.EXE, to work with the MS-DOS 5
	and later. To use these drives with MS-DOS 6 or later, you need to obtain the
	device driver from version 2.52 of SCSIDISK.EXE.
	
	MORE INFORMATION
	================
	
	Procom states that all models of their SCSI hard and floppy drives, internal and
	external, require version 2.14 or later of SCSIDISK.EXE when used with MS-DOS 5
	and version 2.52 or later when used with MS-DOS 6 or later.
	
	SCSIDISK.EXE can be obtained from Procom Technology technical support or from
	their bulletin board service (BBS).
	
	MS-DOS 5.0
	----------
	
	The file number (name) on the BBS for version 2.14 of SCSIDISK.EXE is
	SCSI214.EXE. This is a self-extracting file. To decompress the file after
	downloading it, type the following at the MS-DOS command prompt:
	
	  " SCSI214" (without the quotation marks)
	
	The corresponding device driver is called SCSIDISK.SYS, and can be used for all
	of Procom's floppy and hard drives. For use with MS-DOS 5, the SCSIDISK.SYS
	driver should be dated 7/14/91 or later, with a size of 10143 bytes and a time
	stamp of 2:14.
	
	MS-DOS 6.0
	----------
	
	To use Procom's SCSI drivers with MS-DOS 6, Procomm recommends that you obtain
	version 2.52 of SCSIDISK.EXE. This version is also available on Procomm's BBS.
	
	For more information, contact Procomm Technology.
	
	The Procom products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 SCSIDISK.SYS 5/4/93 14544 bytes 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
