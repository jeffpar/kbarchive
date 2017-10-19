---
layout: page
title: "Q195171: XADM: Invalid Fetch Command Causes Information Store to Stop"
permalink: /kb/195/Q195171/
---

## Q195171: XADM: Invalid Fetch Command Causes Information Store to Stop

	Article: Q195171
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp2fix exc55 exc55sp1
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an Internet Message Access Protocol version 4 (IMAP4) command similar to the
	following is sent to a Microsoft Exchange Server computer, an access violation
	error may occur and the information store may stop unexpectedly:
	
	  FETCH 1 BODY[HEADER.FIELDS (SUBJECT )]
	
	Note the space following the word "SUBJECT"; this is not a valid FETCH command.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	  File Name    Version
	  -----------------------
	  Gapi32.dll   5.5.2398.0
	  Mdbmsg.dll   5.5.2398.0
	  Store.exe    5.5.2398.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix exc55 exc55sp1 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5,5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
