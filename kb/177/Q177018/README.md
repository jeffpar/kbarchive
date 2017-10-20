---
layout: page
title: "Q177018: XFOR: Meeting Requests Sent Over Internet Mail Service Need RTF"
permalink: /kb/177/Q177018/
---

## Q177018: XFOR: Meeting Requests Sent Over Internet Mail Service Need RTF

{% raw %}

	Article: Q177018
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Schedule+ meeting requests sent over the Internet Mail Service require that Rich
	Text Format (RTF) is enabled for the custom recipient address. The recipient
	must be able to recognize RTF and Schedule+ properties. If RTF is not enabled,
	the recipient will receive a plain text version of the meeting request message.
	
	MORE INFORMATION
	================
	
	With RTF disabled, the message is sent as Content-Type: text/plain, which is
	plain text. With RTF enabled, the message is sent as Content-Type:
	multipart/mixed, which includes the formatting to display the proper forms for
	Schedule+.
	
	This is by product design
	
	
	Additional query words: Schedplus smtp Schedule Plus
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
