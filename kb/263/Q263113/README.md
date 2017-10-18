---
layout: page
title: "Q263113: XADM: Gear Icon for Mailboxes on a DL After Import from CSV"
permalink: kb/263/Q263113/
---

## Q263113: XADM: Gear Icon for Mailboxes on a DL After Import from CSV

	Article: Q263113
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you import members to a distribution list from a .csv file, the members'
	names may show up with a gear symbol next to them instead of a mailbox or world
	symbol.
	
	This indicates that there is no directory entry for that object or the directory
	object is not correctly specified.
	
	CAUSE
	=====
	
	The members of the distribution list are not specified correctly in the .csv
	file.
	
	RESOLUTION
	==========
	
	Verify that the Members column of the .csv file has the correct information and
	format pointing to the member mailbox.
	
	For example, the distribution list that you are adding to or modifying may reside
	in ContainerA but the member mailbox that you are adding to the distribution
	list may reside in ContainerB. In this case, you need to use the following
	format in the Members column of the .csv file:
	
	ContainerB/cn=<alias>
	
	If you were to use
	
	ContainerA/cn=<alias>
	the result would be the user showing up in ContainerA with a gear icon and the
	distribution list would not work.
	
	If you do not specify the correct container where the recipient resides, Exchange
	Server does not recognize the directory object as a valid object.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
