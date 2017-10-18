---
layout: page
title: "Q267955: WD97: Excel Worksheet Object Color Text Is Printed as Black"
permalink: kb/267/Q267955/
---

## Q267955: WD97: Excel Worksheet Object Color Text Is Printed as Black

	Article: Q267955
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Color text in a Microsoft Excel Worksheet object appears as black text when
	either of the following is true:
	
	- You print a Word document that contains an Excel Worksheet object with color
	  text.
	
	  -or-
	
	- You copy and paste an Excel Worksheet object that contains color text.
	
	
	CAUSE
	=====
	
	This problem occurs when your default printer is set to a non-color printer
	before you start Microsoft Word.
	
	WORKAROUND
	==========
	
	To prevent this problem, use one of the following methods.
	
	Method 1: Set Your Color Printer as Default
	-------------------------------------------
	
	Make your color printer the default printer before you start Microsoft Word. To
	do this, follow these steps:
	
	1. On the File menu in Word, click Exit.
	
	2. Click Start, point to Settings, and then click Printers.
	
	3. Right-click your installed color printer, and then click "Set as default
	  printer" on the shortcut menu that appears.
	
	  NOTE: A check mark should appear on your printer icon when it is set as the
	  default printer.
	
	4. In the Printers dialog box, click Close on the File menu.
	
	Method 2: Paste the Excel Worksheet Object as "Formatted Text (RTF)"
	--------------------------------------------------------------------
	
	Paste the Microsoft Excel Worksheet object as Formatted Text (RTF). To do this,
	follow these steps:
	
	1. Click to select the Microsoft Excel Worksheet object.
	
	2. On the Edit menu, click Cut.
	
	3. On the Edit menu, click Paste Special.
	
	4. In the Paste Special dialog box, click to select "Formatted Text (RTF)", and
	  then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: wd97 no color
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
