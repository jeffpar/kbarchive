---
layout: page
title: "Q190216: BUG: Printer.DrawWidth Appears To Be Ignored with Windows 95/98"
permalink: /kb/190/Q190216/
---

## Q190216: BUG: Printer.DrawWidth Appears To Be Ignored with Windows 95/98

	Article: Q190216
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Printing lines and/or circles ignores your Printer.DrawWidth setting, producing
	thin lines with the default DrawWidth of 1 instead of the thicker lines desired.
	
	RESOLUTION
	==========
	
	This can often be resolved by adding the following line before any other
	printing or the setting of any Printer object properties:
	
	     Printer.Print
	
	But a more reliable method is to print a Null circle with the following:
	
	     Printer.DrawWidth = 1
	     Printer.Circle (0, 0), 0
	
	before any other printing or setting the DrawWidth property to the desired value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a New Standard EXE Project. Form1 is created by default.
	
	2. Insert the following code into the Form's module:
	
	        Private Sub Form_Click()
	         'Printer.Print    ' may work
	         'Printer.DrawWidth = 1     ' To make sure Null Circle is not visible
	         'Printer.Circle (0, 0), 0  ' Print Null Circle
	         Printer.DrawWidth = 50
	         Printer.Line (200, 500)-(Printer.ScaleWidth - 300, 1500), , B
	         Printer.Circle (Printer.ScaleWidth \ 2, Printer.ScaleHeight \ 2), _
	          Printer.ScaleWidth \ 3
	         Printer.Line (200, 2500)-(Printer.ScaleWidth - 300, 2500)
	         Printer.Line (200, Printer.ScaleHeight - 1200)- _
	          (Printer.ScaleWidth - 300, Printer.ScaleHeight - 200), , B
	         Printer.EndDoc
	        End Sub
	
	3. Run the Project and click on the Form. Your printout will have a horizontal
	  box across the top of the page, followed by a horizontal line, a large
	  circle, and finally, a horizontal box across the bottom of the page. Note
	  that at least the first box will be in thin lines rather than the thick lines
	  expected for a DrawWidth of 50, indicating that the DrawWidth setting was
	  ignored for the Printer object.
	
	4. Stop the Project.
	
	5. Uncomment the Printer.Print line and repeat step 3. The printout may now be
	  the same or it may be correct with all objects drawn with a DrawWidth of 50.
	
	6. Stop the Project.
	
	7. Comment out the Printer.Print line and uncomment the next two lines to draw
	  the Null circle, and then repeat step 3. Note that the lines and circle are
	  now printed with thick lines as desired.
	
	REFERENCES
	==========
	
	For information on a related bug, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q176634 : BUG: Line/Circle Methods Don't Print as Transparent on Win95/98
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
