---
layout: page
title: "Q160602: XADM: Exporting from Command Line Produces Only Mailboxes"
permalink: kb/160/Q160602/
---

## Q160602: XADM: Exporting from Command Line Produces Only Mailboxes

	Article: Q160602
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Microsoft Exchange Server Administrator Export function from
	the command line, if the Export is missing, only mailboxes will be exported
	regardless of the other settings.
	
	MORE INFORMATION
	================
	
	The sample command line is:
	
	  Admin /e <Export file> /d directory server name /o <options
	  file>
	
	Actual Example:
	
	  Admin /e Output.csv /d Myserver /o Export.ini
	
	Example of Export.ini. This will export only custom recipients:
	
	  [Export]
	  Basepoint=/o=Microsoft/ou=wonderland/cn=Recipients
	  Homeserver=Myserver
	  ExportObject=Remote
	
	when you remove the [Export], only mailboxes are exported. This will export only
	mailboxes:
	
	  Basepoint=/o=Microsoft/ou=wonderland/cn=Recipients
	  Homeserver=Myserver
	  ExportObject=Remote
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
