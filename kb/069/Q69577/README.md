---
layout: page
title: "Q69577: FORMAT and 8-Sector Disks in MS-DOS"
permalink: /kb/069/Q69577/
---

## Q69577: FORMAT and 8-Sector Disks in MS-DOS

{% raw %}

	Article: Q69577
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you issue the MS-DOS version 4.x FORMAT command with any of the following
	parameters
	
	  /8
	  /n:8
	  /f:160
	  /f:320
	
	FORMAT neither asks for a volume label nor places a BIOS parameter block (BPB) in
	the boot sector of the resulting disk. In MS-DOS 5.0 and later, if you issue the
	FORMAT command with any of the above parameters, FORMAT places a BPB in the boot
	sector, but the disk does not have a volume label.
	
	NOTE: The switches in this list are mutually exclusive. In MS-DOS 6.0, 6.2, and
	6.21, you must include a /t parameter with the /n parameter.
	
	MORE INFORMATION
	================
	
	The MS-DOS 4.01 FORMAT utility does not place a BPB in the boot record when a
	disk is formatted to 8 sectors per track. Disks formatted with 8 sectors per
	track are considered to be destined for MS-DOS 1.0 compatibility and therefore
	do not have a defined BPB.
	
	The FORMAT utility also does not ask for a volume label when a disk is formatted
	to 8 sectors per track. Like the BPB, a volume label is not defined for DOS
	version 1.0 disks.
	
	The lack of a normal BPB can cause problems for some utility programs that try to
	read the disk directly. The information stored in a post-1.0 BPB provides
	information that helps these utilities to locate the FATs and the root
	directory. These utility programs cannot be used on 8-sector disks.
	
	Because the lack of a BPB can cause problems for some utility programs, the
	FORMAT utility in MS-DOS versions 5.0 and later places a BPB in the boot record.
	Appropriate values are included in the BPB. However, the volume label prompt is
	still skipped, and the final disk has no volume label.
	
	
	Additional query words: 6.22 4.00 4.01 4.01a 5.00 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
