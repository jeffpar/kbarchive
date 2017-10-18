---
layout: page
title: "Q69339: Microsoft Mouse Problems with PC Tools and Windows"
permalink: kb/069/Q69339/
---

## Q69339: Microsoft Mouse Problems with PC Tools and Windows

	Article: Q69339
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on the following known usage problems with
	Microsoft Windows, PC Tools, and the Microsoft Mouse driver:
	
	- Mouse problems with PC Tools version 7.0
	
	- Mouse problems with PC Tools version 6.0
	
	PC Tools is manufactured by Central Point Software.
	
	MORE INFORMATION
	================
	
	MOUSE PROBLEMS WITH PC TOOLS VERSION 7.0
	----------------------------------------
	
	PC Tools version 7.0 may not work correctly with Microsoft Mouse driver versions
	7.0, 7.03, and 7.04. Central Point product support technicians have noted
	various problems when using these two driver versions and recommend updating to
	Microsoft Mouse driver version 8.0 or later.
	
	The 7.04 driver (with the "/Y" switch) works in most instances, although you may
	encounter some problems with certain system configurations.
	
	Central Point product support reports no known problems with the 6.24b driver and
	PC Tools.
	
	The reported problems may result because some portions of PC Tools conflict with
	the increased file size of the 7.0 and 7.03 drivers. Changing to the earlier
	mouse driver, 6.24b, may free 10 to 15K of additional memory in the contested
	address space of RAM.
	
	MOUSE PROBLEMS WITH PC TOOLS VERSION 7.0
	----------------------------------------
	
	PC Tools version 6.0 may have problems running with a Microsoft mouse during or
	after a Windows session. To correct this problem, you can do one of the
	following:
	
	- Add the "/M:PS2" parameter to HIMEM.SYS.
	
	- Remove the"/Y" parameter from the mouse driver.
	
	- Run FIXMOUSE.BAT and FIXWIN.BAT.
	
	Each of these steps is described more fully in the following paragraphs.
	
	Adding The "/M:PS2" Parameter
	-----------------------------
	
	Adding the "/M:PS2" parameter to the HIMEM.SYS reference line in the CONFIG.SYS
	file may resolve this problem. For example, the reference to HIMEM.SYS in the
	CONFIG.SYS file should read as follows:
	
	       DEVICE=C:\HIMEM.SYS /M:PS2
	
	  -or-
	
	       DEVICE=C:\HIMEM.SYS /M:2
	
	Removing the"/Y" Parameter from the Mouse Driver
	------------------------------------------------
	
	If your computer does not have a Video Seven graphics card, removing the "/Y"
	parameter from the MOUSE.SYS line in the CONFIG.SYS file may also resolve this
	problem. The "/Y" parameter on the mouse driver helps resolve problems (relating
	to loss of mouse cursor control) with a Video Seven graphics card.
	
	Run FIXMOUSE.BAT and FIXWIN.BAT
	-------------------------------
	
	Central Point Software has created FIXMOUSE.BAT and FIXWIN.BAT to correct the
	problems. These batch files are available from Central Point Software customer
	service or from the Central Point bulletin board service (BBS).
	
	When you run an MS-DOS based application or exit Windows, the port designated for
	the mouse is reset. Windows does a soft reset on the port that most MS-DOS-based
	applications are able to use. Some of these applications, including PC Tools,
	require a hard reset on the port to use the mouse. Central Point Software has
	created FIXWIN.BAT and FIXMOUSE.BAT to provide a hard reset on the mouse port.
	
	Running FIXWIN.BAT starts Windows. When you exit, it calls FIXMOUSE.BAT, which
	does a hard reset and sends a command string out to the mouse port.
	
	For more information, query on the following words here in the Microsoft
	Knowledge Base:
	
	  sprite
	
	The Central Point products included here are manufactured by a vendor independent
	of Microsoft. We make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 mouse pctools driver 400ppi 3rdParty 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
