---
layout: page
title: "Q132619: Windows 95 Hangs on Compaq Computer with SafeStart Enabled"
permalink: /kb/132/Q132619/
---

## Q132619: Windows 95 Hangs on Compaq Computer with SafeStart Enabled

	Article: Q132619
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows 95 on a Compaq Deskpro XL computer with the SafeStart
	feature enabled, the computer may stop responding (hang) after you restart the
	computer when SafeStart scans the system files.
	
	CAUSE
	=====
	
	Compaq's SafeStart feature is not compatible with Windows 95.
	
	RESOLUTION
	==========
	
	Disable the SafeStart feature on the Compaq Deskpro XL computer and then re-
	install Windows 95.
	
	MORE INFORMATION
	================
	
	The SafeStart feature scans the system startup files and various other system
	files. When you upgrade from Windows 3.x with the SafeStart feature enabled,
	SafeStart generates a warning after you restart the computer that allows you to
	accept the changes made during the upgrade. Once all the changes have been
	accepted, SafeStart hangs while scanning the system files the next time you
	restart the computer.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
