---
layout: page
title: "Q192205: XADM: Full Fidelity Not Maintained on Opaque-Signed Message"
permalink: /kb/192/Q192205/
---

## Q192205: XADM: Full Fidelity Not Maintained on Opaque-Signed Message

	Article: Q192205
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send an opaque-signed message through a Microsoft Exchange Server
	computer, the full fidelity of the message may not be maintained.
	
	Specifically, the loss of fidelity may include some missing Request For Comments
	(RFC) 822 specification headers, such as Disposition-Notification- To. This can
	be particularly relevant when using Electronic Data Interchange (EDI, or
	"e-commerce") applications, where the combination of opaque-signed messages and
	Disposition-Notification headers is relatively common.
	
	CAUSE
	=====
	
	This problem occurs when the Internet Message Access Protocol (IMAP) command
	"FETCH RFC822.SIZE" is called.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
