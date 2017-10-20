---
layout: page
title: "Q74271: Northgate OmniKey Dvorak Configuration is MS-DOS Compatible"
permalink: /kb/074/Q74271/
---

## Q74271: Northgate OmniKey Dvorak Configuration is MS-DOS Compatible

{% raw %}

	Article: Q74271
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Northgate Computer Systems OmniKey Ultra keyboard, in any of its Dvorak
	configurations, is completely transparent to MS-DOS versions 3.x and later.
	
	MORE INFORMATION
	================
	
	The OmniKey Ultra keyboard has the capability of changing keyboard layout
	configurations. It contains a processor that receives signals from the keyboard.
	The processor compares that signal to one of its four internal tables: QWERTY
	(normal), Dvorak Standard, Dvorak Right-Handed, or Dvorak Left-Handed. You can
	specify which table the processor look at by using a DIP switch or key
	combination; see the "Keyboard Addendum to OmniKey Ultra User's Guide" for more
	details.
	
	The processor translates the impulse to the character signal that would come from
	a key in the same physical position on a keyboard with the layout of the table
	that the OmniKey keyboard processor is currently looking at. The processor then
	passes along the translated impulse to the PC. The keyboard configuration is
	completely transparent to MS-DOS and can be used with any IBM-compatible PC.
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 4.01a 5.00 hardware 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
