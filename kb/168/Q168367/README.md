---
layout: page
title: "Q168367: XADM: Error Creating New Address"
permalink: kb/168/Q168367/
---

## Q168367: XADM: Error Creating New Address

	Article: Q168367
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new address in mailbox, the following error message appears:
	
	  This e-mail address already exists in this organization.
	  No: c10312e7
	
	CAUSE
	=====
	
	There is probably a mailbox or custom recipient that already has the address
	that you are attempting to add to the mailbox e-mail addresses list.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- On the Tools menu, click Find Recipients to quickly search the global address
	  list for the mailbox or custom recipient with the duplicate e- mail address.
	
	  -OR-
	
	- Export the entire global address book to a .csv file to search for the
	  mailbox or custom recipient with the duplicate e-mail address:
	
	Note: When you click Export on the Tools menu in the Microsoft Exchange Server
	Administrator program, Public Folder SMTP addresses and Secondary SMTP addresses
	are not exported. These addresses will have to be checked manually or can be
	alleviated by using the Import Header Tool from the Back Office Resource Kit
	3.0. Also, you may be able to find the offending address simply by trying to
	resolve the address in the TO: field of the Outlook or Exchange Client.
	
	1. On the Tools menu, click Directory Export and choose mailboxes, custom
	  recipients, and hidden objects.
	
	  If the file is opened in Microsoft Excel you can quickly find which container
	  the "duplicate" mailbox or custom recipient resides in. For example:
	
	  /ou=ServerName/cn=Recipients
	
	2. If, when returning to the Exchange Server Administrator program you still
	  cannot find the duplicate mailbox or custom recipient the entry may be
	  hidden.
	
	  If the entry was found in Excel, check column "M" Hide from AB. If the value
	  is 1 this indicates that this mailbox or custom recipient is a hidden object.
	
	3. Go to the container specified in column "L" and show hidden recipients: On
	  the View menu, click Hidden Recipients.
	
	The duplicate mailbox or custom recipient can be modified or deleted. If the
	duplicate entry is a mailbox, it is recommended that you have the mailbox
	recipient log on to the duplicate mailbox and download any mail that may have
	been delivered to it to a .pst file and then upload it to the correct mailbox
	using the correct profile.
	
	Additional query words: login
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
