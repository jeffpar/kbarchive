---
layout: page
title: "Q137363: Problems with ATI Mach32 Video Adapter on MCA Computer"
permalink: /kb/137/Q137363/
---

## Q137363: Problems with ATI Mach32 Video Adapter on MCA Computer

{% raw %}

	Article: Q137363
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
	
	When you use an ATI Graphics Ultra Pro (Mach32) video adapter in a Microchannel
	(MCA) computer, the Windows 95 icons, menu arrows, and minimize and maximize
	buttons may not appear in Windows 95.
	
	You may also experience screen redraw problems when you use an 800 x 600 x 256
	color resolution with this video adapter.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. Use any text editor (such as Notepad) to edit the System.ini file in the
	  Windows folder. Add the following line to the [Display] section of the file:
	
	     MemMapRegs=0
	
	  After you add this line, save and then close the System.ini file.
	
	2. Change the hardware jumper on the video adapter to enable VGA mode, and then
	  disable the on-board VGA controller on the motherboard. For information about
	  configuring the video adapter and motherboard, please refer to each product's
	  documentation.
	
	MORE INFORMATION
	================
	
	Adding the "MemMapRegs=0" line to the System.ini file disables the use of
	memory-mapped I/O for the adapter, which may be necessary for MCA computers.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
