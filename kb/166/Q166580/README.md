---
layout: page
title: "Q166580: XFOR: MIME and UUENCODED Messages Cause Store Conversion Error"
permalink: /kb/166/Q166580/
---

## Q166580: XFOR: MIME and UUENCODED Messages Cause Store Conversion Error

{% raw %}

	Article: Q166580
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A message sent from an Internet Mail client to a computer running Microsoft
	Exchange Server may cause the information store (IS) to generate a conversion
	error and return the message with a non-delivery report (NDR). It may also cause
	the IS service to terminate.
	
	CAUSE
	=====
	
	This problem can occur when a message received by the IS from the IMAIL client
	is using a foreign character set in the message that is also supported by an
	installed code page on the Microsoft Exchange Server.
	
	The message comes in, and Microsoft Exchange Server calls upon a conversion
	routine to change the message to MDBEF format. When the conversion routine runs,
	it checks to see the installed code pages on the server and incorrectly uses one
	that matches the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: pop3 imap4 smtp win95 inbox priv
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
