---
layout: page
title: "Q241855: XADM: Information Store Does Not Start with Event ID 145"
permalink: kb/241/Q241855/
---

## Q241855: XADM: Information Store Does Not Start with Event ID 145

	Article: Q241855
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server information store may not start, or, if it is
	already running, it may stop responding. The following event may be logged:
	
	  Event ID: 145
	  Source: ESE97
	  Category: General
	  Description: MSExchangeIS ((%pid%) ) The database engine could not access the
	  file called %database path%\edb.log.
	
	The file that the event lists may be any file in the database folder.
	
	CAUSE
	=====
	
	A program has the file that the event lists locked open. Backup and antivirus
	software may lock files open. To verify that the file is locked open:
	
	1. Log on to the Exchange Server computer using the administrator account.
	
	2. Create a Test folder on drive C.
	
	3. At a command prompt, type the following:
	
	  copy <database path>\edb.log c:\test
	
	The file is locked open if the following error message is displayed:
	
	  The process cannot access the file because it is being used by another
	  process.
	
	RESOLUTION
	==========
	
	Configure the AV, backup or other software so that it does not directly access
	any of the data files on the Exchange server. It is recommended that you exclude
	all \exchsrvr directories from being scanned by file-based virus scanning
	software. Exchange aware virus scanning software do not access the files
	directly and do not cause this problem.
	
	If you intend to backup the Exchange server files, stop all of the Exchange
	services first. You can use an Exchange aware backup product to back up the
	Exchange databases while online without causing any file contention problems.
	
	MORE INFORMATION
	================
	
	For additional information about antivirus software and Exchange Server, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q245822 XGEN: Recommendations for Troubleshooting an Exchange Server Computer
	  with Antivirus Installed
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
