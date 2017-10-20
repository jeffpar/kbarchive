---
layout: page
title: "Q134498: 101-Rom Error Message in Compaq Concerto Docking System"
permalink: /kb/134/Q134498/
---

## Q134498: 101-Rom Error Message in Compaq Concerto Docking System

{% raw %}

	Article: Q134498
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Windows 95 on a Compaq Concerto computer while it is docked, you
	may receive the following error message when the computer restarts in the
	docking station:
	
	  101-ROM Error
	
	After you receive the error message, the computer does not start Windows 95.
	
	CAUSE
	=====
	
	During Windows 95 setup, the Concerto BIOS makes incorrect settings to the
	built-in Ethernet adapter, preventing the computer from starting Windows 95
	while it is inserted in the docking station.
	
	RESOLUTION
	==========
	
	Contact Compaq for instructions about how to correct the docking station
	settings. Compaq can also provide you with an updated BIOS that corrects the
	problem.
	
	MORE INFORMATION
	================
	
	Early versions of the Compaq Concerto BIOS allowed the built-in Ethernet
	Controller EPROMs to be reprogrammed by the BIOS to incorrect values. This
	problem appears to be common when setting up Windows 95 on a Compaq Concerto
	with an early BIOS.
	
	We do not know the exact BIOS version that corrects the problem, but versions
	released after 7/1/95 are known to work correctly.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
