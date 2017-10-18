---
layout: page
title: "Q248886: &quot;Fatal Exception 0E&quot; Error in IFSMGR When Starting Windows 95"
permalink: kb/248/Q248886/
---

## Q248886: &quot;Fatal Exception 0E&quot; Error in IFSMGR When Starting Windows 95

	Article: Q248886
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbnetwork win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your Windows 95-based computer, you may receive the following
	error message:
	
	  A Fatal Exception 0E has occurred at 0028:C0026416 in VXD IFSMGR (01) +
	  00003672
	
	CAUSE
	=====
	
	This behavior can occur if your network contains only Windows 95-based computers
	and several log on attempts occur at the same time.
	
	RESOLUTION
	==========
	
	To resolve this behavior, disable the browse server duties on all but one of the
	computers in your network:
	
	1. Right-click Network Neighborhood, and then click Properties.
	
	2. On the Configuration tab, click the File And Printer Sharing For Microsoft
	  Networks component, and then click Properties.
	
	3. In the Property box, click Browse Master, and then click Disabled in the
	  Value box.
	
	4. Click OK.
	
	NOTE: At least one computer in each workgroup must have the ability to become
	themaster browse server. If browse server capability is disabled on all the
	computers in a network, browse functionality is disabled. A network storm will
	ensue as clients will be unable to locate the browse master and will force an
	election.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
