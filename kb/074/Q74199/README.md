---
layout: page
title: "Q74199: MS-DOS Shell Does Not Update the Directory Tree with CTRL+F5"
permalink: /kb/074/Q74199/
---

## Q74199: MS-DOS Shell Does Not Update the Directory Tree with CTRL+F5

{% raw %}

	Article: Q74199
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a directory is created when shelled out of Microsoft MS-DOS Shell, SHELL will
	only recognize the new directory by performing a full scan. This can be done
	with the F5 key, or through the View pull-down menu by choosing Refresh.
	
	CTRL+F5 is listed in the online help as:
	
	  CTRL+F5     Update the file list for the current directory
	
	This will not cause a new directory to appear in the tree.
	
	MORE INFORMATION
	================
	
	This problem can be reproduced by doing the following;
	
	1. Start the SHELL.
	
	2. Press SHIFT+F9 to start a DOS prompt.
	
	3. Type "MD TEST" (without the quotation marks) at the DOS prompt.
	
	4. Type "EXIT" (without the quotation marks) to return to the SHELL.
	
	5. Press CTRL+F5. No change in the directory tree will occur.
	
	6. Press F5. SHELL will re-scan the hard drive, and the new directory will
	  appear.
	
	Additional query words: 5.00 5.00a 6.00 6.20 6.21 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch
	Version           : MS-DOS:
	
	=============================================================================
	

{% endraw %}
