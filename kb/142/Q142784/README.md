---
layout: page
title: "Q142784: XCLN: Alert Window Does Not Close After Reading Message"
permalink: /kb/142/Q142784/
---

## Q142784: XCLN: Alert Window Does Not Close After Reading Message

	Article: Q142784
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can create rules to notify you when specific messages arrive. The Notify
	With The Text option will display an alert message in the New Items Of Interest
	window. After you read the message, the window does not close.
	
	CAUSE
	=====
	
	This is by product design. The New Items of Interest window is a modeless list
	box that may contain multiple messages that meet the specific conditions of the
	rule. Therefore, it is not automatically closed after you read the last message
	in the New Items of Interest box.
	
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
