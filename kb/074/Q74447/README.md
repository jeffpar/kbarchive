---
layout: page
title: "Q74447: MS-DOS Shell Version Check on Mouse Drivers"
permalink: /kb/074/Q74447/
---

## Q74447: MS-DOS Shell Version Check on Mouse Drivers

{% raw %}

	Article: Q74447
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft MS-DOS Shell issues a version check on the mouse driver being used on
	your computer. If the mouse driver is not a Microsoft or Logitech driver, the
	version check is of no use. For more information, you must contact the mouse
	manufacturer.
	
	MORE INFORMATION
	================
	
	MS-DOS Shell first checks for the version of the mouse driver. If the driver is
	version 6.14 or earlier, a check for a Logitech driver is done. If the driver is
	Logitech and earlier than version 5.01, a warning message is displayed.
	
	If a Logitech mouse driver is not detected, it is assumed that a Microsoft Mouse
	driver is present. Version 6.14 or later is needed for Microsoft Mouse drivers
	to be compatible with MS-DOS Shell.
	
	Therefore, if the mouse driver being used is not Microsoft or Logitech, the
	information given by the check is most likely incorrect. In this case, Microsoft
	is unable to state whether or not MS-DOS Shell will experience problems with
	your driver. For more information, contact the manufacturer of the mouse driver.
	
	Additional query words: 5.00 5.00a 6.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0
	
	=============================================================================
	

{% endraw %}
