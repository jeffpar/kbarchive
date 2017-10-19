---
layout: page
title: "Q180595: XFOR: Folder Unread Message Count Shows 4294967294"
permalink: /kb/180/Q180595/
---

## Q180595: XFOR: Folder Unread Message Count Shows 4294967294

	Article: Q180595
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
	
	When you view the folder tree displayed in the left pane of the Exchange client,
	the unread count for a folder may show 4294967294 (0xFFFFFFFE) unread messages,
	but the folder itself may be empty.
	
	CAUSE
	=====
	
	This problem may be caused by corruption in the private information store.
	
	WORKAROUND
	==========
	
	To work around this problem, run ISINTEG in fix mode against the private
	information store.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
