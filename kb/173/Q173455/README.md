---
layout: page
title: "Q173455: XWEB: OWA Returns Exchange Server Down Error Message"
permalink: kb/173/Q173455/
---

## Q173455: XWEB: OWA Returns Exchange Server Down Error Message

	Article: Q173455
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 16-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When accessing Microsoft Exchange Server using Outlook Web Access (OWA), you may
	receive the following error:
	
	  Sorry! The Microsoft Exchange Server is down or the HTTP Service has been
	  disabled by an administrator. Please try your request again later.
	
	This can occur if the Anonymous access account defined in DS Site Configuration
	in the Microsoft Exchange Administrator program does not have Search permissions
	at the Configuration container.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server, version 5.5 introduces new functionality to control
	Search (READ) access of the Microsoft Exchange Directory. If this functionality
	is enabled, the Directory Anonymous Account must have Search permissions
	explicitly granted at the Configuration level.
	
	NOTE: Search permissions will flow down from the Organization or Site level to
	the Configuration container.
	
	Additional query words: LDAP Anonymous Read Search XADM exfaqold
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	
	=============================================================================
	
