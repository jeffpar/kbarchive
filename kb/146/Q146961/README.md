---
layout: page
title: "Q146961: XCLN: Outbox on Win16 Client Does Not Change Color"
permalink: kb/146/Q146961/
---

## Q146961: XCLN: Outbox on Win16 Client Does Not Change Color

	Article: Q146961
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a message is sent from the Microsoft Exchange client for Windows 3.x,
	running WIN 16 TCP/IP, on a Microsoft LAN Manager network, the Outbox will
	change color indicating that a message is waiting to be sent. Once the message
	has been sent, the Outbox will not revert back to its original (empty) color
	until another folder has been selected.
	
	CAUSE
	=====
	
	This occurs because Microsoft Exchange does not support "push" notification on
	LAN Manager networks.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0
	Windows client. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: push outbox lanman
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
