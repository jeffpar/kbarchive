---
layout: page
title: "Q181649: XADM: MSMail Message Body Missing when Received Through the IMS"
permalink: /kb/181/Q181649/
---

## Q181649: XADM: MSMail Message Body Missing when Received Through the IMS

{% raw %}

	Article: Q181649
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The text of some MSMail messages received through the Internet Mail Service may
	be incomplete when opened. Some or all of the message body may be missing.
	
	CAUSE
	=====
	
	This occurs when messages received through the Internet Mail Service have
	embedded null characters in the body of the SMTP message stream. RFC1521
	discourages the sending of control characters between systems that do not have a
	private agreement. In Microsoft Exchange Server 4.0 the Internet Mail Connector
	(IMC) removes all null characters from messages received. Exchange Server 5.0
	and 5.5 are written to more carefully preserve the inbound message content, and
	they preserve null characters in the message body.
	
	The Microsoft Exchange MSMail Interchange (MSMI) is written with the assumption
	that a null character marks the end of a message body. When the MSMI sees the
	null character, it stops processing the message body that is created for the
	MSMail client.
	
	
	WORKAROUND
	==========
	
	To work around this problem, change the originating mail message so that null
	characters are not part of the message stream.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server versions 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Microsoft has changed Exchange Server versions 5.0 and 5.5 to strip null
	characters from the message body of received mail as Exchange Server 4.0 did.
	
	Additional query words: missing lost truncated incomplete
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : 5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
