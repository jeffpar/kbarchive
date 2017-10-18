---
layout: page
title: "Q86842: PC WSPlus: Error Printing with Printers Using GENLIB.DLL"
permalink: kb/086/Q86842/
---

## Q86842: PC WSPlus: Error Printing with Printers Using GENLIB.DLL

	Article: Q86842
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0, used with:
	   - the operating system: Microsoft Windows 3.0 
	- Microsoft Mail for Windows, version 3.0, used with:
	   - the operating system: Microsoft Windows 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 1.0 of Microsoft Schedule+ for Windows and version 3.0 of Microsoft Mail
	for Windows do not support GENLIB.DLL printers running with Windows version 3.0.
	
	CAUSE
	=====
	
	This problem is caused by the Common Dialog APIs that were added to Windows
	version 3.1 (which Mail and Schedule+ both use). Neither Mail nor Schedule+
	support printer drivers built with the GENLIB.DLL. These are a few of the
	printers that use the GENLIB.DLL:
	
	  Canon BJ -10e
	  Canon Bubble Jet
	  Star Micronics 9 pin
	  Brother 9 and 24 pin
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows version 3.1.
	
	Additional query words: 1.00 3.00 3.10 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch
	Version           : WINDOWS:1.0,3.0
	
	=============================================================================
	
