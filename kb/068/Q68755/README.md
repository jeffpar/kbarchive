---
layout: page
title: "Q68755: Cannot Print from a DOS Application in Enhanced Mode"
permalink: /kb/068/Q68755/
---

## Q68755: Cannot Print from a DOS Application in Enhanced Mode

	Article: Q68755
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If you cannot print from a DOS application in the enhanced mode of Microsoft
	Windows version 3.0, you may have a device contention problem. You can resolve
	this problem by doing the following:
	
	1. From the Main group of Program Manager, choose the Control Panel icon.
	
	2. From Control Panel, choose the 386 enhanced icon.
	
	3. In the Idle section of the Device Contention box, set the seconds down to 2.
	
	MORE INFORMATION
	================
	
	If you are running more than one application in enhanced mode of Windows and one
	of the applications is a DOS application, both applications may need to use the
	same printer or communications device. The Idle section of the 386 enhanced icon
	in Control Panel controls how many seconds should pass before another
	application can use the device.
	
	
	Additional query words: 3.00 win30 windrvr 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
