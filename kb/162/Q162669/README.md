---
layout: page
title: "Q162669: How to Disable PJL Commands for a PostScript Printer Driver"
permalink: /kb/162/Q162669/
---

## Q162669: How to Disable PJL Commands for a PostScript Printer Driver

{% raw %}

	Article: Q162669
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to prevent Printer Job Language (PJL) commands from
	being sent with a print job. In some network situations, it may be necessary to
	do this.
	
	MORE INFORMATION
	================
	
	To disable PJL commands, you must edit the .spd file for the PostScript printer
	you are using.
	
	1. Use any text editor (such as Notepad) to open the .spd file.
	
	2. Locate the line beginning with:
	
	  *Protocols:
	
	3. Delete the word "PJL" from this line.
	
	4. Save and close the file.
	
	5. Delete the corresponding .wpx file from the Windows\System folder. (This file
	  contains information from the .spd file. When you delete this file, the .spd
	  file is read again to re-create the .wpx file.)
	
	6. Restart Windows 95.
	
	PJL commands are sent by the Windows 95 PostScript printer driver to
	multiple-language printers that are compatible with Hewlett-Packard's Printer
	Job Language controls to switch to the PostScript language and perform other job
	control functions.
	
	PJL Commands usually have the following format:
	
	  <ESC>%-12345X@PJL...
	
	Some network spoolers have problems with these commands if they look specifically
	for PostScript document fields to define the parameters of the print job.
	
	Additional query words: hp
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
