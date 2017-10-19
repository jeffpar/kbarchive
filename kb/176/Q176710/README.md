---
layout: page
title: "Q176710: XFOR: Japanese Characters in Subject Line Are Corrupted"
permalink: /kb/176/Q176710/
---

## Q176710: XFOR: Japanese Characters in Subject Line Are Corrupted

	Article: Q176710
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Microsoft Mail for PC Networks, Japanese version, user sends a message
	with Japanese characters in the subject to a POP3 email client via the English
	version of the Microsoft Exchange Microsoft Mail Connector and Microsoft
	Exchange Internet Mail Service (IMS), the Japanese characters in the subject
	line are corrupted and show up as question marks (?). This will occur even if
	the Japanese code page and NLS are installed on the English Exchange Server.
	Please note, if the Japanese version of Exchange Server is used, this does not
	happen.
	
	CAUSE
	=====
	
	The code page property is not added during the conversion of the message at in
	Exchange Server's Microsoft Mail Connector.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: JPN, DBCS
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
