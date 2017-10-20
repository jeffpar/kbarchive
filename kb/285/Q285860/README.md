---
layout: page
title: "Q285860: XFOR: Domains Removed from Message Filtering List Are Turfed"
permalink: /kb/285/Q285860/
---

## Q285860: XFOR: Domains Removed from Message Filtering List Are Turfed

{% raw %}

	Article: Q285860
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you remove domains from the Message Filtering list, the domains may continue
	to be placed in the TurfDir folder, and messages may not be delivered.
	
	CAUSE
	=====
	
	Typically, the Microsoft Exchange Internet Mail Service relies on a registry
	entry or the Internet Mail Service properties to access the TurfDir folder.
	However, when you click the Message Filtering button on the Connections tab in
	the Internet Mail Service properties, you can enter domains or users that you
	want to block delivery from. This information is passed to the information
	store. If you add a domain, and then restart the Internet Mail Service, the new
	domains are added to the TurfDir folder (they are "turfed"). When you remove
	domains, the information store is not updated.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the Services tool in Control Panel to stop the
	Microsoft Exchange Information Store service, and then restart it.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q245465 XFOR: Configuring Message Filtering on the Internet Mail Service
	
	Additional query words: TurfTable
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP4
	Version           : :5.5 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
