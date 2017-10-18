---
layout: page
title: "Q98514: MS-DOS Reports Zero Bytes Free on a Network Drive"
permalink: kb/098/Q98514/
---

## Q98514: MS-DOS Reports Zero Bytes Free on a Network Drive

	Article: Q98514
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you access a network drive that has more than 2 gigabytes (GB) of disk space,
	the MS-DOS DIR command reports zero bytes free.
	
	CAUSE
	=====
	
	This problem occurs because the upper limit for MS-DOS reporting disk space free
	is 2 GB. This is consistent with the maximum file size of 2 GB and the maximum
	partition size of 2 GB.
	
	This limitation occurs because MS-DOS stores the size of a file as a 31-bit
	number.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
