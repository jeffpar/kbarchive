---
layout: page
title: "Q166516: XFOR: Message Body Missing or Truncated While Downloading Msg"
permalink: /kb/166/Q166516/
---

## Q166516: XFOR: Message Body Missing or Truncated While Downloading Msg

{% raw %}

	Article: Q166516
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you download messages from Microsoft Exchange Server version 5.0 using
	POP3, the message body may be truncated or missing. The message stops
	downloading and the POP3 client is unable to download any additional mail.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The following feature is planned for Microsoft Exchange Server 5.0 Service Pack
	1. When you download messages from Microsoft Exchange Server version 5.0 using
	POP3, and the message body is truncated or missing, an Event ID 12003 is
	generated on the server. The Event ID may look similar to the following:
	
	  Event ID 12003
	  Source: MSExchange Pop3   Category: Content Engine
	  Description:
	  Error 0-82000201 occured while processing message <xxxxxx> with subject
	  'xxxxxxx' from 'UserX'.
	
	The original sender must resend the body content in a new message.
	
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
