---
layout: page
title: "Q130235: Windows 95 Detects Disabled Network Card"
permalink: /kb/130/Q130235/
---

## Q130235: Windows 95 Detects Disabled Network Card

{% raw %}

	Article: Q130235
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you remove a built-in network adapter from Device Manager and disable it
	in your computer's CMOS settings, Windows 95 redetects the network adapter when
	you restart Windows 95.
	
	CAUSE
	=====
	
	Windows 95 is designed to detect and enumerate built-in network adapters when
	you start Windows 95 even if the network adapter is disabled in the computer's
	CMOS settings. This behavior is in accordance with the Plug and Play
	specification.
	
	
	RESOLUTION
	==========
	
	If you do not want to use a built-in network adapter, you must disable it in
	Device Manager and in the computer's CMOS settings. To disable a built- in
	network card in Device Manager, follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the System icon.
	
	3. Click the Device Manager tab, double-click Network Adapters, then
	  double-click the network adapter you want to disable.
	
	4. In the Device Usage section, click the Original Configuration (Current) check
	  box to clear it.
	
	5. Click OK.
	
	MORE INFORMATION
	================
	
	If you disable the network adapter in Device Manager and the computer's CMOS
	settings, it will not consume any resources. If you disable the network adapter
	in Device Manager but not in the computer's CMOS settings, it will continue to
	consume resources.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
