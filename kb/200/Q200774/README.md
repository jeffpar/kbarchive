---
layout: page
title: "Q200774: XADM: Gear Icon Next to Mailboxes on a Distribution List"
permalink: kb/200/Q200774/
---

## Q200774: XADM: Gear Icon Next to Mailboxes on a Distribution List

	Article: Q200774
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 02-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use .csv files to import and export distribution lists, entries in the
	distribution list may appear with a gear icon next to them instead of a mailbox
	or world icon.
	
	When a gear icon appears next to an object in the Microsoft Exchange Server
	Administrator program, that indicates that there is no directory entry for that
	object.
	
	CAUSE
	=====
	
	A good example of this is a distribution list created or modified by means of a
	.csv file. If the .csv file contains members in the distribution list that
	cannot be resolved into valid mailboxes, these mailboxes are listed as members
	of the distribution list but are not used. If the mailboxes are then created,
	the distribution list does not resolve the entry to the mailbox.
	
	WORKAROUND
	==========
	
	To work around this issue, create the mailboxes, export the distribution list,
	and then import it again.
	
	
	Additional query words: symbol wheels import export
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
