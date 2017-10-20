---
layout: page
title: "Q95204: MS-DOS 6.x ANSI.SYS Turns Off Menu Colors"
permalink: /kb/095/Q95204/
---

## Q95204: MS-DOS 6.x ANSI.SYS Turns Off Menu Colors

{% raw %}

	Article: Q95204
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are loading the ANSI.SYS driver, MS-DOS multiple configuration colors set
	with the menucolor= setting are reset to the default colors.
	
	MORE INFORMATION
	================
	
	The menucolor= setting in the CONFIG.SYS file allows you to define your menu
	colors. When ANSI.SYS is loaded through one of the menu blocks, the screen
	colors are reset. This occurs because ANSI.SYS is a block device for the console
	(CON). ANSI.SYS takes over all output to the console and manipulates the data in
	an ANSI (American National Standards Institute) format.
	
	ANSI.SYS turns off the menu colors because it does not detect the previous state
	of the CON device.
	
	Additional query words: 6.22 6.00 multiconfig multi-config 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
