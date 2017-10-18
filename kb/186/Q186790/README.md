---
layout: page
title: "Q186790: XFOR: Performance Issues after Installing Chat Server Extension"
permalink: kb/186/Q186790/
---

## Q186790: XFOR: Performance Issues after Installing Chat Server Extension

	Article: Q186790
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After implementing chat-specific server extensions to a chat server, the chat
	server's performance may decline, or it may stop responding altogether. Such
	server extensions were developed using the Microsoft Exchange Chat Service
	Software Development Kit (SDK). This kit is available with Exchange Server 5.5
	Service Pack 1 (SP1) or with Microsoft Commercial Information Server (MCIS) 2.0.
	
	CAUSE
	=====
	
	Implementing a chat server extension that has not been fully tested into a
	production environment can result in a decrease in chat server performance. In
	some cases, the chat server may stop responding completely.
	
	WORKAROUND
	==========
	
	It is recommended to test any decrease in performance by first temporarily
	removing any manually-created chat server extensions.
	
	MORE INFORMATION
	================
	
	The Microsoft Exchange Chat Service in Exchange Server 5.5 SP1 and MCIS 2.0
	include two sample server extensions, Channel Transcription, and Profanity
	Filter. Activating any server extensions on the chat server will result in some
	decrease in server performance. The sample server extensions that were shipped
	with Microsoft Exchange Chat Service were thoroughly tested for optimized
	performance. Consequently, they may only cause minimal decrease in performance.
	
	Using the Microsoft Exchange Chat Service SDK, you have the ability to develop
	your own server extensions.
	
	Additional query words: xfor; mcis; chat
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
