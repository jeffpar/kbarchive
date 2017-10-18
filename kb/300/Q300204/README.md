---
layout: page
title: "Q300204: XFOR: Messages Sent Through cc:Mail Connector Are White and Blue"
permalink: kb/300/Q300204/
---

## Q300204: XFOR: Messages Sent Through cc:Mail Connector Are White and Blue

	Article: Q300204
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you send messages by using a newly configured Microsoft Exchange Connector
	for Lotus cc:Mail, when the messages are received on the cc:Mail end, the
	message is written in white text and displayed on a blue background. This issue
	occurs even if the message body colors are not set to these colors on the
	cc:Mail post offices where the mailboxes reside.
	
	MORE INFORMATION
	================
	
	When you install a new cc:Mail post office, you can set the default colors for
	the message body. If the downstream cc:Mail post offices have been configured
	for black text and white background, and if the default message body colors have
	not been set in the cc:Mail post office that the Connector for cc:Mail connects
	to, all messages that pass through this post office are written in white text
	and displayed on a blue background. This issue occurs regardless of the setting
	on the downstream post offices, and even if there are no users on the post
	office that are connected to Exchange Server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
