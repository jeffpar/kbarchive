---
layout: page
title: "Q135952: ScanDisk Last Result: Check Was Stopped Because of an Error"
permalink: kb/135/Q135952/
---

## Q135952: ScanDisk Last Result: Check Was Stopped Because of an Error

	Article: Q135952
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): scandisk win95 kbScanDisk
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In System Agent, the Last Result column for a ScanDisk task may report "Check
	was stopped because of an error." However, the Scandisk.log file does not list
	any errors, and you do not encounter any errors if you run ScanDisk manually.
	
	CAUSE
	=====
	
	This behavior may be caused by an invalid drive in ScanDisk's DrivesToCheck
	registry setting. The DrivesToCheck setting can become invalid if a drive that
	existed when the ScanDisk task was created is subsequently removed. For example,
	this can occur when you remove a PCMCIA drive, uncompress or unmount a
	compressed drive, or remove a laptop computer from its docking station.
	
	RESOLUTION
	==========
	
	Delete the existing ScanDisk task and schedule a new task. Make sure to check
	the settings for the task to see that they meet your requirements.
	
	If you use a docking station or some other form of removable drive on a regular
	basis, you may want to schedule separate ScanDisk tasks for the permanent and
	removable drives. Because only one instance of ScanDisk can run at a time, make
	sure to schedule the tasks so that they do not overlap.
	
	Additional query words: 255
	
	======================================================================
	Keywords          : scandisk win95 kbScanDisk 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
