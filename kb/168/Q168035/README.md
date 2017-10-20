---
layout: page
title: "Q168035: XADM: Performance Monitor Counters for PCMTA Show Zero Values"
permalink: /kb/168/Q168035/
---

## Q168035: XADM: Performance Monitor Counters for PCMTA Show Zero Values

{% raw %}

	Article: Q168035
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	In Performance Monitor, the counters for the MSExchangePCMTA object may show
	values of zero, even though mail is flowing through the MSMail Connector to the
	PCMTA. This will occur if you are logged in as an account that is not in the
	Administrators Group.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- In order to view the correct values of these counters, log in as
	  Administrator or with an account that is part of the Administrators Group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
