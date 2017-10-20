---
layout: page
title: "Q82453: Time-Outs Occur When Printing Complex Jobs with PostScript"
permalink: /kb/082/Q82453/
---

## Q82453: Time-Outs Occur When Printing Complex Jobs with PostScript

{% raw %}

	Article: Q82453
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On some PostScript printers, printing very large jobs can cause time-outs. If
	this occurs, a dialog box prompts you to retry sending information to the
	printer.
	
	CAUSE
	=====
	
	This problem occurs if you print complex documents with numerous pictures and
	use TrueType fonts over a serial port.
	
	WORKAROUND
	==========
	
	Use the following steps to prevent the error from occurring:
	
	1. In the [windows] section of your WIN.INI file, increase the
	  TransmissionRetryTimeout value from 90 (the default) to 500.
	
	2. From the File menu, choose Save, then exit Windows.
	
	3. Restart Windows and run the Control Panel.
	
	4. Choose the Printers icon.
	
	5. Choose the Connect button, and verify that the Fast Printing Direct To Port
	  check box is selected.
	
	6. Choose the OK button, then choose the Close button.
	
	Enabling fast printing corrects this error because the MS-DOS time-out value is
	added to the Windows time-out value.
	
	This functionality has not changed from Microsoft Windows 3.0. However, the
	addition of TrueType font technology requires a higher time-out value.
	
	
	Additional query words: 3.00 3.00a 3.10 3.11 WIN31 true type winfont WIN3X
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
