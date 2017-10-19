---
layout: page
title: "Q217155: XADM: Missing MIME Boundary Causes Bad MIME Prolog"
permalink: /kb/217/Q217155/
---

## Q217155: XADM: Missing MIME Boundary Causes Bad MIME Prolog

	Article: Q217155
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
	
	When Microsoft Internet Mail Service receives a MIME-encoded message that has a
	large MIME prolog and the message is relayed, an endless loop in content
	conversion may result in a temporary file with an .stf extension that grows
	until all the disk space is consumed or the Internet Mail Service is shut down.
	The .stf file can also grow as a result of a POP3 or IMAP4 client downloading
	mail from the server.
	
	CAUSE
	=====
	
	This problem is typically because of a missing boundary before a body part
	causing the body part to be interpreted as part of the prolog. If the prolog is
	big enough to be within approximately 76 bytes of the current available buffer
	space, the prolog is emitted but leaving no room for the boundary to fit in.
	This results in an endless loop of emitting the same prolog over and over again
	while the temporary file grows in size.
	
	A typical example would be:
	
	  Content-Type: multipart/alternative; boundary="----
	  _=_NextPart_001_01BE4633.82DAE140"
	  Content-Type: text/plain
	
	A missing boundary here makes the all of this portion to be prolog:
	
	  ===========================================
	  AAAAAAA AA AAAAAAA AAAAAAA AA AAA AAAA AAAAA AAAA  AAAA AAAAAAA.
	
	  AAA AA AA AAAA AAAAAAAA AAAAAA AAAA AAAAAAAA AA AAA AAA AAAAAAAA?
	
	  BBBBBBB BBBBBBB, BBBBBB, BBBBBBBB B, BBBB, BBBBBB B BBBBBB
	  CCCCCCCCCCCCCCCCCCCCCCC
	
	  CCC CCCC CCCC CCCCCCC DD DDD DD DD DDDDDDD, DD DD D DDDDDDDDDD
	  DDDDDDDDD. DDDD DD DDD DD DD DDDDD DDD DDD DDDDDDDDDD DDDDDDDD DD DDDD
	  DDDD DDDDDDDDDD DD DDDDDD DDD DDD DDDDDDD DDDDDDD, DDDDDDDDDDDD
	  DDDDDDD DDDD DDD DDDD DDDD DDD DDD DDDDDDDDDDDDDDDDDD DDDDDDDD.
	  DDDDDD DDDD DDDDDDD, DDDDDDDD DDDD DDDDDDD DDD DDDDDD DD DDDDDDD DDDDD'D
	  EEE EEEEEEEEEE EEEE EEEEEEE EEEEEE EEEEE EEEEEE EEE EEEEEEEE
	  EEEEEE, EEEE EEEEEEEE EEEEEEEEEEEEEEEEEE EEEEEEEE.
	
	  EEEEEEEEE EEEEEEE EEEEEEE: EEEEEEE, EEEEEE EEEEEEE, EEEEEEEE,
	  EEEEEE EEEEEEE EEEEEEEEE EE EEE
	
	  EEEE EEEEEEE
	  FFFFFFFFFFFFFFF
	  ============================================
	    <<FFFFFFF_FFFFF_FFFF_FFFFFFFFFFFFFF>>
	  Prolog Ends here
	  ------_=_NextPart_001_01BE4633.82DAE140
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2558.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2558.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2558.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: mdbdata large STF .STF files grow
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
