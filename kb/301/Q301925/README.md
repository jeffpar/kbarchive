---
layout: page
title: "Q301925: Messages Received with White Text and Blue Background"
permalink: kb/301/Q301925/
---

## Q301925: Messages Received with White Text and Blue Background

	Article: Q301925
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When messages are sent through a newly configured Microsoft Exchange Connector
	for Lotus cc:Mail and the messages that are received in cc:Mail contain white
	text that is displayed on a blue background. This behavior may occur when
	message body colors are not set on the cc:Mail post offices where the mailboxes
	are located.
	
	MORE INFORMATION
	================
	
	When you install a new cc:Mail post office, you can set the message body default
	colors. When you configure the downstream cc:Mail post offices to have black
	text that is displayed on a white background, if the default colors are not set
	on cc:Mail post office that the Connector for cc:Mail connects to, all of the
	messages that pass through this post office contain white text that is displayed
	on a blue background, regardless of the setting at the downstream post offices.
	This behavior can occur even though there are no users on the post office
	connected to the Exchange Server computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
