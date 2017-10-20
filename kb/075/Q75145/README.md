---
layout: page
title: "Q75145: Using Serial Microsoft Mouse with Bus Mouse Card Installed"
permalink: /kb/075/Q75145/
---

## Q75145: Using Serial Microsoft Mouse with Bus Mouse Card Installed

{% raw %}

	Article: Q75145
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.20,3.21,3.30,3.30a,4.0,4.01,4.01a,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.20, 3.21, 3.30, 3.30a, 4.0, 4.01, 4.01a, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A serial Microsoft Mouse will not function correctly if a Microsoft bus mouse
	card is installed in the machine.
	
	The Microsoft Mouse driver will detect the presence of the bus card before it
	detects the mouse connected to the serial port. The Microsoft Mouse driver will
	then try to use the card. The only solution is to remove the bus card from your
	machine.
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 4.01 4.01a 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS500 kbMSDOS401
	Version           : MS-DOS:3.20,3.21,3.30,3.30a,4.0,4.01,4.01a,5.0
	
	=============================================================================
	

{% endraw %}
