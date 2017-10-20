---
layout: page
title: "Q184535: XADM: Removing a Site from an Organization"
permalink: /kb/184/Q184535/
---

## Q184535: XADM: Removing a Site from an Organization

{% raw %}

	Article: Q184535
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You will be unable to delete a Site container using the Microsoft Exchange
	Server Administrator program. If you highlight the object and click the Edit
	menu, the Delete command is dimmed (unavailable).
	
	CAUSE
	=====
	
	Sites cannot be deleted from the Exchange Administrator program. Other sites in
	the Organization must lose knowledge of the site that you wish to remove.
	
	WORKAROUND
	==========
	
	If you are removing the servers in the site that you wish to delete, first
	uninstall the Exchange servers using Exchange Setup program.
	
	For other sites to lose knowledge of the site that is being deleted, you should
	remove the replication and messaging connectors.
	
	The addresses and other objects related to the site you wish to delete will be
	removed from the directory.
	
	Additional query words: grey greyed out gray grayed out
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
