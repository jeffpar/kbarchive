---
layout: page
title: "Q63772: Northgate 286 with AMI BIOS Requires HIMEM.SYS /M:8 Switch"
permalink: /kb/063/Q63772/
---

## Q63772: Northgate 286 with AMI BIOS Requires HIMEM.SYS /M:8 Switch

	Article: Q63772
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	- You have a Northgate 286 computer running Microsoft Windows, and your system
	  stops responding (hangs or locks up) or crashes randomly.
	
	- You have a Northgate 386 computer running Microsoft Windows, and your system
	  loads Windows once, but hangs on the second attempt to run Windows.
	
	CAUSE
	=====
	
	- Northgate 286 computers equipped with the American Megatrends Incorporated
	  (AMI) BIOS need the /M:8 HIMEM.SYS switch to use extended memory properly.
	
	- Northgate 386 computers equipped with an AMI BIOS dated 1989 need the /M:8
	  HIMEM.SYS switch to use extended memory properly.
	
	If you have the HIMEM.SYS file installed without this switch, you may experience
	the symptoms above.
	
	RESOLUTION
	==========
	
	Use a text editor, such as Windows Notepad, to add the switch to the HIMEM.SYS
	device line in your CONFIG.SYS file as follows:
	
	      DEVICE=C:\HIMEM.SYS /M:8
	
	MORE INFORMATION
	================
	
	Windows 3.x requires the HIMEM.SYS driver to use extended memory. HIMEM.SYS must
	be included in your CONFIG.SYS file so that Windows can run in standard or
	enhanced mode on your computer. HIMEM.SYS uses the A20 handler on your machine
	to access extended memory.
	
	The Windows Setup program installs the HIMEM.SYS file to use A20 handler #1 on a
	Northgate 286 or 386 (with AMI BIOS). This computer uses A20 handler #8 to
	access extended memory. You must specify the "M:8" parameter in your CONFIG.SYS
	file for Windows to function correctly on this computer.
	
	The Northgate product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
