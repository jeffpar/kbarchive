---
layout: page
title: "Q129616: Error Message: Cannot Find CANON.DRV"
permalink: /kb/129/Q129616/
---

## Q129616: Error Message: Cannot Find CANON.DRV

{% raw %}

	Article: Q129616
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience any of the following problems when you are using a Canon
	BJ-200ex, BJC-600e, or BJC-4000 printer:
	
	- When you click the Printer button in a Windows-based application's Print
	  dialog box, you receive the following error message:
	
	  Cannot find CANON.DRV
	
	- After you choose the Specific Printer button in the Print dialog box, the
	  Orientation, Paper Size, Paper Resource, and Options buttons are unavailable.
	
	- A Windows-based application causes a general protection (GP) fault when it
	  cannot find the printer driver file.
	
	CAUSE
	=====
	
	The Setup program provided with the Canon printers listed above puts an
	incorrect entry in the [devices] section of the WIN.INI file.
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps:
	
	1. In Control Panel, double-click the Printers icon.
	
	2. Close the Printers dialog box.
	
	Performing this action once corrects the problem.
	
	MORE INFORMATION
	================
	
	Opening and closing the Printers dialog box from Control Panel causes Windows to
	correctly rewrite the [devices] section of the WIN.INI file by sorting the
	[PrinterPorts] section of the file.
	
	The Setup program that is included with the printers listed in this article add
	an incorrect line to the [devices] section of the WIN.INI file. For example,
	Setup might add the following line:
	
	  Canon BJC-600e=Canon BJC-600e,LPT1
	
	In this case, the correct line is:
	
	  Canon BJC-600e=bjc600e,LPT1
	
	This problem does not occur if you install the printer through Control Panel.
	Canon is aware of this problem and has updated the Setup program to correct this
	error.
	
	
	Additional query words: 3.00 3.00a 3.10 3.11 bj200ex bjc600e bjc4000 gpf
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
