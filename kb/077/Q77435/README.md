---
layout: page
title: "Q77435: Setup May Report Incorrect Swap File Size and Location"
permalink: /kb/077/Q77435/
---

## Q77435: Setup May Report Incorrect Swap File Size and Location

	Article: Q77435
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The value given in Setup inside of Windows 3.0 may report the existence of a
	permanent swap file even if the file is corrupted or Microsoft Windows is not
	using the swap file.
	
	CAUSE
	=====
	
	Setup searches for the first 386SPART.PAR file on the local hard disk. If Setup
	finds 386SPART.PAR on drive C, it includes the file in the listing as the
	Windows permanent swap file even if Windows is actually using a different
	permanent swap file on drive D. It is possible to have more than one swap file
	on a computer if the other swap files are located on other logical drives.
	
	WORKAROUND
	==========
	
	To find the value for the swap file, subtract the amount of RAM that the
	computer has from the value reported when you choose About Program Manager from
	the Help menu in Program Manager.
	
	Additional query words: swapfile 3.0 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
