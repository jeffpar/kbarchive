---
layout: page
title: "Q95995: WFWG Err Msg with an ATI Mach 32: &#92;DEV&#92;MS2000&#36; Error..."
permalink: /kb/095/Q95995/
---

## Q95995: WFWG Err Msg with an ATI Mach 32: &#92;DEV&#92;MS2000&#36; Error...

{% raw %}

	Article: Q95995
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Windows for Workgroups with a video card using the Mach
	32 accelerator chip, the following error message appears during startup:
	
	  \DEV\MS2000$ Error: Hardware does not respond.
	
	This problem occurs with various network and video cards.
	
	CAUSE
	=====
	
	
	WORKAROUND
	==========
	
	With some network interface cards (NICs), you can work around this problem by
	changing the card from 16-bit mode to 8-bit mode. For example, the Artisoft AE2
	and AE3 network cards can be placed in 8-bit mode with jumper W9. For specific
	instruction about changing this setting, refer to the documentation for the
	card. For more information, contact the card vendor.
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 err msg 3rdparty adapter nic network interface Orchid 1280+ HP Vectra RS/20 AE3 1280 Acer acros 486/dx2 Gateway 2000 4DX-33 on-board Opti VGA chip set DanPex E-Net 16 bit card NE2000 clone 486/66 VESA Local-Bus Cirrus Logic GD 5422 E2 ZERO-1 Technology Company Limited local bus ATI Graphics Ultra Pro AMI bios 486/50 CNET diamond viper
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
