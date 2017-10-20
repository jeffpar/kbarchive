---
layout: page
title: "Q146841: XCLN: Extra Mail Traffic Generated"
permalink: /kb/146/Q146841/
---

## Q146841: XCLN: Extra Mail Traffic Generated

{% raw %}

	Article: Q146841
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you send mail to a user on a different postoffice (PO), there may be a lot
	of extra mail traffic. This extra traffic does not appear when the recipient is
	on the same PO as the sender.
	
	RESOLUTION
	==========
	
	To avoid this extra traffic, check the Use Local Copy and Use External Delivery
	Agent boxes on the MS Mail configuration page of Remote Configuration or LAN
	Configuration, depending on the connection type chosen. You will also need to
	download the address book. If the address book is absent, the Microsoft Exchange
	client will try to use the address book on the Microsoft Exchange Server even if
	the Use Local Copy box is checked.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
