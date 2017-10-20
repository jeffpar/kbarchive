---
layout: page
title: "Q132757: GP Fault Printing a File in CorelDRAW"
permalink: /kb/132/Q132757/
---

## Q132757: GP Fault Printing a File in CorelDRAW

{% raw %}

	Article: Q132757
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print a document in CorelDRAW version 4.0, you may receive a
	general protection (GP) fault in Cdrgrfx40. In CorelDRAW version 5.0, you may
	receive a GP fault in Cdrgfx50.
	
	CAUSE
	=====
	
	This problem can occur if the path to the printer contains more than 19
	characters. CorelDRAW cannot handle a path of more than 19 characters to the
	printer.
	
	RESOLUTION
	==========
	
	To work around this problem, use either of the following methods:
	
	- Use a printer path with 19 or less characters. For example, the path
	
	  \\server123\printer (19 characters)
	
	  works, but the path
	
	  \\server123\printer1 (20 characters)
	
	  does not.
	
	- Redirect an LPT port to the network printer share. To do so, follow these
	  steps:
	
	   - Click the Start button, point to Settings, then click Printers.
	
	   - Use the right mouse button to click the printer icon, then click
	     Properties on the menu that appears.
	
	   - On the Details tab, click Capture Printer Port.
	
	   - In the Device box, click the printer port you want to redirect.
	
	   - In the Path box, type the path for the network printer.
	
	   - If you want to use this printer each time you start Windows 95, click the
	     Reconnect At Logon check box to select it.
	
	   - Click OK.
	
	MORE INFORMATION
	================
	
	This problem usually occurs when you are printing to a network printer, but can
	also occur when you print to a file with a path of more than 19 characters.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.10 3.11 gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : :3.1,3.11
	
	=============================================================================
	

{% endraw %}
