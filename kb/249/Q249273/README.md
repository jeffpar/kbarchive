---
layout: page
title: "Q249273: XIMS: Users in Bcc Box Appear in ImCr EwLs Section of Archive"
permalink: /kb/249/Q249273/
---

## Q249273: XIMS: Users in Bcc Box Appear in ImCr EwLs Section of Archive

{% raw %}

	Article: Q249273
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 14-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a user in an Exchange Server organization sends mail that has recipients in
	the Bcc box to a recipient across the Internet Mail Service, the users in the
	Bcc box appear in the ImCr EwLs section of the Archive file. This happens if the
	Message Archival category is set to Medium or higher on the Diagnostics Logging
	tab of the Internet Mail Service.
	
	MORE INFORMATION
	================
	
	For example, if a user whose e-mail name is someone@microsoft.com sends a
	message to a user whose e-mail name is touser@adventureworks.expedia.com and
	that message has bccuser@adventureworks.expedia.com in the Bcc box, the header
	information of the generated Archive file contains the address
	bccuser@adventureworks.expedia.com between the ImCr and EwLs sections of the
	header.
	
	The example companies, organizations, products, people, and events depicted
	herein are fictitious. No association with any real company, organization,
	product, person, or event is intended or should be inferred.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
