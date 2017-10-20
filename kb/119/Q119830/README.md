---
layout: page
title: "Q119830: Err Msg: Unable to Start DDE Communications with Program Manager"
permalink: /kb/119/Q119830/
---

## Q119830: Err Msg: Unable to Start DDE Communications with Program Manager

{% raw %}

	Article: Q119830
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kb3rdparty msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft PowerPoint version 4.0 or Microsoft Publisher version
	2.0 while running Norton Desktop for Windows version 2.0 as the shell, you
	receive the following error message:
	
	  Unable to Start DDE communications with Program Manager
	
	  Abort, Retry, Ignore
	
	Choosing Ignore allows the installation to continue; however, the above error
	message is received once more in the final portion of the installation. Pressing
	Ignore again allows you to continue and complete the installation.
	
	NOTE: Microsoft does not support using any shell other than Windows Explorer as
	the primary Windows 95 shell. If you want to use a third-party shell with
	Windows 95, Microsoft recommends adding it to the Startup folder.
	
	CAUSE
	=====
	
	Norton Desktop for Windows version 2.0 does not handle shell dynamic data
	exchange (DDE). When this fails, Microsoft PowerPoint 4.0 and Microsoft
	Publisher 2.0 attempt to perform the DDE operation through Program Manager
	(PROGMAN.EXE). For compatibility reasons, PROGMAN.EXE does not perform DDE
	unless it is the active shell in Windows 95.
	
	RESOLUTION
	==========
	
	To avoid this error, use EXPLORER.EXE as the shell for Windows 95 and load
	Norton Desktop for Windows as an application. Then install Microsoft PowerPoint
	version 4.0 or Microsoft Publisher 2.0.
	
	To deactivate Norton Desktop as the shell, replace "shell=ndw.exe" with
	"shell=explorer.exe" in the [boot] section of the SYSTEM.INI file using the
	following steps:
	
	1. Click the Start button, and then click Run.
	
	2. Type "system.ini" (without the quotation marks) in the Open box and click OK.
	
	3. Replace "shell=ndw.exe" with "shell=explorer.exe" in the [boot] section.
	
	4. Save and close the file.
	
	MORE INFORMATION
	================
	
	Norton Desktop for Windows version 2.0 is manufactured by Symantec, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	Additional query words: ndw devtools
	
	======================================================================
	Keywords          : kb3rdparty msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
