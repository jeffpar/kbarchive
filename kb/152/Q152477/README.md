---
layout: page
title: "Q152477: XFOR: Handshake Files Moved to BADMAIL Directory"
permalink: /kb/152/Q152477/
---

## Q152477: XFOR: Handshake Files Moved to BADMAIL Directory

	Article: Q152477
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Microsoft Exchange Server 4.0 and the AppleTalk Mail Connector, the Network
	Manager of the AppleTalk Mail system may messages with the following Subject:
	line:
	
	  Bad incoming message file
	
	WORKAROUND
	==========
	
	There are 2 possible workarounds for this problem.
	
	- Set the aging factor option under the Gateway, Configuration... in the
	  Microsoft Mail for AppleTalk Networks client to a value of zero. This will
	  keep both sides from generating a handshake file.
	
	- Use the Macintosh System version 7.5.1 on the PowerMac 6100 or install the
	  gateway on a different PowerMac model.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This only seems to be a problem with PowerMac 6100 and 7100 computers. The
	gateway picks up the Mmff1.msg file and should just discard it as a handshake
	file, and no message should be delivered. However, the gateway does not appear
	to recognize this file as a handshake message and moves it to the BADMAIL
	directory.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
