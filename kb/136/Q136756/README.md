---
layout: page
title: "Q136756: Display Applet Does Not Disable Drivers"
permalink: /kb/136/Q136756/
---

## Q136756: Display Applet Does Not Disable Drivers

{% raw %}

	Article: Q136756
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change your Windows NT display driver, this message appears:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	The event log says that this message is caused by the driver of your old display
	adapter or another display you have installed.
	
	CAUSE
	=====
	
	When you install a new display driver, the display applet disables the old
	driver if the Disable current driver check box is selected. One of the following
	causes may not allow a driver to identify the new graphics adapter.
	
	- You first installed the wrong display driver and then the correct one.
	
	- You changed your graphics adapter and booted with an entry from BOOT.INI
	  which resets the display to /BASEVIDEO.
	
	- You changed your graphics adapter and booted normally. Your computer reverted
	  to standard VGA when the previously used driver did not find the old graphics
	  adapter.
	
	The applet disables only the currently used driver. It does not disable any
	previous drivers that have been installed.
	
	RESOLUTION
	==========
	
	Disable the driver manually. Do this with the Deinstall button in the Display
	Applet or by changing the startup value for the driver you want to disable in
	the Devices Applet.
	
	NOTE: The Deinstall button does not actually delete the driver files. It only
	disables the driver in the registry.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
