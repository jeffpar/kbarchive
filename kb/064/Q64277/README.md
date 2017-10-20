---
layout: page
title: "Q64277: Mac AL: Undeliverable AppleLink Gateway Messages Not Generated"
permalink: /kb/064/Q64277/
---

## Q64277: Mac AL: Undeliverable AppleLink Gateway Messages Not Generated

{% raw %}

	Article: Q64277
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using Microsoft Mail version 2.0, 2.0a, 2.0b, or 3.0 with the AppleLink
	gateway, if an AppleLink gateway server fails to send an AppleLink message
	within the time period for returning undeliverable mail specified in Server
	Settings, an undeliverable mail message is NOT sent to the sender.
	
	The only way the sender can ensure messages are sent to AppleLink is to send the
	message with the return receipt option or carbon copy his or her own AppleLink
	account.
	
	If the sender enters a bad AppleLink address, the AppleLink gateway will send an
	"Undeliverable Mail" message to the sender. If the AppleLink gateway encounters
	a problem while connecting to or sending a message to AppleLink, the gateway
	creates a problem report message and sends it to the Network Manager; however,
	nothing is sent to the account that originated the message.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	

{% endraw %}
