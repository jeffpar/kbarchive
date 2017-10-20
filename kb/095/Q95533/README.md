---
layout: page
title: "Q95533: Largest Possible DoubleSpace Drive Is 512 MB"
permalink: /kb/095/Q95533/
---

## Q95533: Largest Possible DoubleSpace Drive Is 512 MB

{% raw %}

	Article: Q95533
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:95
	Operating System(s): 
	Keyword(s): msdos win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The versions of DoubleSpace and DriveSpace included with MS-DOS and Windows 95
	support cluster sizes up to 8K. This limits the size of a DoubleSpace or
	DriveSpace compressed volume file (CVF) to 512 MB.
	
	Because DriveSpace 3 (the version of DriveSpace included with Microsoft Plus!)
	can use cluster sizes up to 32K, the maximum size for a DriveSpace 3 CVF is 2
	GB.
	
	MORE INFORMATION
	================
	
	The following calculations are used to determine the limits stated above:
	
	DoubleSpace and DriveSpace
	--------------------------
	
	  # of clusters with FAT16      max cluster size      max CVF size
	  ------------------------  *  ------------------  =  ------------
	       65536 clusters          8192 bytes/cluster        512 MB
	
	DriveSpace 3
	------------
	
	  # of clusters with FAT16      max cluster size       max CVF size
	  ------------------------  *  -------------------  =  ------------
	       65536 clusters          32768 bytes/cluster        2 GB
	
	DriveSpace 3 achieves a higher compression ratio by compressing and storing data
	in clusters up to 32K in size, and by offering two new levels of compression
	called HiPack and UltraPack. For information about the HiPack and UltraPack
	compression methods, search for "HiPack" and "UltraPack" in DriveSpace 3 online
	Help.
	
	DriveSpace 3 can also store more data than earlier versions of DriveSpace and
	DoubleSpace because of improved fragmentation handling. In DoubleSpace and
	DriveSpace CVFs, the data for a cluster must be stored in contiguous sectors.
	When the volume is highly fragmented, it is possible to have many free sectors,
	but not enough contiguous sectors to store a cluster (up to 16 sectors in a
	DoubleSpace or DriveSpace CVF, and up to 64 sectors in a DriveSpace 3 CVF).
	DriveSpace 3 stores data for a fragmented cluster in a linked list of sectors
	when there are not enough continuous sectors to store the entire cluster. In
	addition, DriveSpace 3 stores small directories in a single sector, while
	DoubleSpace and DriveSpace require 16 sectors.
	
	All versions of DoubleSpace and DriveSpace use Sector Allocation Granularity to
	increase data storage capacity. For additional information about this topic,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q98407 How DoubleSpace Uses Sector Allocation
	
	For information about cluster sizes, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q67321 FAT Type and Cluster Size Depends on Logical Drive Size
	
	For information about DoubleSpace and DriveSpace in MS-DOS, please see Chapter 5
	of the "Microsoft MS-DOS 6 User's Guide," or see Appendix E of the "Microsoft
	MS-DOS 6.22 User's Guide."
	
	Additional query words: 6.00 6.20 6.21 6.22 win95x
	
	======================================================================
	Keywords          : msdos win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:95
	
	=============================================================================
	

{% endraw %}
