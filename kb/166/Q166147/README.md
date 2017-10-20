---
layout: page
title: "Q166147: XFOR: Error Adding Connection to Microsoft Mail Connector"
permalink: /kb/166/Q166147/
---

## Q166147: XFOR: Error Adding Connection to Microsoft Mail Connector

{% raw %}

	Article: Q166147
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a direct connection to a Microsoft Mail postoffice using the
	Microsoft Exchange Server Microsoft Mail Connector, the following error message
	may be displayed:
	
	  A postoffice with the name already exists on the network. Enter a
	  different name.
	
	CAUSE
	=====
	
	There may be an erroneous postoffice definition in the Microsoft Exchange shadow
	postoffice.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Map a drive to the Exchange Server shadow postoffice. The shadow postoffice
	  is shared on Exchange Server with the hidden sharename MAILDAT$.
	
	2. Run the Microsoft Mail Administrator program, Admin.exe, against the shadow
	  postoffice and look at the External postoffice definitions. If there is an
	  entry for the postoffice you are attempting to connect to, remove this entry.
	
	You should now be able to add a connection for that postoffice in the Microsoft
	Mail connector.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
