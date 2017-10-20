---
layout: page
title: "Q145791: XCLN: No Read Receipt Indicator for Message Headers"
permalink: /kb/145/Q145791/
---

## Q145791: XCLN: No Read Receipt Indicator for Message Headers

{% raw %}

	Article: Q145791
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the Microsoft Exchange Remote Client to view message headers, the
	properties dialog does not indicate that the incoming message is requesting a
	Read Receipt. Therefore, you cannot avoid downloading a message with a Read
	Receipt in order to prevent the automatic response being sent during the next
	mail transfer.
	
	
	STATUS
	======
	
	With the current design, there is no way to verify if a message is requesting a
	Read Receipt from within the Remote Mail viewer. The Read Receipt property is
	not displayed due to performance reasons. Also, unlike the Microsoft Mail Remote
	client, the Read Receipt icon (!) will not be displayed beside the message. (In
	Microsoft Exchange, the red "!" icon indicates Importance High.)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
