---
layout: page
title: "Q195894: XADM: Access Violation While Processing Long DBCS BinHex Files"
permalink: /kb/195/Q195894/
---

## Q195894: XADM: Access Violation While Processing Long DBCS BinHex Files

	Article: Q195894
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An access violation error happens when processing long double-byte character set
	(DBCS) attachment files, which are encoded in BinHex format.
	
	CAUSE
	=====
	
	The current logic assumes that if a leading byte is found, the trailing byte
	must follow. However, the trailing byte is removed because of shrinking long
	attachment file names, and then the access violation happens.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	  File Name     Version
	  -----------------------
	  Gapi32.dll    5.5.2446.0
	  Mdbmsg.dll    5.5.2446.0
	  Store.exe     5.5.2446.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: AV
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
