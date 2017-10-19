---
layout: page
title: "Q213202: XADM: Event 30 Appears When a Program Is Accessing the Log Files"
permalink: /kb/213/Q213202/
---

## Q213202: XADM: Event 30 Appears When a Program Is Accessing the Log Files

	Article: Q213202
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The information store may stop unexpectedly and the following events may appear
	in the event log:
	
	  Event ID: 30
	  Source: EDB
	  Type: Error
	  Category: Logging/Recovery
	  Description: MSExchangeIS ((425)) Unable to create the log. The drive may be
	  read-only or out of disk space. Error -1032.
	
	  -and-
	
	  Event ID: 1111
	  Source: MSExchangeIS
	  Type: Error
	  Category: None
	  Description: An error occurred while writing to the database log file.
	  Attempting to stop the Microsoft Exchange Information Store.
	
	CAUSE
	=====
	
	This problem can occur when another program prevents Exchange Server from
	accessing the log files. For example, an anti-virus program or file management
	utility may be accessing the log files, which prevents Exchange Server from
	accessing them.
	
	WORKAROUND
	==========
	
	To work around this problem, quit all programs that may be accessing the log
	files. This includes anti-virus programs, file and disk management utilities,
	and other programs that keep files open for an extended period of time.
	
	If you determine that an anti-virus program was accessing the log files, you may
	be able to prevent this problem from occurring by configuring the program so
	that it does not scan the folders in which the log files are located. By
	default, the log files are located in the Exchsrvr\Mdbdata and Exchsrvr\Dsadata
	folders. In addition, if the program is not completely compatible with Exchange
	Server, you may be able to prevent this problem from occurring by obtaining an
	updated version of the program, or a different anti-virus program, that is
	completely compatible with Exchange Server.
	
	MORE INFORMATION
	================
	
	There are several other conditions that may prevent Exchange Server from writing
	to the log files, including the following:
	
	- There is not enough free disk space on the drive where the log files are
	  located.
	- The necessary permissions have not been assigned on the drive or folder where
	  the log files are located.
	- The log files do not exist.
	
	However, the -1032 error (jet_errFileAccessDenied) in the first event typically
	indicates that another program has the log files open, which is preventing
	Exchange Server from accessing the files.
	
	Additional query words: 4294966264
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
