---
layout: page
title: "Q132678: .SHD Files Not Deleted After Printing"
permalink: /kb/132/Q132678/
---

## Q132678: .SHD Files Not Deleted After Printing

{% raw %}

	Article: Q132678
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
	
	You may find that there are several files in the Windows\Spool\Printers folder
	with an .shd extension. These files have various sizes and dates and you may run
	out of disk space as more of these files accumulate.
	
	CAUSE
	=====
	
	When you print using EMF format and the print spooler is set to start printing
	after the first page is spooled, the .shd files are not removed unless you
	restart Windows 95. This is not normally a problem unless you rarely or never
	restart your computer.
	
	RESOLUTION
	==========
	
	Restart your computer to remove the .shd files. If this is an ongoing problem
	because you rarely restart your computer, set the print spooler to start
	printing after the last page is spooled. To do so, follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the Printers folder.
	
	3. Use the right mouse button to click the icon for the printer you are using,
	  then click Properties on the menu that appears.
	
	4. On the Details tab, click the Spool Settings button.
	
	5. Click the "Start printing after last page is spooled" option button, then
	  click OK.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
