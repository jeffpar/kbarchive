---
layout: page
title: "Q149329: BUG: PictureBox Loses Graphics Printing from Win95 with 16-Bit"
permalink: kb/149/Q149329/
---

## Q149329: BUG: PictureBox Loses Graphics Printing from Win95 with 16-Bit

	Article: Q149329
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp kbVBp400bug kbGrpDSVB kbDSupport
	Last Modified: 30-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Graphics drawn on a picture box with the graphics methods do not appear when the
	form containing that picture box is printed using the PrintForm method. Bitmaps
	and/or icons print correctly. The AutoRedraw property has no affect on this
	problem.
	
	RESOLUTION
	==========
	
	To work around this problem, please see the following article in the Microsoft
	Knowledge Base (and use the procedures detailed in that article): Alternatively,
	the problem may also be avoided by setting AutoRedraw to true before any drawing
	occurs on the picturebox to be printed. Before printing, set the Image property
	of the Picture box to the Picture property. This can be accomplished with a line
	of code similar to:
	
	  Picture1.Picture = Picture1.Image
	
	After these steps the graphics drawn on the picture box will print correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic 4.0 and Form1 is created by default.
	
	2. Add a single PictureBox control and two command buttons to the form.
	
	3. Add this code to Form1:
	
	        Private Sub Command1_Click()
	           Picture1.Line (10, 10)-(500, 500)
	           Picture1.Line (10, 500)-(500, 10)
	        End Sub
	
	        Private Sub Command2_Click()
	           Form1.PrintForm
	        End Sub
	
	4. Press F5 or select Start from the Run menu to run the application. Click
	  Command1 to add the graphics to the picture box, then click Command2 to print
	  the form. After printing is complete, notice that the picture box on the
	  printed page is empty.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp kbVBp400bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
