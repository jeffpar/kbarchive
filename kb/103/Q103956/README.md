---
layout: page
title: "Q103956: How ScanDisk Fixes Bad Sectors"
permalink: kb/103/Q103956/
---

## Q103956: How ScanDisk Fixes Bad Sectors

	Article: Q103956
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When ScanDisk encounters a bad sector it attempts to patch the sector. This is
	known as hot fixing or hot patching.
	
	NOTE: If you are running in check mode (/CHECKONLY), ScanDisk does not attempt to
	hot fix the bad sectors.
	
	MORE INFORMATION
	================
	
	Hot patching is the process of taking a file that contains one or more
	unreadable (bad) sectors and recovering all the data that is still readable. Any
	data that lies in a bad sector is replaced by zeros.
	
	For example, if a file occupies clusters 1, 2, 3, 4, and 5, and cluster 3
	contains one or more bad sectors, ScanDisk reads as many of the sectors from
	cluster 3 as possible and moves the data to a new location (for example cluster
	7). Any sectors from cluster 3 that could not be read are replaced with sectors
	filled with zeros in cluster 7. The FAT chain for the file is updated and
	cluster 3 is marked bad. After this process is finished, the file occupies
	clusters 1, 2, 7, 4, and 5.
	
	NOTE: This process makes the file fully readable, but the data that was in the
	defective sectors is still lost. It is not possible for ScanDisk to recover data
	from unreadable sectors.
	
	Additional query words: 6.20 hotfix hotpatch hotfixes hotpathes scan disk
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
