---
layout: page
title: "Q152989: XADM: French Connectors Disks not Recognized"
permalink: /kb/152/Q152989/
---

## Q152989: XADM: French Connectors Disks not Recognized

{% raw %}

	Article: Q152989
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 31-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the French version of Microsoft Exchange from the Select CDs
	into an existing Microsoft Exchange Site, it will ask you for a connectors disk
	that you can create from the (Select Server Pool) PC Server 7 disk. None of the
	connectors disks that you create will be recognized by the Microsoft Exchange
	Setup program. You will not be able to complete the installation without the
	connectors disk.
	
	RESOLUTION
	==========
	
	On any of the French connectors disks that you created, rename Install.exe to
	Setup.exe and retry the installation.
	
	MORE INFORMATION
	================
	
	The version of Microsoft Exchange that is shipped on the Select CD's is the
	Single Server version. When you select Install into an Existing Site, the
	Microsoft Exchange Message Transfer Agent (MTA) must be enabled. To enable this,
	you must provide at least one connector disk.
	
	
	Additional query words: french premier francais x400 smtp site
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
