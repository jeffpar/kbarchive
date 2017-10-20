---
layout: page
title: "Q222584: BUG: Blue Screen Occurs When Disabling a USB Controller"
permalink: /kb/222/Q222584/
---

## Q222584: BUG: Blue Screen Occurs When Disabling a USB Controller

{% raw %}

	Article: Q222584
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; Win95:
	Operating System(s): 
	Keyword(s): kbDDK kbKMode kbOSWin95OSR210 kbOSWin95OSR250 kbVideo kbOSWin95 kbVideoTech
	Last Modified: 01-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 Driver Development Kit (DDK) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running on Windows 95 OSR 2.1 or OSR 2.5, a blue screen appears when
	manually or programmatically disabling a USB host controller.
	
	CAUSE
	=====
	
	This problem occurs because of a fault in the USB host controller driver.
	
	RESOLUTION
	==========
	
	There is no workaround for Windows 95 OSR 2.1 or 2.5. The problem does not occur
	under Windows 98. A USB controller can be successfully disabled using Device
	Manager, or programmatically via DiChangeState.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	If a user tries to disable a USB host controller via Device Manager or via a
	DiChangeState call, a blue screen occurs because of a fault in the USB host
	controller driver (Uhcd.sys or Openhci.sys).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDDK kbKMode kbOSWin95OSR210 kbOSWin95OSR250 kbVideo kbOSWin95 kbVideoTech 
	Technology        : kbAudDeveloper kbWin95search kbWin95DDKSearch kbWinDDKSearch kbZNotKeyword3 kbWin95DDK
	Version           : WINDOWS:95; Win95:
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
