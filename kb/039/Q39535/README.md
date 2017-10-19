---
layout: page
title: "Q39535: Performance Degradation when Accessing Large Subdirectories"
permalink: /kb/039/Q39535/
---

## Q39535: Performance Degradation when Accessing Large Subdirectories

	Article: Q39535
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may notice a performance slowdown for MS-DOS when creating many files in a
	subdirectory. MS-DOS is much slower at accessing a subdirectory that contains
	many files or deleted files than at accessing a new subdirectory (that is, a
	subdirectory containing no deleted files).
	
	This slowdown occurs because MS-DOS directories do not get smaller when you
	delete a file. MS-DOS inserts a "no file here" mark for each deleted file in a
	directory. There are two different "No file here" marks in the first bytes of
	directories:
	
	  Value   Description
	  -----------------------------------------------------------------
	  E5H     No file at this location
	  05H     No file at this location
	  00H     No file at this location and no files after this location
	
	Whenever you create a file, MS-DOS searches to the end of the directory to see if
	a file with that name already exists. Even if files have been deleted from the
	directory, MS-DOS must still check for the "No file here" entry for each deleted
	file.
	
	MORE INFORMATION
	================
	
	The following is an example that demonstrates the reason for the performance
	slowdown:
	
	1. Create a directory DIR. Initially, this new directory looks like the
	  following:
	
	     .
	     ..
	     00H
	
	2. Create the file FILE1. MS-DOS has to look at two entries to determine that
	  there is no file by that name. The directory now looks like the following:
	
	     .
	     ..
	     FILE1
	     00H
	
	3. Create the file FILE2. MS-DOS now has to look at three entries to determine
	  that there is no file by that name. The directory now looks like the
	  following:
	
	     .
	     ..
	     FILE1
	     FILE2
	     00H
	
	4. Create the file FILE3. MS-DOS now has to look at four entries to determine
	  that there is no file by that name. The directory now looks like the
	  following:
	
	     .
	     ..
	     FILE1
	     FILE2
	     FILE3
	     00H
	
	5. Delete FILE*. The directory now looks like the following:
	
	     .
	     ..
	     E5
	     E5
	     E5
	     00H
	
	6. Create the file FILE1. MS-DOS still has to look at four entries to determine
	  that there is no file by that name. (Note that MS-DOS must look at the empty
	  entries thus performance does not improve after the deletion.) The directory
	  now looks like the following:
	
	     .
	     ..
	     FILE1
	     E5H
	     E5H
	     00H
	
	7. Create the file FILE2. Again, MS-DOS has to look at four entries to determine
	  that there is no file by that name. The directory now looks like the
	  following:
	
	     .
	     ..
	     FILE1
	     FILE2
	     E5H
	     00H
	
	8. Create the file FILE3. MS-DOS has to look at four entries to determine that
	  there is no file by that name. The directory now looks like the following:
	
	     .
	     ..
	     FILE1
	     FILE2
	     FILE3
	     00H
	
	The performance decreases more when deleted entries exist in a subdirectory;
	performance can be even slower, depending on the size and type of the disk and
	the size of the MS-DOS buffer cache (the BUFFERS command in the file
	CONFIG.SYS). Disk access is very expensive in terms of performance, and
	depending on the interaction with the MS-DOS buffer cache LRU (Least Recently
	Used) management, you may have to do more disk accesses.
	
	There are third-party utilities that edit directories and eliminate unused
	directory entries, improving the performance of MS-DOS.
	
	Additional query words: 6.22 2.x 3.x 4.00 4.01 5.00 5.00a 6.00 6.20 grows
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
