---
layout: page
title: "Q138082: Game Port Not Detected with Sound Card Already Installed"
permalink: /kb/138/Q138082/
---

## Q138082: Game Port Not Detected with Sound Card Already Installed

{% raw %}

	Article: Q138082
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kbhw win95 kbHardwarekbfaq
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you remove a game port device in Device Manager, Microsoft Windows 95 may not
	detect the game port when you attempt to redetect it.
	
	CAUSE
	=====
	
	This behavior can occur if the game port is located on a sound card that Windows
	95 has already detected. Windows 95 does not detect the game port unless the
	associated sound card drivers are first removed.
	
	RESOLUTION
	==========
	
	To redetect the game port, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Device Manager tab, click the PLUS SIGN (+) next to Sound, Video And
	  Game Controllers to expand the branch.
	
	4. Click each device in the Sound, Video, And Game Controllers branch, and then
	  click Remove. Continue until the branch is empty.
	
	5. Click Close.
	
	6. Double-click Add New Hardware, and then click Next.
	
	7. When you are prompted if you want Windows to search for your new hardware,
	  click Yes, click Next, and then click Next again.
	
	Windows 95 should now automatically detect the game port and reinstall the
	associated sound card drivers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95.
	
	Additional query words: gameport joystick win95x
	======================================================================
	Keywords          : kbenv kbhw win95 kbHardware kbfaq
	Technology        : kbWin95search kbWin95
	Version           : WINDOWS:95
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
