---
layout: page
title: "Q200032: XFOR:Typo in French cc:Mail Connector Read Receipt Token String"
permalink: /kb/200/Q200032/
---

## Q200032: XFOR:Typo in French cc:Mail Connector Read Receipt Token String

	Article: Q200032
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message with read receipt through a French Microsoft Exchange
	Connector for Lotus cc:Mail and view the read receipt on the Lotus cc:Mail side,
	you may notice that it has a typographical error. The error is in the token for
	a French read receipt subject.
	
	CAUSE
	=====
	
	The read receipt's subject starts with "Lu : <subject>." Note the space
	before the colon (:); it should be "Lu: <subject>."
	
	This is a typographical error.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	5.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
