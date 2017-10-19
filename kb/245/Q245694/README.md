---
layout: page
title: "Q245694: XADM: Mailbox Manager Crashes When Excluded Mailbox Has No Proxy"
permalink: /kb/245/Q245694/
---

## Q245694: XADM: Mailbox Manager Crashes When Excluded Mailbox Has No Proxy

	Article: Q245694
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 12-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you exclude mailboxes in Mailbox Manager, when you click OK, it results in
	an access violation. You may also experience an access violation when you first
	click the Exclude button in Mailbox Manager.
	
	CAUSE
	=====
	
	One or more of the excluded mailboxes are without proxy e-mail addresses of any
	kind.
	
	Mailbox Manager uses a placeholder proxy address to indicate whether a given
	mailbox should be included or excluded from a clean operation. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q242212 XADM: Mailbox Manager Mailbox Exclusion Information Stored Using MBX
	  Proxy Address
	
	Mailbox Manager loops through the list of proxy addresses looking for this
	placeholder address (MBX:1 = don't clean, MBX:0 or no "MBX"-style address =
	clean). In the case where a mailbox has no proxy address, a MAPI error code is
	returned in place of the count of proxy addresses on a given mailbox. The error
	code happens to be 2147746063 (0x8004010F) or MAPI_E_NOT_FOUND, which is
	accurate. In this case, the count of proxy addresses is unavailable because it's
	zero. The fix involves ensuring that mailboxes without proxy addresses are
	ignored from the exclude list.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	Place a temporary e-mail address in the mailboxes that do not have one. The
	address does not need to be valid. There only needs to be something in the field
	so that the value is not null.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words: mbclean.exe mbclean.dll mbclean
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
