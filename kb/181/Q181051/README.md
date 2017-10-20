---
layout: page
title: "Q181051: Error Message: Your System Is Not Setup for Host Operation..."
permalink: /kb/181/Q181051/
---

## Q181051: Error Message: Your System Is Not Setup for Host Operation...

{% raw %}

	Article: Q181051
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbsetup win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade Microsoft Windows 3.x to Windows 95, you may receive the
	following error message:
	
	  Your system is not setup for host operation - please run host install.
	
	CAUSE
	=====
	
	This behavior can occur if PCAnywhere is installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropiate method:
	
	Edit the Win.ini File
	---------------------
	
	Disable the "Load=" line in the Win.ini file. To do so, follow these steps:
	
	1. Click Start, click Run, type "sysedit" (without the quotation marks), and
	  then click OK.
	
	2. On the Window menu, click Win.ini.
	
	3. Place a semicolon (;) at the beginning of the "Load=" line. For example:
	
	  ;load=C:\Winaw\Winhost.exe
	
	4. On the File menu, click Save.
	
	5. On the File menu, click Exit.
	
	6. Restart Windows.
	
	Reinstall PCAnywhere
	--------------------
	
	Reinstall the PCAnywhere program. For information about reinstalling PCAnywhere,
	consult the PCAnywhere installation guide or contact Symantec Technical Support.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
