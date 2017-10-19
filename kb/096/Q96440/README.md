---
layout: page
title: "Q96440: DoubleSpace Doesn't Mount After Installing RAMDrive"
permalink: /kb/096/Q96440/
---

## Q96440: DoubleSpace Doesn't Mount After Installing RAMDrive

	Article: Q96440
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	If you use DoubleSpace with a removable hard drive (such as Syquest, Bernoulli,
	or Quatam Passport XL) and later install RAMDrive, DoubleSpace may refuse to
	mount its compressed drive(s).
	
	CAUSE
	=====
	
	This problem only occurs if the RAMDrive DEVICE command in the CONFIG.SYS file
	precedes the removable hard drive DEVICE command line. Since RAMDrive may
	inadvertently use the drive letter of the removable drive, DoubleSpace may not
	find the compressed volume on the expected drive. The same behavior may occur if
	you remove RAMDrive after compressing your removable hard drive. (The drive
	letters shift and DoubleSpace does not mount.)
	
	WORKAROUND
	==========
	
	If this problem was caused by installing RAMDrive, you can simply move the
	RAMDrive DEVICE command past the removable drive's DEVICE command in the
	CONFIG.SYS file. The advantage of this workaround is that the drive letter
	assignments stay the same.
	
	If this problem occurs after removing RAMDrive, run DBLSPACE. From the Drive
	menu, choose Mount. DoubleSpace scans all your drives for compressed volumes and
	reassigns drive letters appropriately. This workaround may cause problems for
	programs configured to specific drive letters.
	
	Additional query words: 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
