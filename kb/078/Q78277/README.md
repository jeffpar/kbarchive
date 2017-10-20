---
layout: page
title: "Q78277: Print Manager Does Not Recognize Printer in Windows 3.0"
permalink: /kb/078/Q78277/
---

## Q78277: Print Manager Does Not Recognize Printer in Windows 3.0

{% raw %}

	Article: Q78277
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open Print Manager, the following error message may be
	displayed:
	
	  There are no printers connected; run Control Panel to set up printers
	
	CAUSE
	=====
	
	Print Manager may not recognize a printer if it is configured on a port that is
	beyond the tenth listed port in the [Ports] section of the WIN.INI file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.0. This
	problem was corrected and does not occur in later versions of Windows.
	
	WORKAROUND
	==========
	
	1. Use a text editor, such as Notepad, to edit the [Ports] section of the
	  WIN.INI file.
	
	2. Locate the current, assigned port for the active printer.
	
	3. Count the lines from the first port listing.
	
	4. If the current assigned active printer port is located below the tenth line,
	  move it to a line that precedes the tenth listed port.
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
