---
layout: page
title: "Q261284: WD97: Word Stops When Printing or Returns Error in Hpbla2.dll"
permalink: /kb/261/Q261284/
---

## Q261284: WD97: Word Stops When Printing or Returns Error in Hpbla2.dll

	Article: Q261284
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Microsoft Word to print, you may receive an error message similar
	to the following, and Microsoft Word may stop responding (hang):
	
	  <Application> caused a general protection fault in module HPBLA2.DLL at
	  0004:00000a9e.
	
	where <Application> is the name of the program in which the error is
	occurring. <Application> could be either WINWORD or OUTLOOK.
	
	CAUSE
	=====
	
	This problem has been reported when using the HP LaserJet 6L printer with the
	Hpbla.drv printer driver.
	
	RESOLUTION
	==========
	
	To correct this problem, change the graphics mode of the printer driver to
	HP-GL/2. To change the graphics mode of the printer driver, follow these steps:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Right-click the icon for the HP LaserJet 6L (PCL) printer, and, on the
	  shortcut menu, click Properties.
	
	3. On the Print Quality tab, click to select Manual Settings, and then click
	  Settings.
	
	4. In the Graphics Mode group, click to select HP-GL/2.
	
	5. Click OK to close the Settings dialog box.
	
	6. Click OK to close the Properties dialog box.
	
	Additional query words: hangs
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
