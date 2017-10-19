---
layout: page
title: "Q150192: FIX: X / Y Coordinates Reversed Using PSet on Printer Object"
permalink: /kb/150/Q150192/
---

## Q150192: FIX: X / Y Coordinates Reversed Using PSet on Printer Object

	Article: Q150192
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp kbVBp400bug kbVBp500fix kbGrpDSVB
	Last Modified: 11-SEP-2001
	
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
	
	If the PSet method is invoked for the Printer object, the X and Y coordinates
	are reversed: the first argument represents the vertical coordinate and the
	second argument represents the horizontal coordinate.
	
	RESOLUTION
	==========
	
	Invoke the coordinates in reverse order when the PSet method is used for the
	Printer object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default. In the
	  Click event of Form1, place the following code:
	
	        Private Sub Form_Click()
	           Dim I As Integer
	
	        'Should print a horizontal dotted line
	
	            For I = 0 To Printer.ScaleWidth Step 100
	
	            Printer.PSet (I, (Printer.ScaleHeight \ 2))
	
	            Next
	
	        Printer.EndDoc
	        End Sub
	
	2. Run the project by pressing F5. Click on the Form, and it prints out a dotted
	  line to the default printer. The line runs across the paper. Since the
	  default is portrait, the line runs along the short side of the paper.
	  However, the print job contains a line that runs along the vertical axis.
	
	  To correct the code above, the order of the arguments to the PSet method can
	  be swapped:
	
	        Printer.PSet ((Printer.ScaleHeight \ 2), I)
	
	  This should only be done when the PSet is used with the Printer object.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp kbVBp400bug kbVBp500fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
