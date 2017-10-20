---
layout: page
title: "Q258220: XFOR: Migration Wizard Does Not Support cc:Mail Database 7"
permalink: /kb/258/Q258220/
---

## Q258220: XFOR: Migration Wizard Does Not Support cc:Mail Database 7

{% raw %}

	Article: Q258220
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbtool exc5 exc55
	Last Modified: 30-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Exchange Server Migration Wizard does not support Lotus cc:Mail DB7
	postoffices. Lotus cc:Mail Mobile (cc:Mobile) versions 2.x and 6.x both use this
	database format. As a result, the Migration Wizard cannot import this data into
	the Exchange Server computer or a .pst file.
	
	MORE INFORMATION
	================
	
	- The DB6 postoffice is used by earlier cc:Mail clients and postoffices.
	
	- The DB7 postoffice is used exclusively for cc:Mobile postoffices (local
	  copies of a user's mailbox on another postoffice).
	
	- The DB8 postoffice is the current standard postoffice for cc:Mail version 6
	  and later.
	
	You can copy data from DB7 postoffices back to an existing DB8 postoffice, and
	then migrate from there.
	
	Additional query words: XMRP
	
	======================================================================
	Keywords          : kbtool exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
