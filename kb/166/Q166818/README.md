---
layout: page
title: "Q166818: PPT: Unable to Change the ActivePrinter Property With VBA"
permalink: /kb/166/Q166818/
---

## Q166818: PPT: Unable to Change the ActivePrinter Property With VBA

	Article: Q166818
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:98; WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbProgramming kbdtacode KbVBA _IK11573
	Last Modified: 28-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint 98 Macintosh Edition 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Visual Basic for Applications 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to change the ActivePrinter property using Microsoft Visual Basic
	for Applications code, you receive the following error message:
	
	  Run-Time error '450'
	  Wrong number of arguments or invalid property assignment
	
	If you click Debug, the Visual Basic Editor highlights the line with which you
	are trying to assign a new printer.
	
	CAUSE
	=====
	
	The ActivePrinter property is read-only in the PowerPoint object library and
	cannot be changed programmatically.
	
	
	Additional query words: OFF97 ppt97 8.0 8.00 ppt8 VBA VBE macppt programmatically
	
	======================================================================
	Keywords          : kbcode kberrmsg kbProgramming kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
