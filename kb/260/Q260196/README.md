---
layout: page
title: "Q260196: XCON: Cannot Delete X.400 Connector"
permalink: /kb/260/Q260196/
---

## Q260196: XCON: Cannot Delete X.400 Connector

{% raw %}

	Article: Q260196
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to delete an X.400 connector, you may be unable to delete it and
	you receive the following error message:
	
	  The "X.400 TCP /IP connector <connector_name> cannot be deleted because
	  it is the only connector providing the mail connectivity from the local site
	  to the replicated site <replicated_site_name>.
	
	CAUSE
	=====
	
	This behavior can occur if an already existing Directory Replication connector
	uses the X.400 connector to replicate both sites. This behavior functions as a
	safety lock, and is designed to prevent accidental deletion of X.400 connectors
	to the replicated sites.
	
	RESOLUTION
	==========
	
	To resolve this issue, delete the Directory Replication connector, and then
	delete the X.400 connector.
	
	Additional query words: dirrep
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
