---
layout: page
title: "Q139641: Backup of Schedule File Smaller Than Original"
permalink: /kb/139/Q139641/
---

## Q139641: Backup of Schedule File Smaller Than Original

	Article: Q139641
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create a backup of a schedule file by choosing the Backup option from
	the File menu, the backup file is smaller in size than the original schedule
	file. The size can sometimes be nearly half or even one third the original size.
	
	MORE INFORMATION
	================
	
	The smaller size of the backup SCD file can be attributed to the following:
	
	1. The backup process in Schedule+ 7.0 does not copy the Synchronization Table
	  from the original SCD file.
	
	2. The backup process removes extra blank spaces and performs defragmentation of
	  data in the original SCD file before copying to the backup SCD file.
	
	Performing a backup and restore of the schedule file is a suggested method of
	optimizing your Schedule+ 7.0 SCD files.
	
	Additional query words: calendar schedule 7.0 sched+
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	
