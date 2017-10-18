---
layout: page
title: "Q139209: System Agent Does Not Log Individual Drive Status"
permalink: kb/139/Q139209/
---

## Q139209: System Agent Does Not Log Individual Drive Status

	Article: Q139209
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When System Agent runs scheduled Disk Defragmenter and ScanDisk tasks on
	multiple drives, it does not log the status of the individual drives.
	
	The Sagelog.txt file and the Last Result section in System Agent display only
	"Completed successfully" or "Errors found," with no indication of a specific
	drive.
	
	CAUSE
	=====
	
	System Agent does not have the ability to report the status of individual drives
	when you schedule Disk Defragmenter or ScanDisk tasks for multiple drives.
	
	RESOLUTION
	==========
	
	Schedule a separate task for each drive in System Agent, instead of scheduling
	one task that is performed on multiple drives.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Plus! for Windows 95,
	version 1.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Note that ScanDisk generates a Scandisk.log file that is located in the root
	folder. This file displays details for individual drives even if you scan
	multiple drives.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
