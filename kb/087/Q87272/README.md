---
layout: page
title: "Q87272: Always On Top Applications May Hang Windows 3.1 Tutorial"
permalink: /kb/087/Q87272/
---

## Q87272: Always On Top Applications May Hang Windows 3.1 Tutorial

{% raw %}

	Article: Q87272
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows 3.1 online Tutorial may hang when an application is running that has
	its Always On Top option enabled.
	
	CAUSE
	=====
	
	This problem will only occur if the Always On Top application is over a portion
	of the Tutorial window that is used when it is in demonstration (demo) mode.
	
	The Windows Tutorial in Program Manager will go into a demo mode where it shows
	how to double-click on a button, icon, and so on. If the button, icon, or
	whatever the demo tries to activate is under the Always On Top application, the
	tutorial will not be able to accept the mouse click and the tutorial will lock
	the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the Windows 3.1 Tutorial. We
	are researching this problem and will post new information here as it becomes
	available.
	
	WORKAROUND
	==========
	
	If you are running Windows in 386 enhanced mode, do the following to regain
	control of the system:
	
	1. Press the CTRL+ALT+DEL key combination ONCE. The blue warning screen will
	  appear.
	
	2. Press ENTER. A message will appear that states:
	
	  application that has stopped responding to the system ( Windows Tutorial )
	  will be terminated.
	
	You may not get the option of pressing the ENTER key on the first try. Press any
	key to return to Windows and press CTRL+ALT+DEL again until the option appears.
	
	If you are running Windows in standard mode, you must reboot the computer.
	
	Additional query words: 3.10 3.11 lockup
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
