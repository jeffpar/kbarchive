---
layout: page
title: "Q99299: Seek Error on DoubleSpace Drive with LaserTwin 5.0"
permalink: kb/099/Q99299/
---

## Q99299: Seek Error on DoubleSpace Drive with LaserTwin 5.0

	Article: Q99299
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive a "seek error" when you try to access files on your
	DoubleSpace-compressed drive if Metro Software's LaserTwin version 5.0 (LT.EXE)
	is loaded in memory and DBLSPACE /CHKDSK or CHKDSK has been run on the
	compressed drive.
	
	CAUSE
	=====
	
	LaserTwin is a printing emulation package that is loaded as a
	terminate-and-stay-resident (TSR) program.
	
	If LaserTwin is loaded in memory and you run DBLSPACE /CHKDSK or CHKDSK on your
	compressed drive, the size of the DBLSPACE.00n file on the host drive is
	truncated, possibly causing complete data loss.
	
	Data on the compressed drive can be copied to another drive unless CHKDSK has
	been run on the compressed drive a second time or the machine has been restarted
	since CHKDSK was originally run on the compressed drive. Running CHKDSK a second
	time on the compressed drive may cause further corruption to the DoubleSpace
	file allocation tables and reduce the chance of recovering the data.
	
	RESOLUTION
	==========
	
	Metro Software has confirmed this problem with LaserTwin 5.0 and is making an
	update available to its customers. For more information, call Metro Software
	Technical Support.
	
	LaserTwin 5.0 is manufactured by Metro Software, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 6.00 5.00 Laser Twin LT double space dblspace 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
