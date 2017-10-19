---
layout: page
title: "Q164842: XCON: Enhanced Diagnostics in MTA"
permalink: /kb/164/Q164842/
---

## Q164842: XCON: Enhanced Diagnostics in MTA

	Article: Q164842
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	The Microsoft Exchange Message Transfer Agent (MTA) has been enhanced to
	provide additional diagnostic information in the case of a fatal MTA
	database error. When a fatal database error occurs, Mta*.dmp files are
	created in the Mtadata subdirectory.
	
	This feature has been added to MTA version 995.45 and later. It is
	included in Microsoft Exchange Server 4.0 Service Pack 4.
	
	The Mta*.dmp files and any Db*.dat files, event logs, text event logs, and
	failure dump files can be used by Microsoft for analysis of a problem.
	
	
	
	SUMMARY
	=======
	
	
	
	Additional query words: replay repro
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
