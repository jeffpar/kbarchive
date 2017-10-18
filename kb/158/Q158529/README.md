---
layout: page
title: "Q158529: XCON: DS_E_Communications_Problem with Link Monitor"
permalink: kb/158/Q158529/
---

## Q158529: XCON: DS_E_Communications_Problem with Link Monitor

	Article: Q158529
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the Microsoft Exchange Link Monitor using the command line
	options in a virtual MS-DOS machine (VDM), the following error message appears:
	
	  The option Start Monitor '<servername>\<monitor name>' could not
	  be processed successfully.
	
	  The Microsoft Exchange Server computer does not respond.
	
	  Microsoft Exchange Directory
	  ID no: DS_E_COMMUNICATIONS_PROBLEM
	
	Starting Link Monitor from the Microsoft Exchange Server Administrator program
	works correctly.
	
	CAUSE
	=====
	
	This error will occur if the command line options are incorrect or in the wrong
	order.
	
	RESOLUTION
	==========
	
	Use the correct command line options, as follows:
	
	  Admin /M Monitor_Name\Servername
	
	The command line options can be executed from a VDM or by changing the properties
	of an icon.
	
	
	
	Additional query words: monitoring
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
