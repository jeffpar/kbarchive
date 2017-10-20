---
layout: page
title: "Q146321: XADM: Administrating Exchange Servers in Multiple Domains"
permalink: /kb/146/Q146321/
---

## Q146321: XADM: Administrating Exchange Servers in Multiple Domains

{% raw %}

	Article: Q146321
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv kbusage exc4 exc5 exc55
	Last Modified: 07-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In addition to administering a Microsoft Exchange Server in your domain, it
	might be necessary to administer a Microsoft Exchange Server in an untrusted
	domain (when setting up a site connector, for example). This can be accomplished
	by creating identical accounts (username and password) in both domains and
	making sure that this account has the necessary permissions on the Microsoft
	Exchange objects.
	
	If you have two domains, EAST and WEST, and they do not trust each other, create
	an EXADMIN account with a password of EXADMIN in both domains. On the Microsoft
	Exchange Servers in those domains, give EXADMIN administrative privileges in the
	Organization, Site and Configuration containers. Once this is done, you will be
	able to connect to and administer both Microsoft Exchange Servers when logged in
	as EXADMIN.
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbenv kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
