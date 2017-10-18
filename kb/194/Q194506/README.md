---
layout: page
title: "Q194506: XADM: Deadlock While Purging Unused Indices"
permalink: kb/194/Q194506/
---

## Q194506: XADM: Deadlock While Purging Unused Indices

	Article: Q194506
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	User cannot log on to Exchange Server computer and send or receive mail.
	
	CAUSE
	=====
	
	There was a deadlock while purging unused indices.
	
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
	  Gapi32.dll   5.5.2404.0
	  Mdbmsg.dll   5.5.2404.0
	  Store.exe    5.5.2404.0
	
	
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
	
