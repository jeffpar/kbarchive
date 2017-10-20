---
layout: page
title: "Q82049: &quot;No COM Ports Available&quot; Error on IBM PS/2 Computer"
permalink: /kb/082/Q82049/
---

## Q82049: &quot;No COM Ports Available&quot; Error on IBM PS/2 Computer

{% raw %}

	Article: Q82049
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear when you start the Microsoft Windows
	Terminal application on an IBM PS/2 machines:
	
	  No Com ports available; release one of the com ports and try again
	
	CAUSE
	=====
	
	This error message can occur on PS/2 computers if the serial port(s) on the
	machine have been disabled in the system setup.
	
	WORKAROUND
	==========
	
	Follow these steps to determine the status of the serial ports and adjust them
	as necessary:
	
	1. Use the IBM Reference Disk to start your system.
	
	2. When the IBM Logo Screen appears, press ENTER.
	
	3. From the Main menu, choose option 2 for Set Configuration.
	
	4. From the Set Configuration menu, choose option 2 for Change Configuration.
	
	5. From the Change Configuration menu, choose Serial Port by pressing the DOWN
	  ARROW key. To view and modify the Serial Port status, press the F6 key to
	  select the appropriate port.
	
	6. Press the F10 key to save the configuration.
	
	7. Press the F3 key to exit the Set Configuration menu. Press the F3 key again
	  to exit the Main menu.
	
	8. Press ENTER to restart your system.
	
	Additional query words: 3.0 3.00 3.0a 3.00a 3.1 3.10 3.11 ps2
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
