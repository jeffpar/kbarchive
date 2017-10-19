---
layout: page
title: "Q215947: XFOR: SNADS: Bad In-body Addresses Cause NDRs to Stop Lsdiamex"
permalink: /kb/215/Q215947/
---

## Q215947: XFOR: SNADS: Bad In-body Addresses Cause NDRs to Stop Lsdiamex

	Article: Q215947
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 13-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message to the Internet through the Microsoft Exchange
	connectors (SNADS) may crash while trying to send back a non-delivery report
	(NDR). Moreover, the following messages can be found in the Microsoft Exchange
	Connector Administrator's log viewer:
	
	  LME-SNADS-DIAMEX(002e) 3 00019:The value of the LASTMSGHEADERLINE keyword in
	  the LME-SNADS-DIAMEX section is '/INTERNET'
	
	  LME-SNADS-DIAMEX(002e) 4 56155:Foreign ad-hoc recipient: ':user@domain.com'
	
	  LME-SNADS-DIAMEX(002e) 2 31200:Exchange Server has returned the condition:
	  80070057
	
	  LME-SNADS-DIAMEX(002e) 2 31201:Microsoft Package ID: Win 32
	
	  LME-SNADS-DIAMEX(002e) 2 31203:Extended NT information: The parameter is
	  incorrect.
	
	  LME-SNADS-DIAMEX(002e) 2 31081:Cannot create custom Exchange address for user
	
	  LME-SNADS-DIAMEX(002e) 2 31200:Exchange Server has returned the condition:
	  80070057
	
	CAUSE
	=====
	
	The user improperly created the in-body address and an NDR was generated because
	the message was not accepted by Exchange Server. Because of the in-body address,
	there was not a valid return path for the NDR.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Exchange SNADS Connector
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Lsdiamex.exe | 5.5.2543.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
