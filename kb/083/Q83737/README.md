---
layout: page
title: "Q83737: Wyse 386/SX 3016 Beeps Erratically in 386 Enhanced Mode"
permalink: /kb/083/Q83737/
---

## Q83737: Wyse 386/SX 3016 Beeps Erratically in 386 Enhanced Mode

{% raw %}

	Article: Q83737
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Wyse Technical Support has confirmed that if Windows 3.1 is run in 386 enhanced
	mode on a Wyse Decision model 386/SX 16, 20, or 25, the following symptoms may
	occur after you leave the computer idle for a short period of time:
	
	- The speaker beeps erratically if you press a key.
	
	- The alarm sounds if you type in any dialog box.
	
	RESOLUTION
	==========
	
	To prevent this behavior from occurring, disable the clock speed switch, as
	follows:
	
	1. Insert the Wyse Setup and Test Diskette in drive A.
	
	2. Turn on the monitor and the system, and wait approximately 40 seconds for the
	  Setup and Test Program Main Menu to be displayed on the monitor screen.
	
	3. Press the F1 key. The Setup System Configuration screen will be displayed
	  with the designation next to "Base memory" selected.
	
	4. Press the DOWN ARROW key until the designation next to "Clock Speed Switch"
	  is selected.
	
	5. Press the F2 key until the designation changes to OFF.
	
	6. Remove the Setup and Test Diskette.
	
	7. Press the F5 key twice to save the new system configuration and reboot the
	  system.
	
	Once the computer reboots, the system is ready for proper operation.
	
	MORE INFORMATION
	================
	
	The problem described above occurs because some Wyse 386 machines experience
	keyboard problems while running Windows in 386 enhanced mode. If the machine is
	left idle for a short period of time and then keyboard is touched, the machine
	will behave erratically and then operate as normal.
	
	For additional information about this problem, contact Wyse Technical Support. To
	obtain the Wyse Technical Support phone number, query on the following words in
	the Microsoft Knowledge Base:
	
	  wyse and phone and pss
	
	
	The Wyse products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.1 sound loud
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
