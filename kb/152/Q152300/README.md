---
layout: page
title: "Q152300: XADM: ExportObject in Command-Line Export Options File Only"
permalink: /kb/152/Q152300/
---

## Q152300: XADM: ExportObject in Command-Line Export Options File Only

	Article: Q152300
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a command-line Export is performed using an options file, the ExportObject
	setting in the [Export] section can only be listed once and it will only accept
	a single parameter: Mailbox, All, DL, Remote (in other words, custom
	recipients), or Recipients.
	
	MORE INFORMATION
	================
	
	A Microsoft Exchange Directory Export can be accomplished by one of two
	methods:
	
	- The Directory Export feature of the Microsoft Exchange Administrator program.
	
	- A combination of command-line options available with Admin.exe:
	
	  ADMIN /E file.csv /o options.ini.
	
	If the first method is used, the administrator can choose to export any
	combination of mailboxes, distribution lists, or custom recipients to a CSV
	file. However, other directory objects cannot be exported with this method.
	
	If the command-line options are used, mailboxes are exported by default. However,
	an ExportObject setting may be added to the [Export] section, and the following
	parameters are available:
	
	[Export]
	ExportObject=mailbox
	ExportObject=remote
	ExportObject=DL
	ExportObject=Recipients
	ExportObject=All
	
	The ExportObject setting can only appear once in the options file and it can only
	contain one of the parameters. In other words, if you try to export all of your
	Distribution Lists and Mailboxes by specifying "ExportObject=DL,mailbox", only
	the Distribution Lists would be exported to the CSV file. Likewise, if the
	ExportObject setting was specified twice in the file, first with
	"ExportObject=mailbox" and then with "ExportObject=DL", only the mailboxes would
	be exported to the CSV file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
