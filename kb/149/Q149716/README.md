---
layout: page
title: "Q149716: New Hardware Is Added to All Hardware Profiles"
permalink: /kb/149/Q149716/
---

## Q149716: New Hardware Is Added to All Hardware Profiles

{% raw %}

	Article: Q149716
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add new hardware on a docking station with the Add New Hardware
	Wizard, Windows 95 may become unstable or generate hardware-oriented error
	messages when the computer is undocked.
	
	CAUSE
	=====
	
	This behavior can occur if Windows 95 has installed the new hardware in all
	configurations (both docked and undocked).
	
	RESOLUTION
	==========
	
	Use either method:
	
	- If the hardware was added in the docked state and the hardware is not present
	  in the undocked state, remove the device in Device Manager. If the hardware
	  was added in the undocked state, remove the device from the docked
	  configuration.
	
	  NOTE: Disabling the device in the unwanted configuration in Device Manager may
	  not resolve the conflicts. Be sure to click the missing device and click
	  Remove, and then confirm which hardware profile you want to modify.
	
	- Boot the computer in the docked configuration first. Run the Add New Hardware
	  Wizard, and allow it to detect the devices. Then, boot in the undocked
	  configuration, and run the Add New Hardware Wizard again.
	
	  Windows 95 will detect that the device is not present in the alternate
	  configuration and prompt you to remove the device from that configuration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: profiles
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
