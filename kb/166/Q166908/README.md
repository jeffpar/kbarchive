---
layout: page
title: "Q166908: FIX: ScaleMode for Printer Object Can't Create Custom Scale"
permalink: /kb/166/Q166908/
---

## Q166908: FIX: ScaleMode for Printer Object Can't Create Custom Scale

	Article: Q166908
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbprint kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Visual Basic version 5.0, when you set the Printer object's
	ScaleMode property to vbUser (0) to create a user-defined custom coordinate
	system, the behavior of the Printer object does not change. While the value of
	the ScaleMode property displays as zero (0), the Printer object behaves as if
	the ScaleMode property has not changed from its previous value, which is usually
	the default value of one (1).
	
	RESOLUTION
	==========
	
	To work around this problem, use the Scale method to create a user-defined
	custom coordinate system instead of using the ScaleMode property. You can
	specify a custom scale using the following syntax:
	
	     Printer.Scale (x1,y1) - (x2, y2)
	
	where the values of x1 and y1 determine the settings of the ScaleLeft and
	ScaleTop properties, and the differences between the two x-coordinates and the
	two y-coordinates determine the settings of ScaleWidth and ScaleHeight,
	respectively.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	This problem occurs only with the Printer object. The ScaleMode property of a
	PictureBox control or a Form can be successfully set to vbUser (0).
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Add a CommandButton (Command1) to Form1.
	
	3. Add the following code to the Click event for Command1:
	
	        Private Sub Command1_Click()
	
	           With Printer
	
	              .ScaleMode = vbUser               'Create a user-defined custom
	              .ScaleWidth = 8.5                 'scale for 8.5" x 11" paper.
	              .ScaleHeight = 11
	
	              Printer.Circle (4.25, 5.5), 1     'Print a circle in the
	                                                'center of the page.
	
	              .CurrentX = 3.5                   'Print the text at user-
	              .CurrentY = 2                     'defined coordinates x = 3.5
	              Printer.Print "This is a test"    'and y = 2.
	
	              .EndDoc                           'End the print job.
	
	              Debug.Print Printer.ScaleMode     'Display 0 (vbUser).
	
	           End With
	
	        End Sub
	
	4. Press the F5 key to run. Click the CommandButton and note that in the printed
	  output, the circle is not printed in the center of the page as you would
	  expect. Also note that the text is not printed at the custom coordinates
	  (3.5,2) as expected.
	
	Workaround
	----------
	
	To work around this behavior, replace the code in step 3 above with the following
	code that illustrates how to create a custom scale for the Printer object
	successfully by using the Printer object's Scale method rather than its
	ScaleMode property:
	
	     Private Sub Command1_Click()
	
	        With Printer
	
	           Printer.Scale (0, 0)-(8.5, 11)    'Create a user-defined custom
	                                             'scale for 8.5" x 11" paper.
	
	           Printer.Circle (4.25, 5.5), 1     'Print a circle in the
	                                             'center of the page.
	
	           .CurrentX = 3.5                   'Print the text at user-
	           .CurrentY = 2                     'defined coordinates x = 3.5
	           Printer.Print "This is a test"    'and y = 2.
	
	           .EndDoc                           'End the print job.
	
	        End With
	     End Sub
	
	REFERENCES
	==========
	
	"Visual Basic Programmer's Guide", version 5.0, Chapter 12
	
	Additional query words: pset line printing
	
	======================================================================
	Keywords          : kbprint kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
