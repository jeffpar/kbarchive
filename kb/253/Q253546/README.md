---
layout: page
title: "Q253546: XADM: Auto Reply Rules Stop After Upgrade to Exchange Server 5.5"
permalink: /kb/253/Q253546/
---

## Q253546: XADM: Auto Reply Rules Stop After Upgrade to Exchange Server 5.5

{% raw %}

	Article: Q253546
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade Microsoft Exchange Server 5.0 to Microsoft Exchange Server 5.5,
	the rules your users created to allow automatic reply and forwarding of Internet
	mail to other Internet addresses may not work.
	
	CAUSE
	=====
	
	This behavior can occur when the Disable Automatic Replies to the Internet
	option in the Internet Mail Service is selected as the default value during the
	upgrade.
	
	RESOLUTION
	==========
	
	To resolve this issue, clear the check box for this default setting in Internet
	Mail Service on Exchange Server 5.5. Follow these steps:
	
	1. On the site level, expand Configuration, and then click the Connections
	  container.
	
	2. Open the Internet Mail Service properties page, and then click the Internet
	  Mail tab.
	
	3. Click Advanced Options, and then clear the Disable Automatic Replies to the
	  Internet check box.
	
	MORE INFORMATION
	================
	
	For additional information this feature of the Internet Mail Service, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q176161 XFOR: Microsoft Exchange Server 5.5 Allows Administrators to Disallow
	  Auto Forwarding of Messages to the Internet Addresses
	
	  Q189340 XADM: Message Auto-Forwarded Though "Automatic Replies to the
	  Internet" Disabled
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
