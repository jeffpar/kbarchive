---
layout: page
title: "Q197130: XCON: FETCH Using IMAP Client Fails to Retrieve SMIME Message"
permalink: kb/197/Q197130/
---

## Q197130: XCON: FETCH Using IMAP Client Fails to Retrieve SMIME Message

	Article: Q197130
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you perform a Fetch of a SMIME message from the Exchange Server computer
	using an IMAP client, the Fetch returns no information at all.
	
	For example:
	
	  FETCH 1 [1.MIME]
	
	  Expected results:
	  The MIME information for the first body part of message 1 should be returned.
	
	  Actual results:
	  No information is being returned
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Store
	
	  File Name     Version
	  -----------------------
	  Store.exe     5.5.2432
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
