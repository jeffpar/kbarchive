---
layout: page
title: "Q165982: Embedded Fonts Printed Only in RAW Mode"
permalink: kb/165/Q165982/
---

## Q165982: Embedded Fonts Printed Only in RAW Mode

	Article: Q165982
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are printing a document that contains a read-only embedded font that is
	not listed as an installed font in the Fonts folder, Windows NT uses a
	substitute font if the printer is set to use NT EMF 1.003 mode. Windows NT
	prints the font correctly in RAW mode.
	
	RESOLUTION
	==========
	
	To work around this behavior, use RAW format to print jobs using embedded
	read-only fonts. To change to RAW format, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Use the right mouse button to click the printer you are using, and then click
	  Properties on the menu that appears.
	
	3. On the General tab, click Print Processor.
	
	4. In the Default Data Type box, click RAW, and then click OK.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
