---
layout: page
title: "Q146510: XADM: General Descriptions of the OAB Files"
permalink: /kb/146/Q146510/
---

## Q146510: XADM: General Descriptions of the OAB Files

	Article: Q146510
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Here are general descriptions of the OAB files:
	
	Tmplts.oab = Strings for dialog boxes and anything that is static per OAB and not
	per object. Therefore, it doesn't increase if you just add additional objects to
	your directory.
	
	Details.oab = Contains all the object details (those that were included in
	generation of the OAB) except for display name.
	
	Browse.oab = This is the core file. It contains the object type, display name,
	and a pointer into the Details.oab for each object.
	
	Rdndex.oab = Index for resolving Relative Distinguished Names.
	
	Anrdex.oab = Index for resolving Ambiguous Names.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
