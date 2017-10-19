---
layout: page
title: "Q177973: XADM: AutoReply Attributes Do Not Affect Out Of Office Option"
permalink: /kb/177/Q177973/
---

## Q177973: XADM: AutoReply Attributes Do Not Affect Out Of Office Option

	Article: Q177973
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Auto-Reply, AutoReply-Message, and AutoReply-Subject are three attributes in a
	mailbox object that are no longer used by Microsoft Exchange Server. The
	Mialbox.csv file that shipped with Exchange Server 4.0 includes these fields;
	the Resource-Kit "Import Header Tool" program also generates these fields. These
	are valid attributes that can be set, modified, and read, but do not affect any
	functionality within Exchange Server. This functionality is also incorrectly
	documented in the Schema.hlp file.
	
	When you export to a CSV that has all of the fields defined, the Auto- Reply,
	AutoReply-Message, and AutoReply-Subject fields will be empty by default. These
	fields can be modified via the import function, but the Out- Of-Office function
	of the mailbox will not be changed.
	
	The Out-Of-Office function of a mailbox cannot be set via the Import function of
	Exchange Server.
	
	CAUSE
	=====
	
	Originally, the Out-Of-Office functionality in Exchange Server was handled by
	the MTA; therefore, these properties were in the directory object. Since the
	release of Exchange Server version 4.0, this functionality is handled in the
	information store to allow for increased flexibility of the Out-Of- Office
	function.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
