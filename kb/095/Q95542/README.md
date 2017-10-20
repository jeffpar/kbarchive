---
layout: page
title: "Q95542: Duplicate FONT002.IN_ on 5.25-Inch Setup Disks for Font Pack 2"
permalink: /kb/095/Q95542/
---

## Q95542: Duplicate FONT002.IN_ on 5.25-Inch Setup Disks for Font Pack 2

{% raw %}

	Article: Q95542
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The 5.25-inch size disks for the TrueType Font Pack 2 contain a duplicate file
	called FONT002.IN_. This file is located on both Disk 1 and Disk 2. This
	duplication causes problems if both disks are copied to the same directory.
	
	MORE INFORMATION
	================
	
	- The file FONT002.IN_ located on Disk 1 has a compressed size of 3745
	  kilobytes (K).
	
	- The file FONT002.IN_ located on Disk 2 has a compressed size of 3709K.
	
	When expanded, these files are identical in size and content and only serve as
	source media descriptors. If one of the FONT002.IN_ files is damaged, if both
	files are not present, or if you run Setup from a directory containing the
	contents of all three disks, the following error is generated during Setup
	
	  Could not open the file named: <X>:\DISK1\PSCRIPT.DR_
	
	where <X> is the drive from which you are installing the Font Pack 2.
	
	If all disks are copied to one subdirectory, the FONT002.IN_ file from Disk 1 is
	overwritten by the FONT002.IN_ file from Disk 2, which results in the above
	error.
	
	To work around this problem, either run Setup from the original disks, or copy
	each disk to separate directories and run Setup from the Disk 1 directory,
	specifying the Disk 2 and 3 directories when you are prompted for the remaining
	disks.
	
	Additional query words: 3.10 3.11 pscript.drv driver
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
