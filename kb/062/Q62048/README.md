---
layout: page
title: "Q62048: Reasons for MS-DOS &quot;File Allocation Table Bad&quot; Error Message"
permalink: /kb/062/Q62048/
---

## Q62048: Reasons for MS-DOS &quot;File Allocation Table Bad&quot; Error Message

{% raw %}

	Article: Q62048
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are basically six reasons why the "File Allocation Table Bad" error
	occurs. These reasons are as follows:
	
	- The disk is not formatted, or incorrectly formatted.
	
	- An operating system other than MS-DOS is on disk.
	
	- There are defective disk sectors in the file allocation table (FAT).
	
	- There are invalid cluster numbers in the FAT.
	
	- There are lost clusters on the disk.
	
	- There is cross-linking of some files on the same cluster.
	
	Using the CHKDSK /F command on the disk should repair the above problems. If it
	doesn't correct the problem (that is, the same error is returned), you may want
	to use a third-party disk recovery utility. As a final option, you may want to
	reformat the disk.
	
	Additional query words: tshoot 3.30 3.30a 4.00 4.00a 5.00 5.00a noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x
	
	=============================================================================
	

{% endraw %}
