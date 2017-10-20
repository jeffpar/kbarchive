---
layout: page
title: "Q166499: XFOR: NDR from cc:Mail w/ &quot;Header Buffer Full&quot; Message"
permalink: /kb/166/Q166499/
---

## Q166499: XFOR: NDR from cc:Mail w/ &quot;Header Buffer Full&quot; Message

{% raw %}

	Article: Q166499
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message addressed to a large number of recipients from Microsoft
	Exchange Server to Lotus cc:Mail, you may receive a non-delivery report (NDR)
	from the cc:Mail Connector. This NDR contains the following string:
	
	  Header Buffer Full.
	
	CAUSE
	=====
	
	Lotus cc:Mail imposes a 4-KB header limit on messages. Because of this
	limitation, any messages passed to cc:Mail with more than 4 KB in the header
	will be returned to the sender in the form of an NDR. The string "Header Buffer
	Full" may also be repeated for each additional recipient that goes beyond the
	4-KB header limit. This header limit is a set limitation of cc:Mail and cannot
	be changed with the Microsoft Exchange Connector for Lotus cc:Mail.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Re-send the mail to fewer recipients.
	
	
	MORE INFORMATION
	================
	
	cc:Mail is manufactured by Lotus, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: ccmail
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
