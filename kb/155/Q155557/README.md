---
layout: page
title: "Q155557: Errors When a FlowModel Object Is Linked"
permalink: kb/155/Q155557/
---

## Q155557: Errors When a FlowModel Object Is Linked

	Article: Q155557
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	FlowModel lets you insert objects into a diagram. If one Flowmodel diagram is
	linked to another FlowModel diagram, an access violation occurs when the program
	is closed.
	
	CAUSE
	=====
	
	FlowModel does not handle OLE callbacks properly when linked to itself. Objects
	from other programs can be linked to FlowModel without problems. The same errors
	occur on earlier versions of Windows NT.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt winnt
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
