---
layout: page
title: "Q180180: XFOR: Attachment May Be Lost Forwarding from MSMail to Exchange"
permalink: /kb/180/Q180180/
---

## Q180180: XFOR: Attachment May Be Lost Forwarding from MSMail to Exchange

{% raw %}

	Article: Q180180
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Microsoft Mail user forwards an unedited message that includes several
	attachments to an Exchange user via the Microsoft Mail Connector, it is possible
	that the last attachment may be lost. Also, if the forwarded message ends with
	text, it is possible that the Exchange recipient will receive the message with
	the last part of the text missing.
	
	CAUSE
	=====
	
	When an unedited Exchange message is forwarded to an Exchange user, it is
	possible that it does not end with a CRLF (carriage return, line feed). When
	such a message enters Exchange, the message transfer agent (MTA) truncates the
	last portion of the message data.
	
	If the forwarded message includes several attachments, then the truncation action
	might remove the last attachment. In this case, the Exchange recipient will
	receive the message with the last attachment lost. If the the last object in the
	message is in a text format, then the Exchange user may receive the message with
	some missing text at the end.
	
	WORKAROUND
	==========
	
	Before forwarding such a message, edit it by adding some text after the
	attachments and after the important text in the body of the message. This will
	force the client to rewrite and reformat the message, which will then preserve
	the attachments. The extra text is added as a precaution to guarantee that there
	is no important text lost.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
