---
layout: page
title: "Q168550: XFOR: How to Exclude OLE Attachments from Migration"
permalink: /kb/168/Q168550/
---

## Q168550: XFOR: How to Exclude OLE Attachments from Migration

	Article: Q168550
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to migrate a Microsoft Mail for PC Networks, Lotus cc:Mail,
	Novell GroupWise, or Collabra Share postoffice without migrating any of the OLE
	objects. This speeds up the migration because all attachment files will be
	ignored (left behind).
	
	MORE INFORMATION
	================
	
	To accomplish this:
	
	1. From a command prompt, run the Mail Migration utility. This utility is
	  located in Exchsrvr\bin and is called Mailmig.exe. To get a list of
	  documented options, you can type the following:
	
	  Mailmig /?.
	
	2. For this migration, use the undocumented command /g:o (the letter O, not a
	  zero). For example:
	
	  Mailmig /g:o
	
	  This is the command to ignore OLE objects. When this is run, the migration
	  wizard will ask for the type of platform to migrate. From this point, simply
	  use the wizard interface.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	
	=============================================================================
	
