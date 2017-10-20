---
layout: page
title: "Q140262: XCLN: Err Msg:Error Prevented Processing of Received Mail"
permalink: /kb/140/Q140262/
---

## Q140262: XCLN: Err Msg:Error Prevented Processing of Received Mail

{% raw %}

	Article: Q140262
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Internet Mail from a Microsoft Exchange, version 4.0, Windows 95
	client, the following error message may be displayed:
	
	  An error prevented processing the message to completion. The original message
	  is contained in the attached text file MESSAGE.TXT.
	
	CAUSE
	=====
	
	This error message indicates that Internet Mail received a message or attachment
	that was corrupt, or in a format Internet Mail could not understand and decode.
	When this happens, Internet Mail saves the message as a separate file, called
	MESSAGE.TXT.
	
	RESOLUTION
	==========
	
	If you receive a message in a format that Internet Mail cannot decode, you
	should contact the sender for the format used, and obtain a decoder for that
	format. You can then use the decoder on the MESSAGE.TXT file, allowing you to
	successfully read the message.
	
	
	Additional query words: xchange inet mail
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
