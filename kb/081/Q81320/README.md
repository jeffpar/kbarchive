---
layout: page
title: "Q81320: Mouse Problems with Windows on KLH and Premier Computers"
permalink: /kb/081/Q81320/
---

## Q81320: Mouse Problems with Windows on KLH and Premier Computers

{% raw %}

	Article: Q81320
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Windows version 3.0 is installed with a serial mouse on the
	following machines
	
	  KLH 386 Model 215
	  KLH 286 Model 195
	  Premier 286 Model 1400
	
	the following problems may occur:
	
	- If the Microsoft Or IBM PS/2 option is selected for the pointing device, the
	  mouse pointer remains frozen in the middle of the screen.
	
	- If the MouseSystems Or (VisiOn On ComX) option is selected for the pointing
	  device, the mouse pointer will disappear as soon as it is moved.
	
	CAUSE
	=====
	
	These problems occur because the above computers have a built-in bus mouse port
	and the motherboard is set to access this port by default.
	
	RESOLUTION
	==========
	
	Disabling the built-in bus port by setting DIP switch number 3 to OFF on the
	motherboard of these machines corrects the above problems.
	
	MORE INFORMATION
	================
	
	If a bus mouse is being used, no problems should occur.
	
	The three machines above are referred to as "Revision 1" machines and are no
	longer in production.
	
	For additional information on these machines, contact Entertainment Marketing
	(Distributor).
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.0 3.0a 3.00 3.00a win30 KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
