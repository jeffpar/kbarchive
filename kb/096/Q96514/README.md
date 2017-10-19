---
layout: page
title: "Q96514: Difference Between the DIR /C and DIR /CH Commands"
permalink: /kb/096/Q96514/
---

## Q96514: Difference Between the DIR /C and DIR /CH Commands

	Article: Q96514
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0; WINDOWS:95
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DIR command has two switches that you can use to display compression ratio
	information: /C and /CH.
	
	- /C displays the compression ratio of a file assuming that it resides on a
	  drive using 8-kilobyte (K) clusters.
	
	- /CH uses the cluster size of the host partition.
	
	In most cases, there is no difference between the output of these switches unless
	your DoubleSpace host partition uses a cluster size other than 8 kilobytes. For
	example, if you have a file on a drive using 4K clusters, the compression ratio
	displayed generated from DIR /C would be 1.5; DIR /CH would generate a
	compression ratio of 2.0.
	
	Additional query words: 6.00
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbWin95search kbZNotKeyword3 kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0; WINDOWS:95
	
	=============================================================================
	
