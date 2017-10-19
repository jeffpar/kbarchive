---
layout: page
title: "Q88383: Windows Err Msg: Problem Drawing or Printing Object"
permalink: /kb/088/Q88383/
---

## Q88383: Windows Err Msg: Problem Drawing or Printing Object

	Article: Q88383
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows Resource Kit, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Write to open or print the MOUSEQA.WRI file packaged with the
	Microsoft Windows Resource Kit for operating system 3.1, the following error
	message may appear:
	
	  Problem Drawing or Printing Object
	
	WORKAROUND
	==========
	
	Install the standard VGA video driver that comes with Windows 3.1, or install
	any compatible 16-color driver.
	
	MORE INFORMATION
	================
	
	This error message is generated when you are using a 256-color video driver, and
	you attempt to open MOUSEQA.WRI, which contains a 16-color mouse image.
	
	Additional query words: 3.10 3.11 err msg icon
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11; :3.1
	
	=============================================================================
	
