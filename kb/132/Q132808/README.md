---
layout: page
title: "Q132808: Error Message Attempting to Add Users in Network Dialog Box."
permalink: /kb/132/Q132808/
---

## Q132808: Error Message Attempting to Add Users in Network Dialog Box.

{% raw %}

	Article: Q132808
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have user-level access control enabled in Windows 95 and click OK in the
	File And Print Sharing dialog box or Add on the Remote Administration tab in the
	Passwords Properties dialog box, you may receive the following error message:
	
	  You cannot view the list of users at this time. Please try again later.
	
	CAUSE
	=====
	
	The list of users may not be available if the authenticating server is not
	active on the network or cannot be found because of network configuration
	problems.
	
	RESOLUTION
	==========
	
	Verify that user-level access control is configured correctly. To do so, follow
	these steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click the Access Control tab.
	
	3. In the "Obtain list of users and groups from" box, note the name that is
	  specified. This should be the name of your network domain.
	
	
	======================================================================
	Keywords          : kberrmsg kbnetwork msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
