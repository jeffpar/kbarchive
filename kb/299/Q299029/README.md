---
layout: page
title: "Q299029: XCLN: &quot;404 File Not Found&quot; Error Trying to Gain Access to Logon"
permalink: /kb/299/Q299029/
---

## Q299029: XCLN: &quot;404 File Not Found&quot; Error Trying to Gain Access to Logon

{% raw %}

	Article: Q299029
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbExchange550
	Last Modified: 09-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Client, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a logon page for Outlook Web Access (OWA), you
	may receive the following error message:
	
	  404 File Not Found
	
	This happens when you use the server name or the local host name in the URL.
	
	CAUSE
	=====
	
	This behavior can occur if the computer does not resolve the server name when a
	user tries to gain access to it by using a URL.
	
	RESOLUTION
	==========
	
	To resolve this behavior, acquire an IP address from your Internet service
	provider (ISP), assign the new IP address to the network interface card (NIC),
	and then make the applicable DNS entry.
	
	WORKAROUND
	==========
	
	To work around this behavior, instruct people to connect to the port on which
	the default Web site is set.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550 
	Technology        : kbExchangeSearch kbExchange550 kbExchangeClientSearch
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
