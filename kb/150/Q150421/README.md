---
layout: page
title: "Q150421: BUG: Cannot Change DBCS Font Size When Printing"
permalink: /kb/150/Q150421/
---

## Q150421: BUG: Cannot Change DBCS Font Size When Printing

	Article: Q150421
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,95
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp kbVBp400bug kbOSWin95 kbGrpDSVB kbDSupport
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the localized Microsoft Visual Basic for Windows with Double- Byte
	Character Sets (DBCS), printing problems occur when printing on various printers
	with various fonts. This problem only occurs on Windows 95.
	
	
	The problem has been reproduced with all Japanese Fonts. The problem does not
	occur with the United States (US) version of Visual Basic 4.0.
	
	RESOLUTION
	==========
	
	Replace the Command_Click event code with the code shown below. This code works
	to address the problem:
	
	     Private Sub Command1_Click()
	        ' Workaround.
	        x = printer.currentx
	        y = printer.currenty
	        printer.print
	        printer.currentx = x
	        printer.currenty = y
	
	        printer.fontname = "?l?r ?S?V?b?N"
	        printer.fontsize = 48
	        printer.print "? ? ? ? ? "
	        printer.enddoc
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Japanese version of Visual
	Basic version 4.0 for Windows 95. This may be an issue with other localized
	versions of Visual Basic 4.0. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in the Japanese version of Visual Basic 4.0. Form1 is
	  created by default.
	
	2. Add a command button to Form1.
	
	3. Add the following code to the Command1_Click event:
	
	        Private Sub Command1_Click()
	           printer.fontname = "?l?r ?S?V?b?N"
	           printer.fontsize = 48
	           printer.print "? ? ? ? ? "
	           printer.enddoc
	        End Sub
	
	4. From the Run menu, select Start, or press the F5 key. Click the command
	  button and note that the size of the printed character is not 48.
	
	Additional query words: 4.00 vb4win vb4all KK Japan Far East win95
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp kbVBp400bug kbOSWin95 kbGrpDSVB kbDSupport 
	Technology        : kbOSWin95 kbVBSearch kbAudDeveloper kbOSWinSearch kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,95
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
