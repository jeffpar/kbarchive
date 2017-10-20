---
layout: page
title: "Q162737: No Plug and Play Detection for Non-DDC Monitors"
permalink: /kb/162/Q162737/
---

## Q162737: No Plug and Play Detection for Non-DDC Monitors

{% raw %}

	Article: Q162737
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbui win95 win98 win98se
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Plug and Play detection for non-Display Data Channel (DDC) monitors is not
	supported in Microsoft Windows. You must manually install the monitor by
	selecting the appropriate driver from a list of those available in Windows 95.
	If a driver for your particular monitor is not listed, contact the monitor's
	manufacturer for the necessary drivers.
	
	CAUSE
	=====
	
	DDC is the Plug and Play standard for monitors. DDC monitors are designed to
	meet the Video Electronic Standards Association (VESA) standard that defines the
	DDC implementation. Windows automatically detects and enumerates a DDC monitor
	if it is connected to a display adapter that has also been designed to the DDC
	standard. Windows also installs the correct Setup information (.inf) file
	necessary for the display driver to set the proper refresh rate.
	
	If the monitor is incorrectly detected as a VESA Plug and Play Monitor, it may
	not be listed in any of the existing .inf files. If this is the case, use the
	disk provided by the monitor manufacturer to install the appropriate .inf file.
	If the monitor manufacturer did not provide a disk, contact the manufacturer to
	obtain the correct .inf file.
	
	RESOLUTION
	==========
	
	To resolve this issue, enable the automatic detection of your Plug and Play
	monitor:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Display.
	
	2. On the Settings tab, click Advanced.
	
	3. On the Monitor tab, click to select the "Automatically detect Plug & Play
	  monitors" check box.
	
	4. Click OK, and then click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui win95 win98 win98se 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
