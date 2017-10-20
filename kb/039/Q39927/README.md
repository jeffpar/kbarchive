---
layout: page
title: "Q39927: MS-DOS: Directory and Subdirectory Limitations"
permalink: /kb/039/Q39927/
---

## Q39927: MS-DOS: Directory and Subdirectory Limitations

{% raw %}

	Article: Q39927
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22; WINDOWS:95
	Operating System(s): 
	Keyword(s): msdos win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In MS-DOS, hard disk and floppy disk root directories are limited in size,
	depending on the media type involved. However, subdirectories can contain as
	many files as disk space allows.
	
	The subdirectories are not fixed in size and can allocate new data clusters to
	hold additional directory entries. Thus, subdirectories can grow dynamically as
	long as there are data clusters available to hold new file and subdirectory
	entries. However, the root directory can hold only a certain number of
	subdirectory entries because it is fixed in size.
	
	MORE INFORMATION
	================
	
	The following table shows the number of root directory entries for common floppy
	and hard disk types:
	
	  Single-sided 5.25-inch 180K floppy disks: 64
	  Double-sided 5.25-inch 320K floppy disks: 64
	  Double-sided 5.25-inch 360K floppy disks: 112
	  Double-sided 3.5-inch 720K floppy disks: 112
	  Double-sided 5.25-inch 1.2-megabyte floppy disks: 224
	  Double-sided 3.5-inch 1.44-megabyte floppy disks: 224
	  Hard disks (12- and 16-bit FATs): 512
	  Iomega Zip disks (100 MB): 260
	
	MS-DOS version 3.3 added the following:
	
	  Double-sided 3.5-inch 1.44-megabyte floppy disks
	
	MS-DOS version 5.0 added the following:
	
	  Double-sided 3.5-inch 2.88-megabyte floppy disks: 240
	
	Windows 95 added the following:
	
	  Long filename support. Root directory entries have the same limitations in
	  Windows 95 as they do in previous versions of MS-DOS. If long filename
	  support is enabled, then each file can use more than one directory entry
	  (depending on the length of the filename, its case, and the characters it
	  uses). Therefore, it is possible to run out of root directory entries with
	  fewer than 512 files in the root directory of a hard disk, and fewer than the
	  numbers specified above for floppy disks.
	
	  For more information about long filenames and Windows 95, query on the
	  following words in the Microsoft Knowledge Base:
	
	  windows and 95 and long and filename and root and directory
	
	REFERENCES
	==========
	
	Additional information is documented on page 27 of the "Quick Reference Guide to
	Hard Disk Management" printed by Microsoft Press.
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20 6.21 6.22 sector format limit floppies "Cannot make directory entry".
	
	======================================================================
	Keywords          : msdos win95 
	Technology        : kbWin95search kbZNotKeyword3 kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22; WINDOWS:95
	
	=============================================================================
	

{% endraw %}
