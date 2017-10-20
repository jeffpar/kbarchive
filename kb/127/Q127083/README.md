---
layout: page
title: "Q127083: Setup Causes UPS to Switch to Battery Mode"
permalink: /kb/127/Q127083/
---

## Q127083: Setup Causes UPS to Switch to Battery Mode

{% raw %}

	Article: Q127083
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows 95 on a computer with an uninterruptible power supply
	(UPS) attached to a serial port, the UPS switches to battery mode during the
	hardware detection portion of Setup. If Setup does not finish before the battery
	in the UPS runs out, the UPS shuts down and the computer restarts.
	
	CAUSE
	=====
	
	The hardware detection portion of Setup attempts to detect the computer's serial
	ports. The method that Setup uses to query the serial ports can cause some
	serial-port-monitoring UPS models to believe that the external power has failed.
	
	RESOLUTION
	==========
	
	Disconnect the UPS monitoring cable from the serial port before you run Windows
	95 Setup.
	
	MORE INFORMATION
	================
	
	The following UPS models are known to exhibit the behavior described above:
	
	- American Power Conversion Smart-UPS series (all models)
	
	- American Power Conversion Matrix series (all models)
	
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	kbcategory: kb3rdparty kbsetup
	
	Additional query words: apc ups
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
