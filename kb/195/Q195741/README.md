---
layout: page
title: "Q195741: XADM: Store Crash when IMAP Append Is Aborted on 100 MB Network"
permalink: /kb/195/Q195741/
---

## Q195741: XADM: Store Crash when IMAP Append Is Aborted on 100 MB Network

	Article: Q195741
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an Internet Message Access Protocol version 4 (IMAP4) Append command from a
	client is aborted on a 100-MB network without waiting for the Server Response,
	an access violation error may occur in the information store.
	
	CAUSE
	=====
	
	The information store loses a connection endpoint, and cleans up properly.
	However, the Append function in IMAP does not know this, and tries to access a
	member function of the encapsulating net connection class. Because that instance
	is not valid, the information store gets an access violation.
	
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
	  Gapi32.dll   5.5.2445.0
	  Mdbmsg.dll   5.5.2445.0
	  Store.exe    5.5.2445.0
	
	
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
	
