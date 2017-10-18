---
layout: page
title: "Q86083: PC Win: Embedded Objects from Excel 3.0 Sized Larger"
permalink: kb/086/Q86083/
---

## Q86083: PC Win: Embedded Objects from Excel 3.0 Sized Larger

	Article: Q86083
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Embedding an object from Microsoft Excel version 3.0 for Windows into version
	3.0, 3.0b, or 3.2 of Microsoft Mail for Windows may increase the object's size
	by 20 percent or more.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Excel version 3.0.
	This problem was corrected in Excel version 4.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Compose a message in Mail for Windows.
	
	2. From an Excel spreadsheet, select an area and choose Copy from the Edit menu.
	
	3. Minimize Excel.
	
	4. Return to the previously composed message and choose Paste from the Edit
	  menu. The object is now embedded, but the border appears to be drawn
	  incorrectly.
	
	5. Double-click the embedded object. This opens Excel.
	
	6. From Excel choose Update from the File menu.
	
	This corrects the appearance of the border, but now the object is sized 20
	percent larger than before.
	
	Additional query words: 3.00 3.00b 3.204.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
