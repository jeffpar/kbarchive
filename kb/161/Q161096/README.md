---
layout: page
title: "Q161096: XADM: Unable to Export Hidden Mailboxes via Command Line"
permalink: /kb/161/Q161096/
---

## Q161096: XADM: Unable to Export Hidden Mailboxes via Command Line

{% raw %}

	Article: Q161096
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On page 480, the Microsoft Exchange Server Administrator's Guide indicates that
	you should use Hidden=[Yes, No] to export hidden recipients (objects).
	
	MORE INFORMATION
	================
	
	This should read HiddenObjects=[Yes, No].
	
	To Export hidden objects, use HiddenObjects=Yes in the Export.ini options file.
	
	Example:
	
	  [Export]
	  Basepoint=/o=Microsoft/ou=wonderland/cn=Recipients
	  Homeserver=Wayneb
	  ExportObject=Recipients
	  ExportObject=ALL
	  HiddenObjects=Yes
	
	Additional query words: Export Page 480
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
