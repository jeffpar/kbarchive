---
layout: page
title: "Q256856: XIMS: &quot;550 Relaying Is Prohibited&quot; Error Returned for Messages"
permalink: /kb/256/Q256856/
---

## Q256856: XIMS: &quot;550 Relaying Is Prohibited&quot; Error Returned for Messages

	Article: Q256856
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable the "Do Not Reroute Incoming SMTP mail" option on the Routing
	tab in Internet Mail Service (IMS) and your previously configured routing
	restrictions are still in place, a "550 Relaying is prohibited" error message
	may be displayed for all incoming e-mail messages. This behavior occurs even
	though the message recipient is found in the Exchange Server global address
	list.
	
	CAUSE
	=====
	
	This behavior occurs when you enable the "Do Not Reroute Incoming SMTP mail"
	option. This option is an old setting from Microsoft Exchange Server 4.0. When
	this feature is active, e-mail messages are not routed because e-mail messages
	are not delivered.
	
	WORKAROUND
	==========
	
	If you want to restrict Internet Mail Service from being used as a relay and
	make sure the "550 relay prohibited" error message is displayed, use the
	following steps:
	
	1. Enable the Reroute Incoming SMTP Mail option.
	
	2. Click Routing Restrictions.
	
	3. Click to select the "Hosts and clients with these IP addresses" check box,
	  and then click OK.
	
	4. Stop and restart Internet Mail Service.
	
	MORE INFORMATION
	================
	
	For additional information about routing restrictions, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q196626
	
	  Q193922
	
	Additional query words: ims gal
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
