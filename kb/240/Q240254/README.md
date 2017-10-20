---
layout: page
title: "Q240254: Only Drive C Is Available When You Add Fonts"
permalink: /kb/240/Q240254/
---

## Q240254: Only Drive C Is Available When You Add Fonts

{% raw %}

	Article: Q240254
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Install New Font on the File menu in the Fonts folder, only drive
	C may be available.
	
	Or, when you attempt to add new drivers using the Multimedia tool in Control
	Panel, only drive C may be available.
	
	RESOLUTION
	==========
	
	To resolve this issue, install your network adapter driver. If you do not have a
	network adapter available, install the MS Loopback adapter using the following
	steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	2. Click the Adapters tab, and then click Add.
	
	3. Click the appropriate network adapter or the MS Loopback Adapter, and then
	  click OK.
	
	4. Insert the Windows NT CD-ROM if you are prompted, and then click Continue.
	
	5. Click Close, and then restart the computer when you are prompted to do so.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
