---
layout: page
title: "Q80890: Drives Inaccessible After Upgrading from Compaq DOS"
permalink: /kb/080/Q80890/
---

## Q80890: Drives Inaccessible After Upgrading from Compaq DOS

{% raw %}

	Article: Q80890
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
	
	Compaq technical support has confirmed that extended drives created with
	FDISK.EXE and ENHDISK.SYS under Compaq's original equipment manufacturer (OEM)
	version of MS-DOS 3.2 or earlier may be inaccessible after upgrading to MS-DOS
	5.0 or later.
	
	MORE INFORMATION
	================
	
	The ENHDISK.SYS device driver made it possible to access multiple MS-DOS
	partitions created by earlier versions of the MS-DOS FDISK utility on fixed disk
	drives. ENHDISK.SYS was used under Compaq MS-DOS 3.2 and earlier to provide
	partitioning support for hard disks greater than 32 MB.
	
	ENHDISK.SYS had to be the first device driver installed in the CONFIG.SYS file.
	This was done to ensure consistency for drive assignments through all the
	utilities that support partitioned drives created by earlier versions of the
	FDISK utility.
	
	Compaq technical support recommends backing up the hard drive prior to running
	MS-DOS 5.0 or later upgrade. If the upgrade has already been performed, and the
	extended drives are inaccessible, use the MS-DOS UNINSTALL disk to restore the
	previous version of MS-DOS.
	
	Take the following steps with the old version of MS-DOS installed:
	
	1. Back up all necessary data on the hard drive.
	
	2. Repartition the hard drive with the MS-DOS 5.0 FDISK command.
	
	3. Format all drives on the hard disk. For example:
	
	  format c: /s
	
	4. Restore necessary data.
	
	For more information, query on the following words here in the Microsoft
	Knowledge Base:
	
	  "combine" (without the quotation marks) and "fdisk ENHDISK.SYS" (without the
	  quotation marks)
	
	For further information contact Compaq technical support.
	
	The Compaq product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 ENHDISK 3.1 3.00 5.0a 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
