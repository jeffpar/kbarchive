---
layout: page
title: "Q201058: All Exchange Users Receive NDR When Sending to cc:Mail Users"
permalink: /kb/201/Q201058/
---

## Q201058: All Exchange Users Receive NDR When Sending to cc:Mail Users

{% raw %}

	Article: Q201058
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server users may get a non-delivery report (NDR) when sending
	messages to cc:Mail users although CC:Mail users are able to send messages to
	Exchange Server users. This may happen even when the Custom Recipient container
	of cc:Mail users is populated and the cc:Mail names are showing up in the Global
	Address list (GAL). The NDR is immediate and includes the following
	information:
	
	Your message did not reach some or all of the intended recipients.
	
	  Subject: <subject> Sent: <date / time>
	
	  The following recipient(s) could not be reached:
	
	  <Recipient> on <date / Time> The recipient name is not recognized
	  MSEXCH:MSExchangeMTA:<Site>:<Server name>
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Verify that the address being used is accurate.
	
	2. Verify that cc:Mail traffic is allowed to the cc:Mail connector.
	
	3. Verify the address type in the cc:Mail address space property page. It is
	  recommended that an * or a blank address is defined. The * will be a wild
	  card and the space being a least character match.
	
	4. If a more exact address type needs to be defined, confirm the use of * or
	  blank space first to ensure mail flow and then verify the use of an accurate
	  post office name.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
