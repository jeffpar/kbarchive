---
layout: page
title: "Q38113: CHKDSK and File Allocation Adjustments"
permalink: /kb/038/Q38113/
---

## Q38113: CHKDSK and File Allocation Adjustments

{% raw %}

	Article: Q38113
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CHKDSK uses the File Allocation Table (FAT) to determine the condition of both
	of the following:
	
	- Disks as a whole
	
	- Files
	
	MORE INFORMATION
	================
	
	The size of every file is stored in the file's directory entry. The chain size
	of any file is defined to be the number of clusters on the disk that it occupies
	multiplied by the number of bytes in each cluster. CHKDSK compares the two
	reported sizes to see if the directory entry and the FAT are comparable. CHKDSK
	displays the error message "Allocation error, size adjusted" if the sizes are
	incorrect.
	
	The error is displayed when either of the following conditions is met:
	
	- The file size located in the directory entry is larger than the chain size.
	
	-or-
	
	- The chain size is more than one cluster size larger than the reported file
	  size.
	
	To adjust the size of the file, CHKDSK changes the directory entry to match the
	chain size.
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
