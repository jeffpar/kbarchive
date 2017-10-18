---
layout: page
title: "Q154686: XADM: Options in Admin or User Manager May Be Overwritten"
permalink: kb/154/Q154686/
---

## Q154686: XADM: Options in Admin or User Manager May Be Overwritten

	Article: Q154686
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	General settings changed in Exchange on the Options menu in User Manager for
	Domains may be overwritten by the Microsoft Exchange Administrator program.
	Auto-naming rules and permissions settings changed in the Administrator program
	in the Options dialog box under Tools may be overwritten by User Manager.
	
	CAUSE
	=====
	
	Both Administrator and User Manager save settings on exiting regardless of
	whether changes are made or not. This allows cached information in one of the
	applications to overwrite changes that may have been made by the other.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: autonaming
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
