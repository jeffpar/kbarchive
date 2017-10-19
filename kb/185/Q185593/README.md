---
layout: page
title: "Q185593: XFOR: Blank Firstname, Lastname Fields with cc:Mail Dirsync"
permalink: /kb/185/Q185593/
---

## Q185593: XFOR: Blank Firstname, Lastname Fields with cc:Mail Dirsync

	Article: Q185593
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The cc:Mail custom recipients created by the cc:Mail directory synchronization
	process do not have a First Name or Last Name field.
	
	CAUSE
	=====
	
	The cc:Mail directory lists users as "First Last" and not "Last, First". The
	directory synchronization process depends on the comma separating the last name
	from the first name. Because there is no comma, directory synchronization does
	not assign anything to the First Name or Last Name fields in the Exchange
	directory.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the following fix or wait for the next Microsoft
	Exchange Server service pack.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: Exchange Connector for Lotus cc:Mail blank lastname CR
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
