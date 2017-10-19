---
layout: page
title: "Q304375: XCCC: Outlook Users Can't Log on in Address Book View Config"
permalink: /kb/304/Q304375/
---

## Q304375: XCCC: Outlook Users Can't Log on in Address Book View Config

	Article: Q304375
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 19-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Microsoft Outlook user tries to log on to a mailbox, the user may receive
	the following error message:
	
	  The name could not be resolved
	
	When an Outlook user performs a "check name" procedure, the user may receive the
	following error message:
	
	  The name could not be matched in the address list.
	
	CAUSE
	=====
	
	This behavior can occur if you use Address Book views, set group accounts to a
	mailbox, and assign Search permission to these groups.
	
	WORKAROUND
	==========
	
	To work around this behavior:
	
	- Give everyone search permission on the Recipients container. Because the
	  Recipients container contains all of the mailboxes, if you give everyone
	  search permission for the Recipients container, it becomes the largest
	  container that everyone can search.
	
	-or-
	
	- Make sure that the user's mailbox is part of the largest container that
	  everyone can search (for example, if all of the other mailboxes have a
	  Company name, assign the user's mailbox a Company name to ensure that the
	  user's mailbox is part of the Company container).
	
	As long as the largest container that the Exchange directory service locates
	contains this mailbox, the directory service finds a match for the client.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	
	Additional query words: DSA
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
