---
layout: page
title: "Q174163: XADM: Cannot Edit Messages After Exceeding Storage Limit"
permalink: /kb/174/Q174163/
---

## Q174163: XADM: Cannot Edit Messages After Exceeding Storage Limit

	Article: Q174163
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If you exceed the storage limit set in the Exchange Administrator program for
	users, and the Prohibit Send and Receive option is set on the Exchange Server
	computer, you will not be able to edit any messages. Only deletion of messages
	is permitted. If you receive a large message that causes your mailbox to exceed
	the storage limit at once, and you are in the process of editing a message, you
	will be unable to save the message you are working on. If you open the large
	message that caused your mailbox limit to be exceeded, you will also be unable
	to save any edits to that message or delete any attachments that may be
	contained.
	
	CAUSE
	=====
	
	This is by design.
	
	WORKAROUND
	==========
	
	Permanently delete the large message or a few other smaller messages to bring
	your mailbox below the allotted limits for storage.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	
	=============================================================================
	
