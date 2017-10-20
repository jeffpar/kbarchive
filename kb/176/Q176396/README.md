---
layout: page
title: "Q176396: XCON: Long Lines of Text Cause Content Conversion Error"
permalink: /kb/176/Q176396/
---

## Q176396: XCON: Long Lines of Text Cause Content Conversion Error

{% raw %}

	Article: Q176396
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to send an X.400 message that contains several very long lines of
	text with no line feeds or carriage returns, the message may not be delivered.
	In addition, an event similar to the following may appear in the event log:
	
	  message NMI0210: X.400 Service Event, severity 14
	
	  (MTA DISP:FANOUT(18) Proc 112) 05-19-97 03:45:27pm
	  Content conversion failed
	  Object at fault     0600004C
	  Conversion error    Database Server read failure
	  MTS Identifier      C=US;A=MA;P=MICROSOFT;L=FIREBIRD-970519224521Z-30
	  Old content type    2A864886F7140501
	  New content type    56010A01
	  PDU dump reference  2
	
	In addition, if you are using Microsoft Exchange Server 4.0, you may receive a
	non-delivery report (NDR). If you are using Microsoft Exchange Server 5.0, you
	do not receive an NDR.
	
	This problem occurs when the X.400 Connector is configured to use the ISO 6937
	bodypart to transfer messages to a remote X.400 system and is not configured for
	message text word-wrap.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: message transfer agent mta linefeed
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
