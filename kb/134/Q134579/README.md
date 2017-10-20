---
layout: page
title: "Q134579: PCMCIA Devices Stop Working on Compaq Elite Laptop"
permalink: /kb/134/Q134579/
---

## Q134579: PCMCIA Devices Stop Working on Compaq Elite Laptop

{% raw %}

	Article: Q134579
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
	
	After you dock or undock a Compaq Elite laptop computer, the computer's PCMCIA
	devices may stop working. Also, multiple disabled PCMCIA controllers may appear
	in Device Manager.
	
	CAUSE
	=====
	
	Early versions of the Compaq Elite Plug and Play BIOS may report incorrect
	resources for the PCMCIA controller. When this occurs, Windows 95 disables the
	controller.
	
	RESOLUTION
	==========
	
	To remove the incorrect PCMCIA devices and install the proper one, follow these
	steps:
	
	1. In Control Panel, double-click the System icon.
	
	2. On the Device Manager tab, click each PCMCIA device and then click Remove.
	  Remove all the PCMCIA devices.
	
	3. Click Computer, and then click Refresh.
	
	4. Click OK.
	
	To prevent the problem from occurring, contact Compaq to inquire about obtaining
	an updated Plug and Play BIOS dated 5/1/95 or later.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
