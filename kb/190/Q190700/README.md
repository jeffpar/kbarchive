---
layout: page
title: "Q190700: XADM: The Services Required When Creating a New Mailbox"
permalink: /kb/190/Q190700/
---

## Q190700: XADM: The Services Required When Creating a New Mailbox

	Article: Q190700
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains what Microsoft Exchange Server services need to be running
	to create an Exchange Server mailbox, either manually using the Exchange Server
	Administrator program or as part of a batch process using the batch import
	program.
	
	MORE INFORMATION
	================
	
	In order to create a new mailbox, the Microsoft Exchange Server System Attendant
	and Microsoft Exchange Server Directory service must be running.
	
	The Information Store service does not need to be running.
	
	When a mailbox is created, only a Directory Service object is created. When a
	user logs into that mailbox for the first time, or that mailbox receives mail,
	the Information Store object for that mailbox will be automatically generated.
	
	This can result in the mailbox not having any mailbox resources displayed in the
	Administrator program.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q169413 XADM: Mailbox Resources Does Not Show All Mailboxes
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
