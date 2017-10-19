---
layout: page
title: "Q132908: Error Message: Could Not Start Print Job"
permalink: /kb/132/Q132908/
---

## Q132908: Error Message: Could Not Start Print Job

	Article: Q132908
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbprint kbtool win95 kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send a fax by printing to the Microsoft Fax service, you may
	receive one of the following error messages:
	
	  Could Not Start Print Job.
	
	  Windows cannot print due to a problem with the current printer setup.
	
	If you attempt to fax a test page by clicking the Print Test Page button on the
	Microsoft Fax Properties dialog, you may receive the following error message:
	
	  Windows was unable to print the test page. Would you like to begin
	  troubleshooting now?
	
	CAUSE
	=====
	
	One or more of the files required by the Microsoft Fax printer driver may be
	missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Use the right mouse button to click Microsoft Fax, and then click Delete on
	  the menu that appears.
	
	3. Close the Printers folder.
	
	4. Click the Start button, point to Find, and then click Files Or Folders.
	
	5. Type "awadpr32.exe" (without the quotation marks) in the Named box, and then
	  click Find Now.
	
	6. Double-click the Awadpr32.exe file in the results box.
	
	MORE INFORMATION
	================
	
	The "Could not start print job" error message can also occur if the Wpsuni.drv
	file is damaged. To resolve this issue, follow these steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double- click
	  Add/Remove Programs.
	
	2. Click the Windows Setup tab.
	
	3. Click the Microsoft Fax check box to clear it, and then click OK. When you
	  are prompted to restart your computer, do so.
	
	4. Type the following line at a command prompt, and then press ENTER:
	
	  " ren c:\windows\system\wpsuni.drv wpsuni.old " (without the quotation marks)
	
	5. In Control Panel, double-click Add/Remove Programs.
	
	6. Click the Windows Setup tab.
	
	7. Click the Microsoft Fax check box to select it, and then click OK. When you
	  are prompted to restart your computer, do so.
	
	Additional query words: msfax fax msaw rendering corrupt
	
	======================================================================
	Keywords          : kberrmsg kbprint kbtool win95 kbPrinting 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
