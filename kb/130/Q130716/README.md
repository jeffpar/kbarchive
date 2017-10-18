---
layout: page
title: "Q130716: Write Fault Error Printing from MS-DOS-Based Programs"
permalink: kb/130/Q130716/
---

## Q130716: Write Fault Error Printing from MS-DOS-Based Programs

	Article: Q130716
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
	
	When you try to print from an MS-DOS-based program in Windows 95, you may
	receive the following error message:
	
	  Write fault error writing device LPT1
	  Abort, Retry, Ignore, Fail?
	
	CAUSE
	=====
	
	This error can occur if the printer has been placed in Work Offline mode.
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps to disable the Work Offline
	setting:
	
	1. Click the Start button, point to Settings, then click Printers.
	
	2. Double-click the icon for the printer you want to print to.
	
	3. On the Printer menu, click Work Offline to disable the setting.
	
	Note that you can re-enable the Work Offline setting by repeating these steps.
	
	MORE INFORMATION
	================
	
	This error is likely to occur on notebook computers that are removed from and
	rejoined to a docking station. When a notebook computer is undocked, the printer
	is automatically placed in Work Offline mode.
	
	The Work Offline mode disables MS-DOS spooling for the local port. If there is
	not a printer physically attached to the computer, printing from an MS-DOS-based
	program generates the error message stated above.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
