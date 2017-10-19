---
layout: page
title: "Q136462: SMC WD800x Network Adapter Settings Not Detected"
permalink: /kb/136/Q136462/
---

## Q136462: SMC WD800x Network Adapter Settings Not Detected

	Article: Q136462
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
	
	You may not be able to access the network after you install Windows 95 on a
	computer with an SMC WX800x network adapter.
	
	CAUSE
	=====
	
	Although Windows 95 correctly detects that this network adapter is installed, it
	does not detect the resources used by the adapter unless there is a Protocol.ini
	file with the correct settings.
	
	If there is no Protocol.ini file, Windows 95 uses the default resource settings
	of IRQ 3 and RAM C000.
	
	If the network adapter in your computer does not use these settings and there is
	no Protocol.ini file with the correct settings, the network adapter does not
	function properly.
	
	RESOLUTION
	==========
	
	To resolve this problem, set the correct resource settings for the network
	adapter in Windows 95. To do so, follow these step:
	
	1. In Control Panel, double-click the System icon.
	
	2. On the Device Manager tab, double-click the Network Adapters branch.
	
	3. Double-click the SMC network adapter.
	
	4. On the Resources tab, click the Use Automatic Settings check box to clear it.
	
	5. Click the resource you want to change, and then click the Change Setting
	  button.
	
	6. Enter the correct value for the resource, and then click OK.
	
	7. Repeat steps 5-6 for any other resource settings you want to change.
	
	8. Click OK until you return to Control Panel.
	
	9. When you are prompted to restart your computer, do so.
	
	Additional query words: 8000 8003 8003E
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
