---
layout: page
title: "Q175461: Camcorder Files Do Not Play Correctly"
permalink: kb/175/Q175461/
---

## Q175461: Camcorder Files Do Not Play Correctly

	Article: Q175461
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Excel 97 Step by Step ISBN 1-57231-314-5 
	- MSPRESS Microsoft Excel 97 Step by Step, Advanced Topics ISBN 1-57231-564-4 
	- MSPRESS Microsoft Exchange 5.0 Step by Step ISBN 1-57231-627-6 
	- MSPRESS Microsoft Office 97 Integration Step by Step ISBN 1-57231-317-X 
	- MSPRESS Microsoft Office 97 Professional 6-in-1 Step by Step ISBN 1-57231-703-5 
	- MSPRESS Microsoft PowerPoint 97 Step by Step ISBN 1-57231-315-3 
	- MSPRESS Microsoft Word 97 Step by Step ISBN 1-57231-313-7 
	- MSPRESS Microsoft Word 97 Step by Step, Advanced Topics ISBN 1-57231-563-6 
	- MSPRESS Microsoft Team Manager 97 Step by Step ISBN 1-57231-217-3 
	- MSPRESS Microsoft Access 97 Step by Step ISBN 1-57231-316-1 
	- MSPRESS Microsoft Word for Windows 95 Step by Step ISBN 1-55615-828-9 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play one of the Microsoft Camcorder files from the Microsoft
	Press Web site, you may experience one or more of the following problems:
	
	- The movie appears in its own window with a dark gray or black screen.
	
	- Your entire screen appears to be black except for the pointer, the Stop
	  window displayed by the Camcorder, and a thin strip at the bottom of the
	  screen.
	
	CAUSE
	=====
	
	These problems occur when you play the movie on a computer with an incompatible
	video driver, such as the Cirrus Logic (CL-GD7548) or the NeoMagic video driver.
	
	WORKAROUND
	==========
	
	Movie Appears In Its Own Window with Black Screen
	-------------------------------------------------
	
	If the movie appears in its own window with a dark gray or black screen,
	following these steps:
	
	1. Click the Start button and click Run. In the Open box, type
	
	  " System.ini " (without the quotation marks)
	
	  then click OK.
	
	2. On the Search menu, click Find. Type the following
	
	  " dvideo.dll " (without the quotation marks)
	
	  and then click Find Next. Click Cancel. You should see
	
	  VIDS.DRAW=DVIDEO.DLL
	
	  In the [Drivers32] section.
	
	3. Insert a semicolon (;) at the beginning of this line to change this statement
	  to a remark.
	
	4. On the File menu, click Save, and then click Exit.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q161467 OFF97: Camcorder .Avi Plays With Gray or Black Screen
	
	Entire Screen Is Black While Movie Plays
	----------------------------------------
	
	If while the movie is playing the entire screen appears to be black except for
	the pointer and a thin strip at the bottom of the screen, switch to a different
	video driver.
	
	To switch to a different video driver, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Click Display and on the Settings tab click Advanced Properties.
	
	3. click to select Adapter, and then click Change.
	
	4. Click to select Show All Devices. In the Manufacturers list, click Standard
	  Display Types. In the Models list, click Standard Display Adapter and then
	  click OK.
	
	5. Click OK to close the windows that you have opened.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q170636 OFF97: Camcorder Movies May Not Work with NeoMagic Video
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: press ms_press bookbug 1-57231-317-X 1-57231-313-7 1-57231-314-5 1-57231-564-4 1-57231-316-1 1-57231-563-6 1-57231-627-6 1- 57231-382-X 1-57231-217-3 1-57231-703-5
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
