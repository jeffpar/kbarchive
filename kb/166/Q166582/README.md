---
layout: page
title: "Q166582: XCLN: Delegates Stop Receiving Schedule+ Meeting Requests"
permalink: /kb/166/Q166582/
---

## Q166582: XCLN: Delegates Stop Receiving Schedule+ Meeting Requests

	Article: Q166582
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Schedule+ allows you to grant permission to another user to act as
	your delegate. Delegates receive copies of meeting requests sent to you. After
	the MBMigrate Resource Kit utility has been used to migrate mailboxes to a new
	site, Schedule+ delegates may not receive meeting request messages.
	
	CAUSE
	=====
	
	The Resource Kit tool, MBMigrate, is not migrating all information required by
	Schedule+.
	
	WORKAROUND
	==========
	
	To work around this problem follow these steps:
	
	1. Start Schedule+, remove the delegate, and then quit Schedule+ and your mail
	  client.
	
	2. Delete and re-create the profile.
	
	3. Start Schedule+ and reset the delegate.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the MBMigrate Resource Kit
	utility. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	
