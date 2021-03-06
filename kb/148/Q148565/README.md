---
layout: page
title: "Q148565: XFOR: IMC Fails to Start with 2140, Event IDs 4014 4032 4057"
permalink: /kb/148/Q148565/
---

## Q148565: XFOR: IMC Fails to Start with 2140, Event IDs 4014 4032 4057

{% raw %}

	Article: Q148565
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An Exchange administrator can define the way messages may be delivered based on
	the domain name of the destination. This is configured through the Internet Mail
	Connector (IMC) or Internet Mail Service (IMS) Connections property page. If one
	or more per domain routing is set up incorrectly, the MSExchangeIMC or
	MSExchangeIMS service may fail to start with an Error 2140, as well as logging
	Event IDs 4032, 4057, and 4014 in the Windows NT Event Viewer Application log.
	Resolution requires correcting or removing the erroneous per domain routing
	entry, which is specified in the previously listed Event Viewer entries. This is
	by design.
	
	
	Additional query words: 3040
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
