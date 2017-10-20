---
layout: page
title: "Q134496: Error Message: SDMErr(80000003): Registry Access Failed"
permalink: /kb/134/Q134496/
---

## Q134496: Error Message: SDMErr(80000003): Registry Access Failed

{% raw %}

	Article: Q134496
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When Windows 95 is detecting the hardware in your computer, you may receive the
	following error message:
	
	  SDMErr(80000003): Registry access failed.
	
	CAUSE
	=====
	
	The registry is damaged.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Safe Mode Command Prompt Only from the Startup
	  menu.
	
	2. Type the following command at the MS-DOS prompt, and then press ENTER:
	
	  " regedit /e reg.txt " (without the quotation marks)
	
	  Ignore any message about missing data.
	
	3. Type the following command, and then press ENTER:
	
	  " regedit /c reg.txt " (without the quotation marks)
	
	  This command regenerates the internal registry data structures.
	
	4. Restart the computer normally.
	
	5. Run the operation that generated the error message in the first place.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
