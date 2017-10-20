---
layout: page
title: "Q92789: WFWG Fails with 3Com Etherlink Plus (3C505)"
permalink: /kb/092/Q92789/
---

## Q92789: WFWG Fails with 3Com Etherlink Plus (3C505)

{% raw %}

	Article: Q92789
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups does not detect the direct memory access (DMA) channel
	used by the Etherlink Plus card. To set up the DMA channel for Etherlink, use
	the Windows Control Panel to manually set the DMA channel during or after
	installation.
	
	MORE INFORMATION
	================
	
	By default, the Windows for Workgroups Setup program sets the DMA to channel 1,
	which is the factory default for this card. However, since 3Com recommends DMA
	channels 5, 6, or 7 for a 16-bit slot (the most common) this setting may not be
	correct for your card. Therefore, if you have the Etherlink Plus card in a
	16-bit slot and have changed your DMA channel to 5, 6, or 7, you must run
	Control Panel and adjust the DMA Channel setting.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
