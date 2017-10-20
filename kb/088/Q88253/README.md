---
layout: page
title: "Q88253: Printer Settings Cannot Be Saved for More than One HP III"
permalink: /kb/088/Q88253/
---

## Q88253: Printer Settings Cannot Be Saved for More than One HP III

{% raw %}

	Article: Q88253
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If you have two or more Hewlett-Packard (HP) LaserJet III series printer drivers
	installed and configured for different ports, printer setting changes for one
	printer affect all other HP III printers installed. There is no workaround for
	this problem.
	
	MORE INFORMATION
	================
	
	For example, by editing the WIN.INI file, you can create two additional ports by
	adding the following lines to the [ports] section of the WIN.INI file:
	
	  LPT1.LOW=
	  LPT1.UPP=
	
	You can install a printer driver and configure it to print from the lower tray to
	the port LPT1.LOW. You can install the same printer driver again and configure
	it to print from the upper tray to the port LPT1.UPP. Now, instead of having to
	change the printer driver configuration when you want to print from a different
	paper source, you can select a different printer driver.
	
	This works correctly for most printer drivers, but does not work for the HP
	LaserJet III. If you attempt to do this with an HP LaserJet III, the printer
	driver settings for one port are duplicated for the second port. Again using the
	above example, if you configured the HP III on LPT1.UPP for the upper paper
	tray, the same printer settings are saved for the HP III for LPT1.LOW.
	
	Microsoft has confirmed this to be a problem in HP LaserJet III driver version
	31.3.89. We are researching this problem and will post new information here as
	it becomes available.
	
	
	Additional query words: 3.10 hp lj III hpIII 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
