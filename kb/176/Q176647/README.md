---
layout: page
title: "Q176647: XADM: Latency Reading Alternate Recipient Information"
permalink: /kb/176/Q176647/
---

## Q176647: XADM: Latency Reading Alternate Recipient Information

{% raw %}

	Article: Q176647
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you configure a mailbox with alternate recipients, or you change alternate
	recipient information, the change in data may not be reflected immediately. This
	occurs because the Message Transfer Agent (MTA) caches the data with a
	ten-minute latency; this is by design. The processing overhead required to
	automatically detect these changes is too great compared to the benefit. This
	process is never guaranteed to be completely accurate in any case, because the
	data can take some time to replicate to all directory databases in the site.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
