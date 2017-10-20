---
layout: page
title: "Q188627: XADM: MSExchangeIS Move Mailbox Error Event IDs"
permalink: /kb/188/Q188627/
---

## Q188627: XADM: MSExchangeIS Move Mailbox Error Event IDs

{% raw %}

	Article: Q188627
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following events may appear in the event log when you move a mailbox:
	
	  Event ID 8500
	  Description: Unable to move mailbox %1. A problem occurred
	  while opening an  attachment.  Internal parent folder ID: %2,
	  parent message ID: %3; Error code: %4.  Run ISINTEG to check for
	  any problem in the database.
	
	  Event ID 8501
	  Description: Unable to move mailbox %1. A problem occurred while
	  opening an attachment.  Parent folder name: %2, parent message
	  subject: %3; Error code: %4.  Run ISINTEG to check for any
	  problem in the database.
	
	  Event ID 8502
	  Description: Unable to move mailbox %1. A problem occurred while
	  opening an attached message.  Internal parent folder ID: %2,
	  parent message ID: %3; Error code: %4.  Run ISINTEG to check for
	  any problem in the database.
	
	  Event ID 8503
	  Description: Unable to move mailbox %1. A problem occurred while
	  opening an attached message.  Parent folder name: %2, parent
	  message subject: %3; Error code: %4.  Run ISINTEG to check for
	  any problem in the database.
	
	  Event ID 8504
	  Description: Unable to move mailbox %1. A problem occurred while
	  getting the properties for a folder.  Internal folder ID: %2;
	  Error code: %3.  Run ISINTEG to check for any problem in the
	  database.
	
	  Event ID 8505
	  Description: Unable to move mailbox %1. A problem occurred while
	  getting the properties for a folder.  Folder name: %2; Error
	  code: %3.  Run ISINTEG to check for any problem in the database.
	
	  Event ID 8506
	  Description: Unable to move mailbox %1. A problem occurred while
	  getting the properties for a message.  Internal parent folder
	  ID: %2; Message ID: %3; Error code: %4.  Run ISINTEG to check
	  for any problem in the database.
	
	  Event ID 8507
	  Description: Unable to move mailbox %1. A problem occurred while
	  getting the properties for a message.  Parent folder name: %2;
	  Message subject: %3; Error code: %4.  Run ISINTEG to check for
	  any problem in the database.
	
	  Event ID 8508
	  Description: Unable to move mailbox %1. A problem occurred while
	  getting the properties for a attachment.  Internal parent folder
	  ID: %2, parent message ID: %3; Error code: %4.  Run ISINTEG to
	  check for any problem in the database.
	
	  Event ID 8509
	  Description: Unable to move mailbox %1. A problem occurred while
	  getting the properties for a attachment.  Parent folder name:
	  %2, parent message subject: %3; Error code: %4.  Run ISINTEG to
	  check for any problem in the database.
	
	MORE INFORMATION
	================
	
	The events listed above may be corrected by running Isinteg.exe. For more
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q183400 Specific Events That ISINTEG Attempts to Fix
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
