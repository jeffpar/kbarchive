---
layout: page
title: "Q96552: What Defragmenter Does &amp; How It Works with 3rd-Party Utilities"
permalink: /kb/096/Q96552/
---

## Q96552: What Defragmenter Does &amp; How It Works with 3rd-Party Utilities

	Article: Q96552
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Defragmenter reorganizes data on MS-DOS drives so that it can be
	retrieved faster.
	
	MORE INFORMATION
	================
	
	MS-DOS organizes data on the hard disk into a series of clusters (allocation
	units) and then tracks which files are using which clusters through directory
	structures and the file allocation tables (FATs). Neither users nor applications
	need to know exactly where specific data is located on the hard disk. When an
	application needs a file, it simply asks MS-DOS to get it.
	
	Over time, pieces of files may be spread all over the hard disk. When this
	occurs, retrieving files requires more time. Defragmenter reorganizes the
	clusters for faster access. (For example, information is stored at the front of
	the disk, and parts of files are regrouped together). Defragmenter uses
	interrupt calls 25H and 26H to move the information stored in one cluster to
	another, directly updating the FATs and directory structures.
	
	Defragmenter operates at nearly the same level as MS-DOS. However, it still uses
	MS-DOS and is protected from direct interactions with the following:
	
	- Third-party partitioning utilities that modify or translate disk geometry
	  (such as Disk Manager and SpeedStor)
	
	- DoubleSpace and third-party drive compression utilities
	
	Additional query words: 6.00 3rd-party defrag
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
