---
layout: page
title: "Q159882: Slow Shutdown When LM Announce Is Enabled"
permalink: /kb/159/Q159882/
---

## Q159882: Slow Shutdown When LM Announce Is Enabled

{% raw %}

	Article: Q159882
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you shut down or use the Suspend/Resume feature in Windows 95 or Windows 95
	OEM Service Release 2 (OSR2) and you are connected to a network, the shutdown,
	suspend, or resume may seem to take a long time.
	
	CAUSE
	=====
	
	This behavior can occur if LM Announce messages are being generated.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click File And Print Sharing For Microsoft Networks, and then click
	  Properties.
	
	3. In the LM Announce box, click No.
	
	4. Click OK.
	
	5. When you are prompted, restart the computer.
	
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
