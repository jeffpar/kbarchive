---
layout: page
title: "Q240430: XADM: Recovering a Deleted Protocol Object"
permalink: /kb/240/Q240430/
---

## Q240430: XADM: Recovering a Deleted Protocol Object

	Article: Q240430
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Protocol objects at the site and server levels are installed with Exchange
	Server by default and should not be removed.
	
	MORE INFORMATION
	================
	
	If the Protocol object is missing from the Site or Server container, use one of
	the following methods to restore the Protocol object:
	
	Method 1
	--------
	
	Restore the Dir.edb file from a backup that was made previous to the deletion.
	
	Method 2
	--------
	
	If no service packs have been installed on the Exchange Server computer,
	reinstall Exchange Server by running Setup, and then clicking Reinstall.
	
	Method 3
	--------
	
	If service packs have been applied to the Exchange Server computer, then reapply
	the last service pack.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
