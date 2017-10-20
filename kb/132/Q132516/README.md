---
layout: page
title: "Q132516: Suspend Command Appears on Start Menu But Does Not Function"
permalink: /kb/132/Q132516/
---

## Q132516: Suspend Command Appears on Start Menu But Does Not Function

{% raw %}

	Article: Q132516
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
	
	When you are using Windows 95 on a computer that supports Advanced Power
	Management (APM), you may find that nothing happens when you click the Suspend
	command on the Start menu.
	
	This problem is known to occur with the following computers:
	
	- Compaq Summit 60 (A5)
	
	CAUSE
	=====
	
	Although the computer supports APM, it does not support the Suspend feature.
	Windows 95 cannot detect whether or not a particular computer supports the
	Suspend feature, and always makes the Suspend command on the Start menu
	available when APM is enabled.
	
	RESOLUTION
	==========
	
	To disable the Suspend command on the Start menu, follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the Power icon.
	
	3. In the Show Suspend Command On Start Menu box, click the Never option button.
	
	For information about upgrading the APM BIOS in your computer so it supports the
	Suspend feature, please contact your computer manufacturer.
	
	Additional query words: green
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
