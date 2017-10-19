---
layout: page
title: "Q159162: XCON: MSMail Read-Receipts Missing Data Across Organizations"
permalink: /kb/159/Q159162/
---

## Q159162: XCON: MSMail Read-Receipts Missing Data Across Organizations

	Article: Q159162
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.0,3.2,3.2a,3.5; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a mail message with a read-receipt request from a Microsoft Mail
	3.x client to a Microsoft Exchange Server user in a different organization, the
	read-receipt is returned with missing To and Subject fields.
	
	A mail message sent with a read-receipt request from Microsoft Exchange Client to
	a Microsoft Mail user across a different organization results in the following
	returned receipt:
	
	  Your message
	
	     To:   Unknown
	     Subject:Unknown
	     Sent: Unknown
	
	  was read on 11/8/96 8:36:00 AM
	
	CAUSE
	=====
	
	The Microsoft Mail client generates and responds to read receipts using MAPI
	commands. These commands are encapsulated by Exchange Server in the MDBEF format
	when they arrive in Exchange Server. However, when going to another Exchange
	Server organization, these commands are converted to a native X.400 format and
	the MDBEF properties are stripped out.
	
	The Microsoft Mail client cannot compensate for this X.400 limitation because it
	does not know how to properly encode the message using standard X.400 flags for
	the handling of read receipts.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	- Have all the computers running Exchange Server in the same organization.
	
	This will ensure that the MDBEF is preserved and the read receipt maintains its
	proper format.
	
	Additional query words: rr msmail p2 ia5
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.2a,3.5; winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
