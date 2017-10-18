---
layout: page
title: "Q262374: XADM: 2140 and 1002 with Error -1811 Error Starting Exchange"
permalink: kb/262/Q262374/
---

## Q262374: XADM: 2140 and 1002 with Error -1811 Error Starting Exchange

	Article: Q262374
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 28-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Exchange Server directory service, you may receive the
	following error message:
	
	  Error 2140. Internal Windows NT error.
	
	The following Event ID is logged in the Microsoft Windows NT Event Viewer
	application event log:
	
	  Event ID: 1002
	  Source: MSExchangeDS
	  Type: Error
	  Category: Internal Processing
	  Description:
	  The Microsoft Exchange Server database, EDB, could not be initialized and
	  returned error -1811. Unrecoverable error. The directory cannot continue.
	
	CAUSE
	=====
	
	Most virus protection programs have settings to remove, rename or quarantine
	infected files as a part of their cleanup process. This issue can occur if the
	virus protection program renames the directory.
	
	The -1811 error corresponds to JET_errFileNotFound.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Check your virus protection program to determine its settings.
	
	2. Rename the files to the original file names if they were renamed by the virus
	  protection program.
	
	3. Restore the files to their original location if they were deleted or sent to
	  a quarantine folder. They may be in the Recycle Bin.
	
	4. If the files were completely deleted from the system, then you must restore
	  the files from a backup.
	
	
	MORE INFORMATION
	================
	
	Microsoft recommends that file-level virus protection programs exclude the
	Exchange Server database and log files. Scan these files by using an Exchange
	Server-aware virus protection product.
	
	For additional information about antivirus software and Exchange Server, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q245822 XGEN: Recommendations for Troubleshooting an Exchange Server Computer
	  with Antivirus Installed
	
	Additional query words: 0xFFFFF8ED 4294965485 JET_errFileNotFound
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
