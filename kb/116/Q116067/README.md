---
layout: page
title: "Q116067: Can't Set Default Paper Length to Maximum w/Panasonic KX-P1624"
permalink: /kb/116/Q116067/
---

## Q116067: Can't Set Default Paper Length to Maximum w/Panasonic KX-P1624

{% raw %}

	Article: Q116067
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Panasonic KX-P1624 dot-matrix printer driver version 1.0 for
	Universal Printer Driver version 3.1.2, you cannot set the default paper length
	to 45.51 inches (the maximum size listed) in Control Panel. After restarting the
	computer, the default page length is reset to 1 inch.
	
	WORKAROUND
	==========
	
	Set the length of the paper to 4550 rather than 4551. Control Panel maintains
	this custom size as the default.
	
	MORE INFORMATION
	================
	
	For some types of printers, Windows allows you to define a custom-size paper.
	This custom-size paper can be expressed in either millimeters or increments of
	0.01 inches. On the Panasonic KX-P1624, if the length of the paper is set to
	4551 the value is saved as 1 inch.
	
	Steps to Reproduce Problem:
	
	1. In Control Panel, choose the Printers icon.
	
	2. Select the Panasonic KX-P1624 printer and choose the Setup button.
	
	3. Set the Paper Source field to Manual Feed. Choose Paper Size and User-
	  Defined size.
	
	  Ranges for the width in 0.01 inches are 100 to 1360; ranges for the length are
	  100 to 4551. Choose the maximum for both.
	
	4. Choose OK. Close Control Panel and exit Windows.
	
	5. Restart the computer and check the settings in Control Panel.
	
	The default page length for the Panasonic printer has been reset to 100 x 0.01
	inches or 1 inch.
	
	Additional query words: panasonic user defined 3.1 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
