---
layout: page
title: "Q134522: Cannot Run Fleet Defender F14 Tomcat"
permalink: /kb/134/Q134522/
---

## Q134522: Cannot Run Fleet Defender F14 Tomcat

{% raw %}

	Article: Q134522
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
	
	When you try to start Fleet Defender F14 Tomcat version 1.0 by MicroProse, you
	may receive the following error message:
	
	  F14
	
	  This program has performed an illegal operation and will be terminated. Quit
	  all programs, and then restart your computer.
	
	CAUSE
	=====
	
	Fleet Defender requires expanded memory, and will not run if no expanded memory
	is available.
	
	
	RESOLUTION
	==========
	
	Use the following steps to make expanded memory available for the game:
	
	1. Use the right mouse button to click the Fleet Defender program icon, and then
	  click Properties on the menu that appears.
	
	2. Click the Memory tab.
	
	3. If the Expanded Memory box contains the message "The computer is not
	  configured for expanded memory in MS-DOS sessions," click the Details button
	  and follow the instructions.
	
	4. Set the Expanded (EMS) Memory setting to Auto.
	
	5. Click OK until the dialog box closes.
	
	To start the program, double-click its icon instead of typing "f14" at the
	command prompt.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
