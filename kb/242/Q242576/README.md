---
layout: page
title: "Q242576: Err: MSBackup Has Encountered a Serious Error in List Manager"
permalink: /kb/242/Q242576/
---

## Q242576: Err: MSBackup Has Encountered a Serious Error in List Manager

	Article: Q242576
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Backup to back up your files, you may receive the
	following error message:
	
	  MSBackup has encountered a serious error in list manager. Quit and restart
	  backup and try again.
	
	CAUSE
	=====
	
	This issue can occur if you configure the Backup program to create a log file
	and one of the following is true in the Regional Settings tool in Control
	Panel:
	
	- The entry in the "Time style" box is too long.
	
	- The entry in the "Short date style" box contains a four-digit year.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	Change the Time Format
	----------------------
	
	To change the time format:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Regional Settings, and then click the Time tab.
	
	3. In the "Time style" box, type "hh:mm tt" (without the quotation marks), and
	  then click OK.
	
	Change the Short Date Style Setting
	-----------------------------------
	
	To change the short date style setting to use a two-digit year:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Regional Settings, and then click the Date tab.
	
	3. In the "Short date style" box, click a date format that uses a two-digit
	  year, and then click OK.
	
	Use the 24-Hour Time Format
	---------------------------
	
	To use the 24-hour (military) time format:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Regional Settings, and then click the Time tab.
	
	3. In the "Time style" box, click a time format that does not include "tt", and
	  then click OK.
	
	NOTE: The 24-hour time formats do not include AM or PM and can be short enough to
	use with some four-digit year formats.
	
	Disable the Log File
	--------------------
	
	To disable the log file:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click Backup. If you are prompted, follow the instructions on the
	  screen to start the Backup program.
	
	2. Click Options on the Settings menu, clear the Overwrite old status log files
	  check box, and then click OK.
	
	MORE INFORMATION
	================
	
	This issue is known to occur if you back up more than 20 MB of data over a
	network. Also, this issue has been known to occur if you back up local files to
	a backup storage device or floppy disk.
	
	Additional query words: restore hp colorado
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
