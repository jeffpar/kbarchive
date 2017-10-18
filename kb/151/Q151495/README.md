---
layout: page
title: "Q151495: XADM: Priv.edb not Smaller After Running Edbutil /D"
permalink: kb/151/Q151495/
---

## Q151495: XADM: Priv.edb not Smaller After Running Edbutil /D

	Article: Q151495
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Edbutil /D performs off-line compaction of the Private Information Store. You
	might notice that the size of the Priv.edb file does not decrease after you run
	Edbutil when you have just deleted a large number of users using the Microsoft
	Exchange Administrator program.
	
	MORE INFORMATION
	================
	
	After a user is deleted, a background cleanup thread marks the objects owned by
	that user as deleted. The disk space can only be recovered by Edbutil after this
	process is complete and if a large number of users are deleted, it will take a
	while.
	
	The background cleanup thread logs entries in the Windows NT Application Event
	log if the "Background Cleanup" diagnostic logging option in the Private
	Information Store is set to Medium.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
