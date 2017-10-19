---
layout: page
title: "Q130339: IBMODISH.COM Causes Windows 95 to Exit at Startup"
permalink: /kb/130/Q130339/
---

## Q130339: IBMODISH.COM Causes Windows 95 to Exit at Startup

	Article: Q130339
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the real-mode IBMODISH.COM ODI driver when you start Windows
	95, Windows 95 exits to a command prompt and your computer stops responding
	(hangs).
	
	CAUSE
	=====
	
	The IBMODISH.COM driver corrupts memory at <DS>:0000, where <DS>
	depends on the driver's load address. This driver is not compatible with Windows
	95.
	
	RESOLUTION
	==========
	
	To work around this problem, try using the SMC8000.COM driver instead of the
	IBMODISH.COM driver. The SMC ODI driver is similar to the IBMODISH.COM driver.
	
	To use the SMC ODI driver, edit the AUTOEXEC.BAT or STARTNET.BAT file with any
	text editor (such as EDIT.COM). Replace any occurrence of IBMODISH.COM with
	SMC8000.COM.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: nic mlid
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
