---
layout: page
title: "Q75193: Possible CHKDSK Errors with Coherent Partition and MS-DOS"
permalink: kb/075/Q75193/
---

## Q75193: Possible CHKDSK Errors with Coherent Partition and MS-DOS

	Article: Q75193
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
	
	CHKDSK returns an invalid value for total disk space if the Coherent Setup
	utility is used to "shrink" a logical DOS partition.
	
	MORE INFORMATION
	================
	
	Coherent is a UNIX operating system clone. During the installation of Coherent,
	the Setup program can shrink the logical DOS partition and create a non-DOS
	partition for the Coherent operating system. After this has been done, CHKDSK
	will return the size of the extended DOS partition as the sum of the extended
	DOS partition and the non-DOS (Coherent) partition.
	
	FDISK will return the correct partition sizes when "Display Partition
	Information" is selected.
	
	The problem occurs because Coherent's Setup program only modifies the master boot
	record (MBR) entries and not the other linked partition tables or the modified
	logical drive boot sectors.
	
	Coherent is produced by:
	
	  Mark Williams Company
	  Northbrook, IL
	  (708) 291-6700
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
