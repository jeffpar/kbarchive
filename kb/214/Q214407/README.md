---
layout: page
title: "Q214407: XADM: Internet Mail Service Stops with an Access Violation"
permalink: kb/214/Q214407/
---

## Q214407: XADM: Internet Mail Service Stops with an Access Violation

	Article: Q214407
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
	
	The Microsoft Exchange Internet Mail Service terminates with an access violation
	during the processing of outbound Internet mail. Viewing the application log
	using event viewer may show some of the following events:
	
	  Event ID: 4097
	  Source: DrWatson
	  Type: Information
	  Category: None
	  Description:
	  The application, exe\MSEXCIMC.dbg, generated an application error The error
	  occurred on 11/ 9/1998 @ 9:14:48.422 The exception generated was c0000005 at
	  address 004391a3 (nosymbols)
	
	Other exceptions reported might include some of the following:
	
	  The exception generated was c0000005 at address 004402cb (nosymbols)
	  The exception generated was c0000005 at address 77f7d359
	  (RtlpCoalesceFreeBlocks)
	  The exception generated was c0000005 at address 77f64654 (RtlAllocateHeap)
	  Event ID: 4037
	  Source: MSExchangeIMC
	  Type: Error
	  Category: Internal Processing
	  Description:
	  An exception has occurred which was handled internally by the Internet Mail
	  Service. This may have resulted in a message not being delivered. Code:
	  0xc0000005 Flags: 0x00000000 Address: 0x004391a3
	
	Other locations reported might include the following:
	
	  An exception has occurred which was handled internally by the Internet Mail
	  Service. This may have resulted in a message not being delivered. Code:
	  0xc0000005 Flags: 0x00000000 Address: 0x77f64654
	
	CAUSE
	=====
	
	The Internet Mail Service was incorrectly handling an invalid response from
	other SMTP servers on the Internet.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: IMC
	
	+---------------------------+
	| File Name    | Version    | 
	+---------------------------+
	| Msexcimc.exe | 5.5.2524.0 | 
	+---------------------------+
	| Imcmsg.dll   | 5.5.2524.0 | 
	+---------------------------+
	
	This hotfix has been posted to the following Internet location as Psp2imca.zip
	and Psp2imci.zip:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.5/PostSP2/imc-fix
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: invalid gpfault gp failure access violation ehlo response
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Component         : IMS
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
