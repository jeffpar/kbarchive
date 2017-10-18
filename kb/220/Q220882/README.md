---
layout: page
title: "Q220882: XADM: NDR Generated for Wrong Recipients"
permalink: kb/220/Q220882/
---

## Q220882: XADM: NDR Generated for Wrong Recipients

	Article: Q220882
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send a message to a distribution list (DL) and some of the members on the
	DL have full mailboxes because of information store storage limits, a
	non-delivery report (NDR) may be generated for the wrong recipients. This
	problem may occur if the DL contains more than approximately 400 members. The
	NDR returned to the sender may be similar to the following:
	
	  The recipient was unable to take delivery of the message.
	  The MTS-ID of the original message is <MTS-ID>
	  MSEXCH:MSExchangeMTA:SiteName:SERVERNAME
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-----------------------+
	| File name  | Version  | 
	+-----------------------+
	| Mdbmsg.dll | 5.5.2558 | 
	+-----------------------+
	| Store.exe  | 5.5.2558 | 
	+-----------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	
	Additional query words: Error incorrect 000004DD Recipient
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
