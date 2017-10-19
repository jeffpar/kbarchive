---
layout: page
title: "Q74179: Disabling Grid Systems Isopoint Mouse on a Grid Laptop 1550SX"
permalink: /kb/074/Q74179/
---

## Q74179: Disabling Grid Systems Isopoint Mouse on a Grid Laptop 1550SX

	Article: Q74179
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Grid 1550SX Laptop computer comes with a built-in Isopoint mouse, which is
	Microsoft bus-mouse-compatible and defaults to IRQ5. However, before you can
	install a Microsoft mouse, the Isopoint mouse must be disabled.
	
	MORE INFORMATION
	================
	
	Disabling and Enabling the Mouse
	--------------------------------
	
	You can check the system configuration, by typing "config" (without the quotation
	marks) at the MS-DOS prompt.
	
	- To disable the grid mouse, type the following at the MS-DOS prompt:
	
	  config isopoint=none
	
	- To enable it, type the following at the the MS-DOS prompt:
	
	  config isopoint=irq5
	
	Microsoft Mouse Installation
	----------------------------
	
	If you would like to install a Microsoft of Microsoft-compatible mouse, Grid
	Systems technical support recommends that you use the following settings.
	
	  Isopoint on NONE
	  Modem on COM2
	  Serial A set to COM1
	  Serial B set to COM3
	
	If NO modem is installed, do the following:
	
	1. Disable the Isopoint mouse.
	
	2. Set port A (SerialA) to COM1 and port B (SerialB) to COM2, using the
	  following steps:
	
	  a. To assign Serial A to Com1, type
	
	  configseriala=com1
	
	  b. To assign Serial B to Com2, type
	
	  configserialb=com2
	
	If a modem IS installed, assign it to COM1 by typing the following:
	
	  configmodem=com1
	
	If a port does not respond after being assigned, you may need to activate the
	port by typing:
	
	  configseriala=on
	
	  -or-
	
	  configserialb=on (if set to OFF)
	
	For more information, call Grid Systems.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
