---
layout: page
title: "Q82387: Old Versions of LOCKIT Incorrectly Modify WIN.INI"
permalink: /kb/082/Q82387/
---

## Q82387: Old Versions of LOCKIT Incorrectly Modify WIN.INI

	Article: Q82387
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When installing, LOCKIT fails to include the space needed before its name on the
	load= line in the WIN.INI file. This causes problems if another application is
	already on the load= line. The solution is to add a space between LOCKIT.EXE and
	any other application names that appear on the load= line.
	
	MORE INFORMATION
	================
	
	Applications that load automatically modify the WIN.INI file in the WINDOWS
	directory (in particular the LOAD= line in WIN.INI). If multiple applications
	start at Windows start time, then a space is needed between each application
	name.
	
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.10 3.11 lockit lock it lock-it
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
