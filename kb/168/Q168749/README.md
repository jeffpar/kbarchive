---
layout: page
title: "Q168749: HOWTO: Print the Contents of the MS Chart Control"
permalink: /kb/168/Q168749/
---

## Q168749: HOWTO: Print the Contents of the MS Chart Control

	Article: Q168749
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbprint kbCtrl kbPrinting kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MSChart control does not expose a method that enables you to print the chart
	directly. However, you can use the PrintForm method to print the entire form
	containing the MSChart control. This article describes a method for printing
	only the chart.
	
	MORE INFORMATION
	================
	
	You can print the chart of an MSChart control by copying the contents of the
	control using the EditCopy method, pasting the chart to a PictureBox control,
	and then printing the picture via the PaintPicture method of the Printer
	object:
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Click Components on the Project menu. Check "Microsoft Chart Control" and
	  click OK.
	
	3. Draw an MSChart control and a CommandButton on Form1.
	
	4. Click Add Form on the Project menu, select Form and click Open. This will add
	  a form named Form2 to the project.
	
	5. Draw a PictureBox control on Form2.
	
	6. Add the following code to the Click event of Command1 on Form1:
	
	        MSChart1.EditCopy
	        Printer.Print " "
	        Printer.PaintPicture Clipboard.GetData(), 0, 0
	        Printer.EndDoc
	
	7. Run the application. Click the CommandButton to print the chart to your
	  default printer.
	
	  NOTE: The EditCopy method copies both the data and the picture of the chart to
	  the clipboard. Then, when you use a Paste command to retrieve the contents of
	  the clipboard, the receiving application determines whether the picture or
	  the data is pasted. In this example, Picture1 requests the clipboard data and
	  receives a picture of the chart rather than the chart's data.
	
	Additional query words: kbVBp500 KBComp KBCtrl Kbprinting kbprint kbVBp
	
	======================================================================
	Keywords          : kbprint kbCtrl kbPrinting kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : 5.0
	Issue type        : kbhowto
	
	=============================================================================
	
