---
layout: page
title: "Q152954: XCLN: Network Errors w/ Microsoft Exchange Windows 3.1 Client"
permalink: /kb/152/Q152954/
---

## Q152954: XCLN: Network Errors w/ Microsoft Exchange Windows 3.1 Client

	Article: Q152954
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are running the Microsoft Exchange Windows 3.x client on Windows 3.1
	and using Novell's NetWare IPX/SPX protocol stack, the following error message
	may appear:
	
	  A network error has occurred. Please contact your administrator.
	
	This usually happens when accessing the Address Book, trying to check details of
	names in the Global Address Book, synchronizing local Schedule+ file to server,
	sending and receiving large attachments, or moving messages from PST to
	server-based folder. It is also more likely to happen on Token Ring.
	
	CAUSE
	=====
	
	The computer running Microsoft Exchange Server is sending packets that are
	larger than the MaxFrameSize of the Windows 3.1 client.
	
	When Windows 3.1 was written, there was only one interface with Novell's IPX/SPX
	stack, using ECB's programmed with assembly language. ECBs only support SPX I.
	SPX I does not allow packet size negotiation.
	
	With the release of NetWare 4.x, another interface with Novell's IPX/SPX stack
	was introduced, using TLI programmed with C. TLI supports both SPX I and SPX II.
	SPX II does allow packet size negotiation.
	
	Since Windows 3.1 was written before the TLI interface came out, it was written
	to use ECBs, so its version of RPC can't negotiate packet sizes. Therefore, the
	computer running Microsoft Exchange Server doesn't "know" that the client's
	MaxFrameSize is not the same as its MaxFrameSize and it sends packets that are
	too large for the client.
	
	RESOLUTION
	==========
	
	One possible workaround is to make sure the maximum frame size on the Exchange
	clients is at least the same size a,s or up to 120 bytes larger than, the
	maximum frame size on the computer running Microsoft Exchange Server.
	
	Windows 95 does not exhibit this problem.
	
	
	STATUS
	======
	
	Microsoft does not plan to add TLI support to Windows 3.1.
	
	
	Additional query words: token ring win16
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : :4.0
	
	=============================================================================
	
