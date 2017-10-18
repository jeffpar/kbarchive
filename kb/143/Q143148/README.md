---
layout: page
title: "Q143148: Minimum Disk Partition Size Allowed Varies Among Drives"
permalink: kb/143/Q143148/
---

## Q143148: Minimum Disk Partition Size Allowed Varies Among Drives

	Article: Q143148
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create a primary, extended or logical drive partitions using Windows NT
	Disk Administrator, the following partition information appears:
	
	  Minimum size for the partition is     X MB
	
	  Maximum size for the partition is     Y MB   (Y=size of free space)
	
	  Create partition size                 Z MB
	
	where X is the minimum size for the partition. Y is the size of available free
	space and Z is the partition size you want to create.
	
	MORE INFORMATION
	================
	
	The minimum size for the partition varies among different hard disks and hard
	disk controllers. Every partition must end on a cylinder boundary and the
	minimum number of cylinders is one. Depending on the capacity of the drive,
	geometry of the drive and the way the controller translates the drive determines
	the minimum size for the partition.
	
	The following is an example that calculates the minimum partition size:
	
	DRIVE     translated geometry   bytes/sector          Equals
	Capacity   #heads  X  #sectors      X 512        Minimum Partition size
	--------   ------     --------   ------------    -----------------------
	
	1GB         63     X    32          X 512     =  1,032,192 bytes  (1 MB)
	2GB         63     X    64          X 512     =  2,064,384 bytes  (2 MB)
	4GB        255     X    64          X 512     =  8,355,840 bytes  (8 MB)
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
