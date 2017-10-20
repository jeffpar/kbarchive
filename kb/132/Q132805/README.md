---
layout: page
title: "Q132805: Tabworks Replaces Windows 95 Shell with Program Manager"
permalink: /kb/132/Q132805/
---

## Q132805: Tabworks Replaces Windows 95 Shell with Program Manager

{% raw %}

	Article: Q132805
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
	
	If you run Tabworks in Windows 95 and set it as the shell, and then try to
	return to the normal Windows 95 shell, Tabworks sets Program Manager as the
	shell.
	
	CAUSE
	=====
	
	Tabworks changes the "shell=" line in the System.ini file. The normal shell for
	Windows 95 is Explorer.exe, but Tabworks set the shell to Progman.exe.
	
	RESOLUTION
	==========
	
	To return to the normal Windows 95 shell, use any text editor (such as Notepad)
	to edit the System.ini file. Modify the "shell=" line so that it reads:
	
	  shell=explorer.exe
	
	After you make this change, save and then close the file, and then restart
	Windows 95.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
