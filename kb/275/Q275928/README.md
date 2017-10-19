---
layout: page
title: "Q275928: XFOR: Msgs Sent Via cc:Mail Connector Are in White Txt on Blue"
permalink: /kb/275/Q275928/
---

## Q275928: XFOR: Msgs Sent Via cc:Mail Connector Are in White Txt on Blue

	Article: Q275928
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you send a message through a newly configured Microsoft Exchange Connector
	for Lotus cc:Mail, the message is received in cc:Mail with white text on a blue
	background even if the message body colors are not set as such on the cc:Mail
	post offices where the mailboxes reside.
	
	MORE INFORMATION
	================
	
	When you install a new cc:Mail post office, you can also set default colors for
	the message body. If the downstream cc:Mail post offices have been configured
	for black text and white background, and the cc:Mail post office to which the
	Connector for cc:Mail connects has not set the message body default colors, even
	though there are no users on the post office that are connected to Exchange
	Server, all messages that pass through this post office will have the blue
	background with white text regardless of the setting at the downstream post
	offices.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
