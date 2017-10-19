---
layout: page
title: "Q282812: XADM: Age Limits for Public Folders Use Modified Time Property"
permalink: /kb/282/Q282812/
---

## Q282812: XADM: Age Limits for Public Folders Use Modified Time Property

	Article: Q282812
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you configure the "Age Limits for Replicas" setting for messages, the
	Modified time MAPI property is used for expired messages instead of the Created
	time property.
	
	MORE INFORMATION
	================
	
	This behavior is by design. When the Modified time property
	(PR_LAST_MODIFICATION_TIME) is used, if you change an existing message, the
	Exchange-based server retains the modified information until the message exceeds
	the age limit.
	
	Additional query words: Replicas intervals limits expired pf
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
