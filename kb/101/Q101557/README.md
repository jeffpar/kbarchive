---
layout: page
title: "Q101557: MENUDEFAULT Timer Not Working in Submenus"
permalink: /kb/101/Q101557/
---

## Q101557: MENUDEFAULT Timer Not Working in Submenus

{% raw %}

	Article: Q101557
	Product(s): Microsoft Disk Operating System
	Version(s): 6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using multiple configurations, the MENUDEFAULT timer option does not work
	for submenus if the timer for the top-level menu is interrupted. This operation
	is by design.
	
	The MENUDEFAULT timer is designed to give you a certain amount of time to select
	a configuration of your choice. If you do not respond within the allotted time
	period, the assigned default configuration is executed. However, if you select a
	submenu before the timer reaches zero, the timer for the submenu is not
	available.
	
	NOTE: The MENUDEFAULT timer can be put under the submenu options. This gives you
	an additional timer count for the new MENUDEFAULT choice.
	
	Additional query words: 6.22 6.00 menu multi config multiconfig 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : :6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
