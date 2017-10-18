---
layout: page
title: "Q67321: FAT Type and Cluster Size Depends on Logical Drive Size"
permalink: kb/067/Q67321/
---

## Q67321: FAT Type and Cluster Size Depends on Logical Drive Size

	Article: Q67321
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22; Win2000:95
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS allocates disk space for files in units of one or more sectors; these
	units are called "clusters" or "allocation units." On any MS-DOS disk, a 1-byte
	file is allocated 1 cluster of disk space, wasting the unused area of the
	cluster. A file that is 3.2 clusters large is given 4 clusters. Overall, a
	smaller cluster size means less waste.
	
	The cluster size for a drive is decided by FORMAT, depending on the size of the
	logical drive (see table, below). "Logical drive" refers to an MS-DOS volume
	accessed by a drive letter (A:, B:, C:, D:, and so forth). Hard disk users may
	want to consider cluster size when choosing how to partition their drive(s).
	
	The cluster size of a floppy drive cannot be changed. The cluster size of a hard
	drive can be changed only by changing the size of the logical drive, which is
	done by repartitioning the hard drive.
	
	CHKDSK displays the allocation unit size for a logical drive. FDISK's option 4
	displays the size(s) of logical drives on the hard drive(s).
	
	NOTE: DoubleSpace-compressed drives appear to have 8K clusters, but internally
	vary the sectors-per-cluster as necessary (this information is recorded in the
	MDFAT). For example, a 10K file which compresses by a factor of 2:1 actually
	uses 5K, or 10 sectors, of drive space.
	
	MORE INFORMATION
	================
	
	The following is a table of logical drive sizes, FAT (File Allocation Table)
	types, and cluster sizes:
	
	                 Drive Size      FAT Type     Sectors     Cluster
	              (logical volume)              Per Cluster     Size
	              ----------------   --------   -----------   -------
	(Floppy Disks)      360K           12-bit         2         1K
	                   720K           12-bit         2         1K
	                  1.2 MB          12-bit         1       512 bytes
	                  1.44 MB         12-bit         1       512 bytes
	                  2.88 MB         12-bit         2         1K
	(Hard Disks)     0 MB - 15 MB      12-bit         8         4K
	               16 MB - 127 MB     16-bit         4         2K
	              128 MB - 255 MB     16-bit         8         4K
	              256 MB - 511 MB     16-bit        16         8K
	              512 MB - 1023 MB    16-bit        32        16K
	             1024 MB - 2047 MB    16-bit        64        32K
	
	NOTES:
	
	- Sectors are 512 bytes in size, except on some RAM drives.
	
	- In the past, some OEMs have modified their versions of MS-DOS to support
	  other sector and/or cluster sizes. The Microsoft MS-DOS 5 Upgrade Setup will,
	  if possible, convert the logical drive to MS-DOS 5.0 compatible. This entails
	  converting the sector size to 512 bytes while retaining the nonstandard
	  cluster size.
	
	- MS-DOS determines the FAT size based on the number of clusters. If there are
	  4085 or fewer clusters, a 12-bit FAT is used. If there are 4086 or more
	  clusters, a 16-bit FAT is used.
	
	For more information on this topic, query on the following words:
	
	  cluster and disk and FAT
	
	Additional query words: dblspace 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 5.00a partition allocation unit 6.00 6.20 cluster granularity 6.21 6.22 win95 msdos
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbWin95search kbZNotKeyword3 kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22; Win2000:95
	
	=============================================================================
	
