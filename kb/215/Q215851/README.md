---
layout: page
title: "Q215851: XADM: Send Options in PAB Entry is Ignored"
permalink: /kb/215/Q215851/
---

## Q215851: XADM: Send Options in PAB Entry is Ignored

	Article: Q215851
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 02-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a custom recipient for the Microsoft Internet Mail Connector with the
	Allow Rich Text in Messages Option selected and on the client side, a Personal
	Address Book entry with identical information, but with the Allow Rich Text in
	the messages check box cleared.
	
	When you compose a message to that recipient and you explicitly choose the
	Personal Address Book entry that has the Allow rich text in the messages check
	box cleared, the mail message arrives with rich text overriding the Personal
	Address Book options.
	
	CAUSE
	=====
	
	Microsoft Outlook requires Messaging Application Program Interface (MAPI) to
	resolve the name against the Global Address Book even though the Personal
	Address Book has higher priority. This causes the server-side options to take
	precedence over client-side options.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: MAPI
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Emsabp32.dll | 5.5.2543.0 | 
	+---------------------------+
	| Mapi32.dll   | 5.5.2543.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: ims internet mail service
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
