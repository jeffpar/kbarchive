---
layout: page
title: "Q163186: Setver.exe Is Not Loaded at Startup"
permalink: /kb/163/Q163186/
---

## Q163186: Setver.exe Is Not Loaded at Startup

{% raw %}

	Article: Q163186
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, Setver.exe may not be loaded.
	
	CAUSE
	=====
	
	When Windows 95 was preinstalled by the computer's manufacturer, the Setver.win
	file may not have been renamed to Setver.exe.
	
	RESOLUTION
	==========
	
	Rename the Setver.win file to Setver.exe and then restart your computer.
	
	NOTE: For information about how to rename a file, view the "Renaming Files" topic
	in Windows 95 Help.
	
	MORE INFORMATION
	================
	
	If the Setver.win file has not been renamed to Setver.exe, you may not receive
	an error message when Windows 95 attempts to load the file. If Setver.exe is
	being loaded from the Config.sys file, you may receive the following error
	message:
	
	  The following file is missing or corrupted:
	  <drive letter>:\<directory>\setver.exe
	  There is an error in you CONFIG.SYS file on line <x>.
	
	You can verify whether Setver.exe was loaded by typing the following line at a
	command prompt:
	
	  " mem /c /p " (without the quotation marks)
	
	If Setver.exe was loaded, SETVER is listed in the table.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
