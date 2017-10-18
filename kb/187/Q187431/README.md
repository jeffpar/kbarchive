---
layout: page
title: "Q187431: TSAdmin Does Not List Servers Correctly"
permalink: kb/187/Q187431/
---

## Q187431: TSAdmin Does Not List Servers Correctly

	Article: Q187431
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Terminal Server Administration is initially filling in the tree control in
	the left-hand pane, some server entries may be duplicated. If these entries are
	scrolled out of the window and then scrolled back so they are viewable, they
	come up correctly. Also, if you click one of the duplicate entries, the name
	will change to the correct server name.
	
	CAUSE
	=====
	
	Displaying the servers' NetBIOS name is controlled by the Common Tree Control.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Windows NT version
	4.0, Terminal Server Edition.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
