---
layout: page
title: "Q82468: Hewlett-Packard Mouse Problems on HP QS 16s"
permalink: /kb/082/Q82468/
---

## Q82468: Hewlett-Packard Mouse Problems on HP QS 16s

{% raw %}

	Article: Q82468
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Microsoft Windows on a Hewlett-Packard HP QS 16s machine (an older HP
	Vectra model) with an HP mouse, the system may stop responding (hang) if you
	move the mouse while playing a MIDI file.
	
	CAUSE
	=====
	
	The mouse is not set up correctly for use with Windows.
	
	RESOLUTION
	==========
	
	Do the following to ensure proper use of old HP mice:
	
	- Make sure the following line exists in the [386Enh] section of the SYSTEM.INI
	  file:
	
	        device=HPEBIOS.386
	
	  This is a special virtual device driver (VxD) required for old HP mice on
	  older models of the HP Vectra.
	
	- An HP Windows mouse driver is also required in the [Boot] section of the
	  SYSTEM.INI file. It should read as follows:
	
	        mouse.drv=hpmouse.drv
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.1 3rdparty media player hewlett packard hp
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
