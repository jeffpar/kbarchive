---
layout: page
title: "Q132114: Sound Blaster 16 Incorrectly Detected After Being Removed"
permalink: /kb/132/Q132114/
---

## Q132114: Sound Blaster 16 Incorrectly Detected After Being Removed

{% raw %}

	Article: Q132114
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
	
	If you remove the Creative Labs Sound Blaster 16 sound card in Device Manager,
	and then use the Add New Hardware Wizard to detect and re-install it, the sound
	card may be incorrectly detected as an Ad Lib Gold Compatible (OPL3) sound card.
	
	CAUSE
	=====
	
	Removing the Sound Blaster 16 sound card in Device Manager leaves the device in
	an unrecoverable state. As a result, the Add New Hardware Wizard cannot reliably
	detect the card.
	
	RESOLUTION
	==========
	
	To work around this problem, turn your computer off and then back on before you
	run the Add New Hardware Wizard. If you have already run the Add New Hardware
	Wizard, use the following steps to remove the incorrectly detected sound card:
	
	1. Use the right mouse button to click My Computer, then click Properties on the
	  menu that appears.
	
	2. Click the Device Manager tab.
	
	3. Double-click the Sound, Video, And Game Controllers branch to expand it.
	
	4. Click the Ad Lib Gold Compatible (OPL3) sound card.
	
	5. Click Remove.
	
	6. Click OK.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
