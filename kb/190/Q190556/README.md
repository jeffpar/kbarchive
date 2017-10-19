---
layout: page
title: "Q190556: XADM: Corrupted MIME Encoding Causes Information Store to Crash"
permalink: /kb/190/Q190556/
---

## Q190556: XADM: Corrupted MIME Encoding Causes Information Store to Crash

	Article: Q190556
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An incoming Internet Mail message causes the information store to crash.
	
	CAUSE
	=====
	
	Messages sent over the Internet are encoded at the sending end and decoded at
	the receiving end. If Base64 encoding is used and for some reason is corrupted
	or improperly encoded, the decoding logic in the information store causes an
	access violation, resulting in an information store crash.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5.
	
	
	
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
