---
layout: page
title: "Q150141: XADM: Auto Prefixing of Messages Sent Out the IMC"
permalink: /kb/150/Q150141/
---

## Q150141: XADM: Auto Prefixing of Messages Sent Out the IMC

{% raw %}

	Article: Q150141
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to turn on and off the automatic prefixing of reply
	and forward messages sent out the Microsoft Exchange Internet Mail Connector
	(IMC).
	
	MORE INFORMATION
	================
	
	The IMC has the ability to apply Internet style quoting to reply and forward
	text by inserting a greater-than sign (>) before each line of the reply or
	forward text in messages sent out over the IMC. This allows the recipient of the
	message to easily determine which part of the received message was added to by
	the sender of the message.
	
	This function is controlled by the following registry entry on the Microsoft
	Exchange Server computer running the IMC:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC
	                     \Parameters\UseRTFText
	
	If the value of this key is 1, Automatic Prefixing is turned on. This is the
	default. If the value is 0 or the key is not present, prefixing is turned off.
	
	The character used as the prefix is not configurable. It is hard coded to be
	'>'.
	
	Additional query words: Reply Ticking ReplyPrefix Indent
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
