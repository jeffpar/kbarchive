---
layout: page
title: "Q166537: XFOR: NNTP Authentication Denied with Space in NT Password"
permalink: /kb/166/Q166537/
---

## Q166537: XFOR: NNTP Authentication Denied with Space in NT Password

	Article: Q166537
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to access NNTP newsgroups, authentication may fail. A 501
	(authentication failure) error message appears in the application log.
	
	CAUSE
	=====
	
	The NNTP authentication algorithm cannot handle a space in a user's password.
	
	WORKAROUND
	==========
	
	Use passwords without spaces.
	
	RESOLUTION
	==========
	
	Apply the fix described below. The NNTP authentication algorithm was fixed to
	properly handle a password that contains spaces.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: log in fail
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	
	=============================================================================
	
