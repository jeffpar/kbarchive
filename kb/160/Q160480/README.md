---
layout: page
title: "Q160480: Encarta 97: &quot;Dynalink&quot; Error Message Starting Word or Excel"
permalink: kb/160/Q160480/
---

## Q160480: Encarta 97: &quot;Dynalink&quot; Error Message Starting Word or Excel

	Article: Q160480
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:3.1,3.11,5.0,6.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbinterop
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Word for Windows, version 6.0 
	- Microsoft Excel for Windows, version 5.0 
	- the operating system: Microsoft Windows 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Encarta Encyclopedia 97 on a Microsoft Windows
	3.x-based computer, you may receive a "call to an undefined dynalink" error
	message when you attempt to start Microsoft Word 6.0 for Windows or Microsoft
	Excel 5.0 for Windows.
	
	
	CAUSE
	=====
	
	This behavior can occur if the Encarta 97 installation program overwrites
	certain dynamic link library (.dll) files required by Word and Excel.
	
	RESOLUTION
	==========
	
	NOTE: This occurs with versions 4.3a or 4.3b of Word and Excel. Simply
	reinstalling Word or Excel does not correct the problem.
	
	To resolve this issue, obtain and install the version 6.0c update for Microsoft
	Word 6.0 or the version 5.0c update for Microsoft Excel 5.0.
	
	To obtain either of these updates, call the Microsoft Order Desk at (800)
	360-7561 [and request the Microsoft Word 6.0c update or the Microsoft Excel 5.0c
	update]. If you are outside the United States, contact the Microsoft subsidiary
	for your area. To locate your subsidiary, see the Microsoft World Wide Offices
	Web page at:
	
	  http://www.microsoft.com/worldwide/default.htm
	
	MORE INFORMATION
	================
	
	To work around this issue, rename the .dll files that were updated by the
	Encarta 97 installation program, and then reinstall your current version of Word
	or Excel.
	
	The Encarta 97 installation program updates the following files in your
	Windows\System folder:
	
	- Compobj.dll
	- Ole2.dll
	- Ole2.reg (Not always present)
	- Ole2conv.dll
	- Ole2disp.dll
	- Ole2nls.dll
	- Ole2prox.dll (Not always present)
	- Storage.dll
	
	Additional query words: 1997 multi media multimedia multi-media mmtitles kbmm mm
	
	======================================================================
	Keywords          : kbenv kberrmsg kbinterop 
	Technology        : kbWordSearch kbExcelSearch kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbEncartaSearch kbExcel500 kbZNotKeyword2 kbEncartaEncycSearch kbWord600 kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbOSWin311
	Version           : WINDOWS:3.1,3.11,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
