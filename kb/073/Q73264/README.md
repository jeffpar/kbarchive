---
layout: page
title: "Q73264: Setup Unable to Upgrade Disk Manager Partitions &gt; 512 MB"
permalink: /kb/073/Q73264/
---

## Q73264: Setup Unable to Upgrade Disk Manager Partitions &gt; 512 MB

	Article: Q73264
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are running MS-DOS versions 3.x with an Ontrack Disk Manager partition
	that is larger than 512 MB, the Microsoft MS-DOS 5 Upgrade Setup program cannot
	convert the partition to an MS-DOS 5.0-compatible partition. This occurs because
	the Disk Manager partition sector sizes are not a power of 2.
	
	If you replace your old Disk Manager DMDRVR.BIN driver with the DMDRVR.BIN
	shipped with the MS-DOS 5.0 upgrade and use the SETUP /U command, MS-DOS 5.0
	will be installed. Upon booting the machine after upgrading, however, Disk
	Manager will display the following message:
	
	  Partition at.... = *NOT CONVERTED*, Invalid Sector Size
	
	You will not be able to access the unconverted partition.
	
	WORKAROUND
	==========
	
	To work around this problem, uninstall to MS-DOS 3.x. Even though you replaced
	the Disk Manager device drivers, they will work with MS-DOS 3.x and the
	partition will be accessible. Contact Ontrack to get an upgraded version of Disk
	Manager and instructions to make that partition compatible with MS-DOS 5.0.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
