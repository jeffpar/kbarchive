---
layout: page
title: "Q301045: Problems When You Print Colored Text on a Black Background"
permalink: /kb/301/Q301045/
---

## Q301045: Problems When You Print Colored Text on a Black Background

	Article: Q301045
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv kbprint kbtool
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Server 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows Millennium Edition 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print colored text on a black background to a black and white printer,
	all non-white or light-gray text may be printed as black.
	
	CAUSE
	=====
	
	This issue can occur because of limitations in the Unidrv.dll file that prevent
	colors from mapping correctly to their halftone counterparts when you print.
	Print quality may be lower than normal when you try to print half-tone text.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact the manufacturer of your printer to inquire about
	the availability of a printer driver that does not use the Unidrv.dll file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To determine if your printer driver uses the Unidrv.dll file, right-click your
	printer in the Printers folder, click Properties, and then click Print Test
	Page. The test page lists all of the .dll files that are used by your printer
	driver.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbprint kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbWinMEsearch kbWin98search kbWin98SEsearch kbWin98 kbWinME kbWin98SE
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
