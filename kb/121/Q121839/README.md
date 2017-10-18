---
layout: page
title: "Q121839: Determining Actual Disk Size: Why 1.44 MB Should Be 1.40 MB"
permalink: kb/121/Q121839/
---

## Q121839: Determining Actual Disk Size: Why 1.44 MB Should Be 1.40 MB

	Article: Q121839
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11,95
	Operating System(s): 
	Keyword(s): win31 msdos win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The 1.44-megabyte (MB) value associated with the 3.5-inch disk format does not
	represent the actual size or free space of these disks. Although its size has
	been popularly called 1.44 MB, the correct size is actually 1.40 MB.
	
	MORE INFORMATION
	================
	
	The correct size is determined by multiplying the number of tracks, sides,
	sectors per track, and 512 bytes per sector, then subtracting the bytes required
	to format the disk, and then dividing this figure by 1024. For a "1.44-MB"
	3.5-inch floppy disk, there are
	
	  80 tracks
	  18 sectors per track
	  512 bytes per sector
	  2 sides
	
	Multiplying the above gives you 1,474,560 bytes. This is the unformatted size.
	
	To determine the number of bytes formatting requires, you need to know how many
	bytes are used for the boot sector, file allocation table (FAT), and root
	directory.
	
	There is 1 sector used for the boot sector, which is 512 bytes; 18 sectors for
	the two FATs (9 sectors each), which is 9216 bytes (512 * 18 = 9216); and 14
	sectors for the root directory, which is 7168 bytes.
	
	NOTE: There are two ways to arrive at the 7168 number:
	
	  224 entries * 32 bytes per entry = 7168 bytes
	
	  -or-
	
	  512 bytes per sector (14 * 512 = 7168 bytes)
	
	Adding these figures gives you 16,896 bytes.
	
	Subtracting the amount used for formatting from the total unformatted size gives
	you 1,457,664. (1,474,560 - 16,896 = 1,457,664 bytes)
	
	Dividing the above figure by 1024 bytes generates 1440. (1,474,560 / 1024 = 1440
	KB)
	
	To convert to megabytes, divide by 1024. (1440 KB / 1024 = 1.406 MB)
	
	This formula works for 1.2-MB disks as well. The only variable is the number of
	sectors, which is 15, for the calculations with 1.2-MB disks.
	
	From the calculations shown above, we can see that the 3.5-inch disk considered
	to have 1.44 MB free disk space actually has 1.40 MB, and the 5.25-inch disk
	considered to have 1.2 MB actually has 1.17 MB.
	
	The misunderstanding comes from the incorrect calculation below:
	
	  1440 KB / 1000 = 1.44 MB
	
	The calculation should be:
	
	  1440 KB / 1024 = 1.40 MB
	
	There are 1024 bytes in a kilobyte, not 1000.
	
	Note that in Windows 95, the properties for a blank, formatted 3.5-inch 1.44-MB
	disk show that there are 1.38 MB of free disk space.
	
	Additional query words: 6.00 6.20 6.21 6.22 3.10 3.11
	
	======================================================================
	Keywords          : win31 msdos win95 
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW311 kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11,95
	
	=============================================================================
	
