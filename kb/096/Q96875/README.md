---
layout: page
title: "Q96875: Backup Not Compatible with Norton Backup Sets"
permalink: kb/096/Q96875/
---

## Q96875: Backup Not Compatible with Norton Backup Sets

	Article: Q96875
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft does not support retrieving and comparing data created with Norton
	Backup.
	
	
	MORE INFORMATION
	================
	
	Microsoft Backup uses Microsoft DoubleSpace compression technology developed
	specifically for MS-DOS 6.0. This compression engine replaces the compression
	engine technology in Norton Backup, making the two backup sets incompatible.
	
	Microsoft Backup complies with the Microsoft Real Time Compression Interface
	(MRCI), which allows it (without further modification) to use a hardware
	implementation of the DoubleSpace compression server (if one is present).
	
	Although it is possible to create backups without compression, Microsoft does not
	support exchanging backup sets with the Norton Backup program.
	
	
	Additional query words: 6.00 msbackup mwbackup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
