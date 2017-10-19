---
layout: page
title: "Q244595: XADM: How to Create Mailboxes by Means of a .csv File"
permalink: /kb/244/Q244595/
---

## Q244595: XADM: How to Create Mailboxes by Means of a .csv File

	Article: Q244595
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 27-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use the Bulk Import functionality of the Exchange
	Server Administrator program to create mailboxes.
	
	MORE INFORMATION
	================
	
	To create a mailbox for an Exchange Server user by means of a .csv file, perform
	the following steps:
	
	1. Create a .csv file with the following heading:
	
	  Obj-Class,
	  Delivery-Mechanism,
	  Directory Name,
	  Alias Name,
	  Home-Server,
	  Primary Windows NT Account,
	  First Name,
	  Last name,
	  Display Name,
	  Obj-Container
	
	2. Populate the columns with the appropriate information, for example:
	
	  Mailbox,
	  0,
	  JohnD,
	  JohnD,
	  TESTSERVER,
	  TESTSERVERDOM\JohnD,
	  John,
	  Doe,
	  JohnDoe,
	  /o=Organization/ou=TestSite1/cn=Recipients
	
	  NOTE: The Obj-Class value must be Mailbox and the Delivery-Mechanism value
	  must be 0 to create the mailboxes.
	
	3. Perform a directory import to import the .csv file into the directory. (If
	  you are creating the Windows NT account when you perform this import, under
	  Account Creation, click to select the "Create Windows NT Account" check box.)
	
	For additional information about performing a directory import, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q146304 XADM: Directory Import File Format
	
	  Q155414 XADM: Bulk Import/Export FAQ
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
