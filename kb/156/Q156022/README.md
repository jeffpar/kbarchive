---
layout: page
title: "Q156022: PPT7: Text in Drawing Objects Prints Double to HP LaserJet 4"
permalink: /kb/156/Q156022/
---

## Q156022: PPT7: Text in Drawing Objects Prints Double to HP LaserJet 4

	Article: Q156022
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to an Hewlett-Packard (HP) LaserJet 4 printer, text in some
	PowerPoint drawing objects may print with a drop shadow.
	
	This problem affects some objects that have a white fill and a drop shadow.
	However, the problem does not affect all objects with these characteristics.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	Method 1: Use the HP LaserJet III Printer Driver
	------------------------------------------------
	
	Use the HP LaserJet III printer driver. The object prints correctly if you use
	this driver.
	
	Method 2: Use the HP LaserJet 4 Printer Driver
	----------------------------------------------
	
	If you must use the HP LaserJet 4 driver, follow these steps:
	
	1. Click the object that is printed incorrectly.
	
	2. Press F2 twice to select all the text in the object.
	
	3. On the Edit menu, click Cut to remove the text.
	
	4. Click the Text tool.
	
	5. Position the cursor on the object that is printed incorrectly.
	
	6. On the Edit menu, click Paste.
	
	  The text appears again.
	
	7. Drag the text until it is in the correct position.
	
	  The object now prints correctly.
	
	Method 3: Use the PostScript Version of the Printer Driver
	----------------------------------------------------------
	
	Use the PostScript version of the driver to print the presentation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: double blurry shadowed text font words messed up ppt7 powerpnt w_powerpt powerpt 8.00
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	
	=============================================================================
	
