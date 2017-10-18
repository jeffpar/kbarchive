---
layout: page
title: "Q151782: XFOR: Dirsync Modifies Causing Names to Disappear from Exchange"
permalink: kb/151/Q151782/
---

## Q151782: XFOR: Dirsync Modifies Causing Names to Disappear from Exchange

	Article: Q151782
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Names included in directory synchronization (dirsync) from a Microsoft Mail
	postoffice do not show up in the Microsoft Exchange Global Address List (GAL).
	Or, names from Microsoft Mail that were in the GAL disappear after a modify
	transaction that contains template information is received.
	
	CAUSE
	=====
	
	There is a logic error in handling template information in a modify transaction.
	This problem only occurs when the transaction is a modify and the second line of
	the transaction is template information over 32 characters in length, as in the
	following example:
	
	  M Katie JordanMS:TOON/TOWN/WCOYOTE
	  - Internal Mail Stop:/ Trey Research #86
	
	NOTE: According to the Microsoft Mail dirsync specification, this example is a
	valid dirsync transaction.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Ensure that all modify transactions have two lines of address information and
	  that template information always starts on line three, as in the following
	  example:
	
	  M Katie JordanMS:TOON/TOWN/KJORDAN
	  Katie JordanMS:TOON/TOWN/KJORDAN
	  - Internal Mail Stop:/ Trey Research #86
	
	  -OR-
	
	- Ensure that the first line of template information is less than 32 characters
	  long.
	
	The Microsoft Mail dirsync process by default will form modifies in this manner.
	The example described in the CAUSE section above can only happen when you are
	using either a manual IMPORT or a third-party dirsync product.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: dir-sync
	
	======================================================================
	Keywords          : kbusage kbBug kbISS 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
