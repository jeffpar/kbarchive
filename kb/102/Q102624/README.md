---
layout: page
title: "Q102624: Setup Does Not Support Installing Multiple Mouse Drivers"
permalink: /kb/102/Q102624/
---

## Q102624: Setup Does Not Support Installing Multiple Mouse Drivers

{% raw %}

	Article: Q102624
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.1,3.5,3.51; :
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1,3.5,3.51 
	- Microsoft Windows NT Workstation version 3.1,3.5,3.51 
	- Microsoft Windows NT Advanced Server 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT Setup allows you to install a single pointing device. If you later
	use Setup to change to another pointing device, the first pointing device is
	disabled.
	
	This can present a problem, especially for users with portable machines that use
	one mouse type when the machine is in a docking station and a different mouse
	type when not in the docking station.
	
	CAUSE
	=====
	
	This is by design.
	
	RESOLUTION
	==========
	
	If you have mouse support in only one of your machine's configurations, do the
	following:
	
	1. Make sure both drivers are present on the machine. Setup never deletes driver
	  files. Once you run Setup and select Mouse Port Mouse to install drivers,
	  they remain on the machine until you explicitly delete them from the DRIVERS
	  directory.
	
	2. In Control Panel, choose the Devices icon, and make sure all relevant mouse
	  drivers are marked with the System startup type (use the Startup button if
	  necessary). The following table lists the mouse types and corresponding
	  drivers for those drivers Microsoft supplies:
	
	     Mouse Type                                        Driver
	     ----------------------------------------------------------
	
	     Microsoft Mouse Port Mouse (includes BallPoint)   i8042prt
	     Logitech Mouse Port Mouse                         i8042prt
	     Microsoft InPort Bus Mouse                        inport
	     Microsoft Serial Mouse                            sermouse
	     Microsoft BallPoint Serial Mouse                  sermouse
	     Logitech Serial Mouse                             sermouse
	     Microsoft (green buttons) or Logitech Bus Mouse   busmouse
	
	For the Compaq LTE and other machines in which one configuration involves a
	Microsoft Mouse Port Mouse (also known as a PS/2-compatible mouse), the solution
	is even simpler. The keyboard and PS/2-compatible mouse share a driver;
	therefore, the Mouse Port Mouse support is available without additional charge
	if you install the other mouse type (usually serial) during Setup, everything
	will work from then on with no further intervention.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch kbWinNTAdvSerSearch
	Version           : winnt:3.1,3.5,3.51; :
	
	=============================================================================
	

{% endraw %}
