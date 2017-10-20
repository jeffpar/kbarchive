---
layout: page
title: "Q133438: Print Job Not Printed When Printing to a NetWare Server"
permalink: /kb/133/Q133438/
---

## Q133438: Print Job Not Printed When Printing to a NetWare Server

{% raw %}

	Article: Q133438
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
	
	When you print to a NetWare print queue, the print job may appear in the printer
	queue correctly but not be printed.
	
	CAUSE
	=====
	
	This problem can occur if you are printing to a PostScript printer and you have
	both the Banner and Form Feed After Job options enabled in the printer's
	properties.
	
	RESOLUTION
	==========
	
	Disable the Banner and Form Feed After Job options. To do so, follow these
	steps:
	
	1. Click the Start button, point to Settings, then click Printers.
	
	2. Use the right mouse button to click the PostScript printer icon, and then
	  click Properties on the menu that appears.
	
	3. On the Capture Settings tab, click the Banner and Form Feed After Job check
	  boxes to clear them.
	
	4. On the PostScript tab, verify that the Print PostScript Error Information
	  check box is selected. This option allows the PostScript printer to notify
	  you of any error messages that may occur on the printer.
	
	5. Click OK.
	
	Additional query words: NB NFF
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
