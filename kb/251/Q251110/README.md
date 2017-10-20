---
layout: page
title: "Q251110: FS2000: Distorted or Incorrect Text in Certain Aircraft Gauges"
permalink: /kb/251/Q251110/
---

## Q251110: FS2000: Distorted or Incorrect Text in Certain Aircraft Gauges

{% raw %}

	Article: Q251110
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdisplay kbui fsim kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you fly in Microsoft Flight Simulator 2000 Professional Edition, the text
	in the gauges or control panels of certain aircraft may be distorted or
	incorrectly displayed.
	
	
	CAUSE
	=====
	
	This behavior can occur if video caching or shadowing is enabled in the Basic
	Input/Output System (BIOS) settings for your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable video caching or shadowing in the BIOS settings
	for your computer.
	
	For information about how to do this, please see the printed documentation for
	your computer or motherboard, or contact the manufacturer of your computer or
	motherboard.
	
	For information about how to contact the manufacturer of your computer or
	motherboard, click the appropriate article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	MORE INFORMATION
	================
	
	Video caching or shadowing is a common BIOS feature that copies the video BIOS
	code from the video adapter to an unused area of the computer's main memory.
	This feature can increase video performance for older video adapters that use a
	slow video BIOS read-only memory (ROM) module.
	
	The video BIOS for newer video adapters, especially for AGP-based video adapters,
	is much faster than the computer's main memory. If a newer PCI-based or
	AGP-based video adapter is installed in your computer, you can improve video
	performance and avoid video problems by disabling video caching or shadowing.
	
	Additional query words: 1.00 msgame flightsim fltsim fs2k scrambled corrupt
	
	======================================================================
	Keywords          : kbdisplay kbui fsim kbimu msgame 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2000 kbSimSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
