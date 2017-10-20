---
layout: page
title: "Q163281: XADM: Setting Advanced Security on a Second Computer"
permalink: /kb/163/Q163281/
---

## Q163281: XADM: Setting Advanced Security on a Second Computer

{% raw %}

	Article: Q163281
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbtshoot
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Advanced Security can only be enabled for a single user on a single computer.
	Attempting to add security on a second computer for a user who already has
	security enabled results in a request to create a new token. This will
	invalidate the current token.
	
	MORE INFORMATION
	================
	
	To enable a user's second computer to send encrypted mail:
	
	1. Copy the *.epf file from the original client computer to the second client
	  computer.
	
	2. On the second client computer, on the Tools menu, click Options, and then
	  click Security and browse for the .epf file.
	
	Additional query words: KM server
	
	======================================================================
	Keywords          : kbtshoot 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
