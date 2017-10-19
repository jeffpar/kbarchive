---
layout: page
title: "Q198815: XCON: Chat MMC Snap-in Requires Double-click to Sort By Priority"
permalink: /kb/198/Q198815/
---

## Q198815: XCON: Chat MMC Snap-in Requires Double-click to Sort By Priority

	Article: Q198815
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 05-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Chat snap-in added to the Microsoft Management Console and you
	try to sort a list of extensions by priority, the list is not sorted.
	
	CAUSE
	=====
	
	This action requires a double-click instead of the expected single-click.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Management Console
	with Chat included on the Exchange 5.5 Server CD.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Expand the local server container.
	
	2. Click the Extensions container.
	
	3. Add at least two extensions.
	
	4. Click once on the Name of Extension header to sort the list by extension
	  name.
	
	5. Click once on the Priority header to sort the list by priority.
	
	Result: The list is not sorted by priority.
	
	Additional query words: mcischat
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
