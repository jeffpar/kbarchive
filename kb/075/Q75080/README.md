---
layout: page
title: "Q75080: Installing MS-DOS 5.x or 6.x on Tandy 2500XL2 or 1000RLX"
permalink: /kb/075/Q75080/
---

## Q75080: Installing MS-DOS 5.x or 6.x on Tandy 2500XL2 or 1000RLX

{% raw %}

	Article: Q75080
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Before you install MS-DOS version 5.0 or later on a Tandy 2500XL2 or Tandy
	1000RLX computer, you must follow the procedure outlined below to disable the
	ROM DOS functionality of the Tandy.
	
	MORE INFORMATION
	================
	
	1. Insert the original floppy disk labeled MS-DOS/GW-BASIC into drive A.
	
	2. At the A prompt, type "SETUPXL2" (without the quotation marks) for the
	  2500XL2 model or "SETUPRLX" (without the quotation marks) for the 1000RLX
	  model, then press ENTER.
	
	3. The BIOS/ROM DOS Setup program loads, displaying a menu of options. Use the
	  ARROW keys to select options. Press the SPACEBAR to change settings (the
	  current settings are the only ones that are displayed).
	
	4. Use the RIGHT ARROW key to select the START-UP PROGRAM option. The available
	  settings are MS-DOS and DESKMATE, with DESKMATE being the default.
	
	5. Press the SPACEBAR once to change the setting from DESKMATE to MS-DOS.
	
	6. Use the DOWN ARROW and LEFT ARROW keys to select the START-UP DEVICE option.
	  The choices are ROM and DISK, with ROM being the default.
	
	7. Press the SPACEBAR once to change the setting from ROM to DISK.
	
	8. Press F2 to update the EEPROM and restart the computer.
	
	9. Install MS-DOS 5.0 or 6.0. Note that you need to install MS-DOS 6.0 manually.
	  (Refer to Chapter 8 in your "Microsoft MS-DOS User's Guide" for version 6.0
	  for instructions.)
	
	The Tandy products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 6.22 5.00 3rdparty 6.00 5.00a 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
