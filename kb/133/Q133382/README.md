---
layout: page
title: "Q133382: Unable to Detect Storage Devices on Compaq Proliant 4500"
permalink: /kb/133/Q133382/
---

## Q133382: Unable to Detect Storage Devices on Compaq Proliant 4500

	Article: Q133382
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT 3.51 on a Compaq Proliant 4500 series computer, the
	following error message appears:
	
	  Setup is unable to locate the hard drive partition prepared by the MS-DOS
	  portion of Setup.
	
	CAUSE
	=====
	
	This problem occurs when you allow Windows NT 3.51 Setup to detect the mass
	storage device of the computer. Windows NT 3.51 does not include drivers for
	Compaq 32-bit SCSI-2 controllers.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Obtain Compaq Support Software Diskette (SSD) 1.15a (SP1209.EXE). SP1209.EXE
	  is available for download on the Compaq bulletin board system (BBS) at (713)
	  378-1418 or the CPQFORUM on CompuServe.
	
	2. Run Windows NT 3.51 Setup and choose Customer Setup.
	
	3. Skip the detection of mass storage devices and specify additional devices.
	
	4. Select "Other (Requires disk provided by hardware manufacturer)" and specify
	  the location of the Compaq SSD 1.15a disk.
	
	5. Select "Compaq 32-Bit SCSI-2 Controllers" for the onboard SCSI controller.
	
	6. Continue with Setup.
	
	The Compaq products discussed here are manufactured by Compaq Computer Corp., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: ssd prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
