---
layout: page
title: "Q181450: XADM: Advanced Security Revocation Not Immediate"
permalink: /kb/181/Q181450/
---

## Q181450: XADM: Advanced Security Revocation Not Immediate

{% raw %}

	Article: Q181450
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When advanced security is revoked for a Microsoft Exchange user, the effect of
	this on the user's ability to send sealed or signed messages is not immediate.
	
	It can take up to 24 hours for all clients to become aware that advanced security
	was revoked for the user.
	
	MORE INFORMATION
	================
	
	When advanced security is revoked for a user, that user's certificate is added
	to the Certificate Revocation List (CRL). For performance reasons and to enable
	offline use, the CRL is cached on the client computer and expires every 24
	hours. Therefore, it could take up to 24 hours for the clients to become aware
	of the CRL change.
	
	After clients are aware of the change to the CRL, they will not allow signed or
	sealed messages to be sent to the user in question. The user in question also
	will not be able to send signed or sealed messages.
	
	If a user certificate has been compromised, it is recommended that the Microsoft
	Exchange Administrator disable and then re-enable advanced security for the user
	in question. This will generate a new token that should be given to the user.
	
	If an administrator wants to remove security from a user permanently, for example
	when an employee has left the company on bad terms, it may be better to delete
	the mailbox.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
