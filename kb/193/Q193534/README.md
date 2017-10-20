---
layout: page
title: "Q193534: Medium Protocol Level Logs Same Data as Maximum"
permalink: /kb/193/Q193534/
---

## Q193534: Medium Protocol Level Logs Same Data as Maximum

{% raw %}

	Article: Q193534
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): exc5
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the diagnostic level is set to Medium, SMTP Protocol Log contents should
	include only the "SMTP commands and headers," yet the entire data packets of the
	message can be seen. This information should only be visible when the diagnostic
	level is set to Maximum, according to Appendix B, page 676, of the Microsoft
	Exchange Server Administrator's Manual. Currently, there is no difference in the
	way protocol logging appears for the Medium or Maximum levels.
	
	RESOLUTION
	==========
	
	Apply the latest service pack for Microsoft Exchange Server version 5.0. For
	information on obtaining the service pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component:
	
	+------------------------+
	| File name    | Version | 
	+------------------------+
	| Msexcimc.exe | 1459.73 | 
	+------------------------+
	| Imcmsg.dll   | 1459.73 | 
	+------------------------+
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
