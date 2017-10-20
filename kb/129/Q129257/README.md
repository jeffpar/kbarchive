---
layout: page
title: "Q129257: Error Message: The Briefcase Cannot Be Opened..."
permalink: /kb/129/Q129257/
---

## Q129257: Error Message: The Briefcase Cannot Be Opened...

{% raw %}

	Article: Q129257
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send a file to Briefcase by clicking the file with the right
	mouse button and then clicking Send To Briefcase on the menu that appears, you
	receive the following error message:
	
	  The Briefcase cannot be opened because the disk is inaccessible. Verify that
	  the disk is accessible.
	
	CAUSE
	=====
	
	The shortcut in the <Windows>\SendTo folder does not point to an existing
	Briefcase.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Open the <Windows>\SendTo folder, where <Windows> is the folder
	  containing Windows 95.
	
	2. Use the right mouse button to click the My Briefcase shortcut, then click
	  Properties on the menu that appears.
	
	3. Click the Shortcut tab, and then change the target to point to an existing
	  Briefcase.
	
	MORE INFORMATION
	================
	
	This problem can occur when the original My Briefcase is renamed or moved to a
	different folder.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
