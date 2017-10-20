---
layout: page
title: "Q175105: XFOR: Internet Message Labeled with Incorrect Character Set"
permalink: /kb/175/Q175105/
---

## Q175105: XFOR: Internet Message Labeled with Incorrect Character Set

{% raw %}

	Article: Q175105
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you select a different but compatible character set for encoding an Internet
	message, the result will be a message whose body is encoded using the selected
	character set. However, the message body is still labeled with the default
	Internet character set for that type of message.
	
	MORE INFORMATION
	================
	
	For example, a Western European message will typically use the ISO-8859-1
	character set. If you select any other compatible character set for encoding
	this message, such as Windows-1252, the resulting Internet message is labeled
	with the ISO-8859-1 character set. The message is actually encoded with the
	Windows-1252 character set.
	
	It is recommended that only typical Internet character sets be used to encode
	messages.
	
	Additional query words: decode charset
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	
	=============================================================================
	

{% endraw %}
