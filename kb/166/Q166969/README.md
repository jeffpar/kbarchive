---
layout: page
title: "Q166969: WD97: Invalid Page Fault in Word at Startup When Disk Space Low"
permalink: /kb/166/Q166969/
---

## Q166969: WD97: Invalid Page Fault in Word at Startup When Disk Space Low

	Article: Q166969
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbenv word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to start Word 97 when you have fewer than 7 megabytes (MB) of
	free hard disk space, you may receive the following error:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	Clicking the Details button shows:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE.
	
	RESOLUTION
	==========
	
	Acquire more hard disk space either by adding a larger disk drive, by deleting
	unwanted files, or by using a disk compression utility.
	
	If you have an earlier version of Office that you are upgrading, you may be able
	to create extra hard disk space by removing old Office components.
	
	Run the Microsoft Office Upgrade Wizard, which is located in the
	ValuPack\OffClean folder on the Microsoft Office 97 compact disc, and choose
	which earlier components to remove or keep. To start the wizard, double-click
	the Offcln97.exe file and follow the instructions.
	
	When the Microsoft Office Upgrade Wizard is finished removing files, run the
	Microsoft Office 97 Setup program and click No when you are prompted to remove
	the older components.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: crash hang freeze gpf general protection fault
	
	======================================================================
	Keywords          : kbenv word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
