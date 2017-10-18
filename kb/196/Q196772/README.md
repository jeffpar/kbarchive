---
layout: page
title: "Q196772: XADM: LDAP Clients Receive Extended Characters Instead of IA5"
permalink: kb/196/Q196772/
---

## Q196772: XADM: LDAP Clients Receive Extended Characters Instead of IA5

	Article: Q196772
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If Netscape Communicator version 4.5 is performing a Lightweight Directory
	Access Protocol (LDAP) search request against an Exchange Server computer for a
	directory entry containing extended characters, these characters are not
	displayed correctly.
	
	CAUSE
	=====
	
	Netscape Communicator 4.5 is a LDAP version 2 client and so expects to receive
	IA5 characters only.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Directory
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Dsamain.exe | 5.5.2511.0 | 
	+--------------------------+
	
	
	This hotfix has been posted to the following Internet location as Psp2diri.exe
	(x86) and Psp2dira.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/eng/Exchg5.5/PostSP2/DIR-fix/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	Outlook Express 4.0 has no such problem because it is an LDAP version 3 client
	and so supports receiving UTF-8 characters.
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
