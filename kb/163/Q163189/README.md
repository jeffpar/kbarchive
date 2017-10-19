---
layout: page
title: "Q163189: WD97: Text in Shaded Table Missing Printing to NT Servers"
permalink: /kb/163/Q163189/
---

## Q163189: WD97: Text in Shaded Table Missing Printing to NT Servers

	Article: Q163189
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint kbualink97 kbtable
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you print a shaded table containing text to a Windows NT 4.0 print server,
	the text may be printed incorrectly or may not print at all if the Windows NT
	4.0 print server is not updated with the Windows NT 4.0 Service Pack 2.
	
	CAUSE
	=====
	
	This problem occurs when a new write time has been detected for the font. This
	write time is incorrectly changed when daylight savings changes. If a new write
	time is detected, the font won't be used.
	
	STATUS
	======
	
	This problem was corrected in the Windows NT 4.0 U.S. Service Pack
	
	For more information on obtaining and installing the Microsoft Windows NT 4.0
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q152734 How To Obtain Windows NT Version 4.0 U.S. Service Pack
	
	
	MORE INFORMATION
	================
	
	If you are unable to obtain the Windows NT Version 4.0 U.S. Service Pack, one of
	the following workarounds may allow you to print the document correctly.
	
	Method 1
	--------
	
	Enable the "Use printer metrics to lay out document" check box by following these
	steps:
	
	1. In Word, on the Tools menu, click Options.
	
	2. Click the Compatibility tab.
	
	3. Click the "Use printer metrics to lay out document" check box to select it.
	
	Method 2
	--------
	
	Turn of metafile spooling in the printer properties by following these steps:
	
	1. On the Windows taskbar, click Start, point to Settings, and click Printers.
	
	2. Right-click the printer you want to print to, and click Properties.
	
	3. Click the General tab.
	
	4. Click the Print Processor button.
	
	5. Change the spool data format from EMF to RAW.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbualink97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
