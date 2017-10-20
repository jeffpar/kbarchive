---
layout: page
title: "Q130975: Resource Conflict with Standard VGA Video Driver"
permalink: /kb/130/Q130975/
---

## Q130975: Resource Conflict with Standard VGA Video Driver

{% raw %}

	Article: Q130975
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
	
	When you run the Add New Hardware Wizard to detect a video adapter, you receive
	the following error message:
	
	  You are using other hardware that conflicts with the hardware you are trying
	  to install.
	
	  You have two choices: You can continue or exit.
	
	  To continue installing the software, click Next. The hardware will not work
	  properly until you resolve the conflict. If you choose to continue, Windows
	  will provide a troubleshooting tool to help you resolve the conflict when you
	  finish the wizard.
	
	  To exit without installing the software, click Cancel.
	
	Device Manager shows a conflict with the standard VGA driver and the new video
	card that has been detected.
	
	CAUSE
	=====
	
	Most video cards are compatible with the standard VGA driver. When you run the
	Add New Hardware Wizard, you are telling Windows 95 that you have changed
	hardware when, in actuality, you have not. Therefore, both the standard VGA
	driver and the new video driver try to initialize the same adapter.
	
	RESOLUTION
	==========
	
	When you change the display driver, use the Change Display Type option in
	Display properties. To do so, follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the Display icon.
	
	3. Click the Settings tab.
	
	4. Click the Change Display Type button.
	
	5. In the Adapter Type section, click the Change button.
	
	6. If the video adapter that is installed in your computer is displayed, click
	  it. If it is not, click the Show All Devices option button, click the
	  manufacturer of the video card, then click the correct model.
	
	This procedure replaces the standard VGA adapter with the adapter you choose and
	does not result in a resource conflict.
	
	MORE INFORMATION
	================
	
	You should run the Add New Hardware Wizard only when you change the physical
	video adapter, not when you want to change the video driver.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
