---
layout: page
title: "Q152440: XADM: Import Error Message: One Warning Event Was Encountered"
permalink: /kb/152/Q152440/
---

## Q152440: XADM: Import Error Message: One Warning Event Was Encountered

	Article: Q152440
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 07-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you perform a Microsoft Exchange directory import, you might receive the
	following error:
	
	  The directory import from file C:\exchsrvr\bin\<filename> is complete.
	  One warning event was encountered but not logged.
	  No errors were encountered.
	
	MORE INFORMATION
	================
	
	If you encounter errors during the directory import, a file will be created with
	the same name as your import file with an extension of .err. If subsequent
	imports report errors using the same file, the extension will be e01, e02, and
	so forth. Import will record the lines with which it had problems in this text
	file. It can be edited and then used as your import file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
