---
layout: page
title: "Q177203: ATI 3D RAGE PRO Chipset Requires Windows NT SP3"
permalink: /kb/177/Q177203/
---

## Q177203: ATI 3D RAGE PRO Chipset Requires Windows NT SP3

{% raw %}

	Article: Q177203
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install either the ATI Expert@Play or Expert@Work PCI Video Adapter
	drivers, the system displays the following message:
	
	  Invalid Display Settings
	
	  The currently selected display resolution is invalid.
	
	  The default resolution has been temporarily used by the system.
	
	  Please use the Display option in the Windows NT Control Panel to
	  select your preferred display resolution.
	
	This message is displayed although a valid resolution supported by the adapter
	has been selected.
	
	CAUSE
	=====
	
	On systems with a PCI bridge, the adapter requires that Windows NT 4.0 Service
	Pack 3 be installed.
	
	
	MORE INFORMATION
	================
	
	You can determine if Service Pack 3 is installed by checking the Version tab in
	the Window NT Diagnostics tool. To get to the Windows NT Diagnostics tool, on
	the Start menu, click Programs, and then click Administrative Tools (Common).
	Select Windows NT Diagnostics.
	
	RESOLUTION
	==========
	
	Install Windows NT 4.0 Service Pack 3 or later.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
