---
layout: page
title: "Q133731: Error Message: Cannot Run This Version of Windows..."
permalink: /kb/133/Q133731/
---

## Q133731: Error Message: Cannot Run This Version of Windows...

{% raw %}

	Article: Q133731
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start Windows 95, you receive either of the following error
	message:
	
	  This version of Windows does not run on MS-DOS 6.x or earlier.
	
	  This version of Windows cannot run in MS-DOS version 7.0
	
	CAUSE
	=====
	
	Win.com has been added to the Setver table with a version parameter of less than
	7.00.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only from the Startup menu.
	
	2. Type the following command, and then press ENTER:
	
	  setver win.com /d
	
	3. Restart your computer normally.
	
	
	======================================================================
	Keywords          : kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
