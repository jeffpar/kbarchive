---
layout: page
title: "Q185027: XADM: Event 1282 Logged After Removing TCP/IP From Server"
permalink: /kb/185/Q185027/
---

## Q185027: XADM: Event 1282 Logged After Removing TCP/IP From Server

{% raw %}

	Article: Q185027
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If TCP/IP is removed as a network protocol from a computer running Microsoft
	Exchange Server 5.0, on which LDAP has been disabled, then the following message
	is logged incorrectly as a STOP (RED) event:
	
	  1282/MSExchangeDS/Error/LDAP Interface/Error encountered in getting
	  hostname.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.0. We
	are researching this problem and will post additional information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This is a harmless message, as TCP/IP has been removed from this computer. It is
	incorrectly logged as a STOP event instead of as a WARNING (YELLOW) message.
	Furthermore, this message is expected because LDAP functionality requires
	TCP/IP.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
