---
layout: page
title: "Q121413: PRB: &quot;Printer Not Ready&quot; When Choosing Font from Object Menu"
permalink: /kb/121/Q121413/
---

## Q121413: PRB: &quot;Printer Not Ready&quot; When Choosing Font from Object Menu

{% raw %}

	Article: Q121413
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are modifying a report and you choose Font from the Object menu in
	FoxPro 2.x, or from the Format menu in Visual FoxPro, you receive a "Printer Not
	Ready" error message.
	
	CAUSE
	=====
	
	This problem is caused by a corrupt printer driver. The same error message
	should appear in any Microsoft Windows-based application, including the Write
	accessory application in the Windows Accessories group.
	
	RESOLUTION
	==========
	
	Reinstall the corrupt printer driver, or use the Printers application in Windows
	Control Panel to change the default printer. You can either install a new
	printer driver and set it as the default or select a different driver from the
	list of currently installed printer drivers. To reinstall a corrupt printer
	driver:
	
	1. Open Windows Control Panel (located in the Main group in Program Manager) and
	  double-click the Printers icon.
	
	2. Select the corrupt printer driver, and then click the Remove button.
	
	3. Delete the appropriate .DRV or .DLL files from the WINDOWS\SYSTEM
	  subdirectory.
	
	4. Reinstall the printer driver use the Printers icon in Control Panel.
	
	
	Additional query words: kbdse VFoxWin FoxWin 2.50 2.50a 2.50b errmsg applet
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro260a kbVFP300
	Version           : WINDOWS:2.5x,2.6,2.6a,3.0
	
	=============================================================================
	

{% endraw %}
