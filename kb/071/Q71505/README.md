---
layout: page
title: "Q71505: WIN.INI Settings for the NEC Graphics Engine"
permalink: /kb/071/Q71505/
---

## Q71505: WIN.INI Settings for the NEC Graphics Engine

{% raw %}

	Article: Q71505
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The NEC Graphics Engine is a video card with 1 MB of onboard memory with an
	internal 256K Degis color pallet. To use the Graphic Engine's internal pallet,
	you need to add the following needs to the WIN.INI file:
	
	     [DGIS]
	     pallet=0
	
	This modification to the WIN.INI file turns off the Windows internal pallet
	manager and enables the Graphic Engine's 256K Degis pallet.
	
	MORE INFORMATION
	================
	
	For more information, contact NEC technical support.
	
	The NEC product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3rdparty 3.0 3.00a 3.0a 3.10 3.1 3.11 adapter display monitor screen KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
