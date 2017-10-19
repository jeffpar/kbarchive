---
layout: page
title: "Q168716: XADM: How to Import Manager Data into Exchange"
permalink: /kb/168/Q168716/
---

## Q168716: XADM: How to Import Manager Data into Exchange

	Article: Q168716
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Organization property page may be used to enter optional information in the
	Address Book about the mailbox owner's manager and direct reports (if any).
	
	Manager information may be imported into the Exchange mailboxes by creating a
	.Csv file that contains a Manager column header.
	
	MORE INFORMATION
	================
	
	Create a .Csv file by exporting the addresses from the Administrator program and
	modifying the file to add the new column "Manager" and Alias Name of the user
	who will be listed as the manager for that mailbox.
	
	Close, then import this modified .Csv file into Exchange, using Tools / Directory
	Import command.
	
	Any mailbox owner who is listed as a manager of another user will have Direct
	Report information displayed within his or her mailbox properties.
	
	Each recipient who reports to the mailbox owner (Manager) will be listed in the
	Direct Reports dialog box of that mailbox owner.
	
	REFERENCES
	==========
	
	The Exchange Server 4.0 CD contains a sample Mailbox.csv file that can be found
	at:
	
	  \SUPPORT\SAMPLES\Csvs\MAILBOX\Mailbox.csv
	
	Contained in this file are all 93 fields that can be associated with any Exchange
	Server mailbox. This .Csv file may be used to create the "master headers" for a
	.Csv file for use in importing user and mailbox information into Exchange
	Server.
	
	The Microsoft BackOffice Resource Kit contains a utility called Header.exe, which
	can be used to create a .Csv file with only the required headers.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
