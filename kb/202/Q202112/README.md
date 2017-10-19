---
layout: page
title: "Q202112: CHAT: Cannot Change Default Location for Channel Transcription"
permalink: /kb/202/Q202112/
---

## Q202112: CHAT: Cannot Change Default Location for Channel Transcription

	Article: Q202112
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to change the default location for local transcription files
	through the Microsoft Management Console (MMC) Chat snap-in, the location will
	not change until the system is restarted.
	
	CAUSE
	=====
	
	The default location transcription is assessed one time, when the system is
	started. Consequently, the change will not take effect until the server is
	restarted.
	
	STATUS
	======
	
	This behavior is by product design.
	
	Additional query words: mcischat
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
