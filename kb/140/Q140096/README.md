---
layout: page
title: "Q140096: PRB: &quot;Unable to start DDE communication with Program Manager&quot;"
permalink: kb/140/Q140096/
---

## Q140096: PRB: &quot;Unable to start DDE communication with Program Manager&quot;

	Article: Q140096
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp300
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Setup.exe to install a Visual FoxPro application, you may receive
	this error:
	
	  Unable to start DDE communication with Program Manager
	
	CAUSE
	=====
	
	This error occurs when you are using a shell other than Program Manager for
	Windows or Explorer for Windows 95. For example, Norton Desktop for Windows
	version 2.0 does not handle shell dynamic data exchange (DDE). For compatibility
	reasons, Progman.exe does not perform DDE unless it is the active shell in
	Windows 95.
	
	RESOLUTION
	==========
	
	To avoid this error, use Explorer.exe as the shell for Windows 95 and Program
	Manager for Windows 3.1. You can load Norton Desktop for Windows as an
	application.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Norton Desktop for Windows, version 2.0 is manufactured by Symantec, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	To deactivate Norton Desktop as the shell, replace shell=ndw.exe with
	shell=progman.exe in the [boot] section of the System.ini file using the
	following steps:
	
	For Windows 95:
	
	1. Click the Start button, and then click Run.
	
	2. Type system.ini in the Open box, and click OK.
	
	3. Replace shell=ndw.exe with shell=progman.exe in the [boot] section.
	
	4. Save and close the file.
	
	For windows version 3.x:
	
	1. Use Notepad or some other text editor to open the System.ini file.
	
	2. Replace shell=ndw.exe with shell=progman.exe in the [boot] section.
	
	3. Save and close the file.
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kberrmsg kbvfp300 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
