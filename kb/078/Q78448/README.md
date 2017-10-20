---
layout: page
title: "Q78448: MS-DOS 5, 6, and 6.2 Upgrades Provide DMDRVR.BIN &amp; SSTOR.SYS"
permalink: /kb/078/Q78448/
---

## Q78448: MS-DOS 5, 6, and 6.2 Upgrades Provide DMDRVR.BIN &amp; SSTOR.SYS

{% raw %}

	Article: Q78448
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SUMMARY
	=======
	
	Version 5.0 of DMDRVR.BIN and version 6.3.1 of SSTOR.SYS are provided with
	Microsoft MS-DOS 5, 6, and 6.2 Upgrades.
	
	NOTE: This version of SSTOR.SYS is NOT compatible with DoubleSpace since it was
	written before DoubleSpace was released with MS-DOS 6.0. SSTOR.SYS version 6.5
	is compatible with DoubleSpace and is available at extra cost from Storage
	Dimensions. To order this driver, contact their sales department at (408)
	954-0710, extension 331.
	
	MORE INFORMATION
	================
	
	The MS-DOS ability to access hard drives is based on the standard AT ROM BIOS
	interface maximum of 1024 cylinders. DMDRVR.BIN and SSTOR.SYS have the ability
	to work around the 1024 cylinder limit. The drivers are provided with the MS-DOS
	5 and later Upgrade packages as a convenience, and are designed to replace
	existing drivers.
	
	If you use Ontrack Disk Manager, instructions on how to update the driver can be
	found in section 2.4 of the MS-DOS 5.0 README.TXT file. MS-DOS 5.0 is compatible
	with DMDRVR.BIN versions 4.xx. According to Ontrack Computer Systems, the
	version 5.0 driver provided with MS-DOS 5.0 is derived from the original
	DMDRVR.BIN version 4.2.
	
	If you use HARDRIVE.SYS, instructions on how to update the driver to SSTOR.SYS
	can be found in section 2.5 of the MS-DOS 5.0 README.TXT file. For MS-DOS 6 and
	6.2 instructions, refer to "Setup displays the 'Incompatible hard disk or device
	driver.' screen" on page 188 of the "Microsoft MS-DOS User's Guide" for versions
	6.x.
	
	Please note the following:
	
	- If you use these drivers, your hard drive does not necessarily have to have
	  more than 1024 cylinders.
	
	- DMDRVR.BIN and SSTOR.SYS serve the same purpose. DO NOT LOAD both of the
	  drivers simultaneously. If you have an earlier version of DMDRVR.BIN, expand
	  the new DMDRVR.BIN to the same location; if you have HARDRIVE.SYS, expand
	  SSTOR.SYS to the same location.
	
	- It is recommended that you back up the old version of the drivers to a floppy
	  disk before replacing them.
	
	- DMDRVR.BIN and SSTOR.SYS are provided only with the MS-DOS 5, 6, and 6.2
	  Upgrades, not with the OEM (original equipment manufacturer) versions.
	
	For more information on the MS-DOS cylinder limitation, query on the following
	words:
	
	  "1024 cylinder limit workarounds" (without the quotation marks)
	
	DMDRVR.BIN/Disk Manager is a product of Ontrack Computer Systems. SSTOR.SYS is a
	product of Storage Dimensions, Inc.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 4.20 5.00 3rdparty 6.00 6.20 6.21. 6.22 dblspace drive space double
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
