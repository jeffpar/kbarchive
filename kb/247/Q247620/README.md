---
layout: page
title: "Q247620: XCLN: Clients Cannot Download OAB After Exchange Server Upgrade"
permalink: /kb/247/Q247620/
---

## Q247620: XCLN: Clients Cannot Download OAB After Exchange Server Upgrade

	Article: Q247620
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade Microsoft Exchange Server to version 5.5, users who are
	running earlier Exchange clients may receive an error message stating that the
	server is unavailable when they attempt to download the Offline Address Book
	(OAB).
	
	RESOLUTION
	==========
	
	To resolve this issue, specify Microsoft Exchange 4.0 and 5.0 compatibility in
	the DS Site Configuration container. Follow these steps:
	
	1. In Exchange Administrator, click the Configuration container, and then click
	  the DS Site Configuration object.
	
	2. Click the Offline Address Book tab, and then click the Microsoft Exchange 4.0
	  and 5.0 compatibility check box to select it.
	
	  NOTE: If this check box is already selected, click to clear it, and then click
	  again to reselect it.
	
	3. Click Generate All.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
