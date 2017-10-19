---
layout: page
title: "Q194323: PRB: Setting Printer.Font.Size with StdFont Gives Wrong Values"
permalink: /kb/194/Q194323/
---

## Q194323: PRB: Setting Printer.Font.Size with StdFont Gives Wrong Values

	Article: Q194323
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set a font size by assigning a value directly to Printer.FontSize, or
	Printer.Font.Size, you get a different value than when using a StdFont object.
	
	CAUSE
	=====
	
	The issue here is that the default StdFont object is always based on the display
	hDC (Device Context handle), not the printer hDC. So when executing a line such
	as this:
	
	     Set Printer.Font = MyStdFont
	
	the actual font handle created is using the display Device Context (DC). Because
	the printer has a slightly different scale than the display, the font size
	generated is also a little different.
	
	RESOLUTION
	==========
	
	As long as you consistently use a StdFont object (late binding) or consistently
	set the FontSize directly (early binding) and do not try to use both techniques
	in your code, this behavior should have no noticeable effect.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	A Device Context (DC) is defined as a link between a Windows-based application,
	a device driver, and an output device, such as a display, printer, or plotter.
	These DCs are created as needed and are identified by a device context handle,
	or hDC.
	
	When a StdFont object is instantiated, it has no way of knowing what devices will
	be using it. Therefore, to be consistent, it is always based on the display
	Device Context. If it were to try and change its hDC to that of the device to
	which it was being assigned, undesired behavior would result for shared Font
	objects that are used across different devices.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Add a CommandButton to Form1.
	
	3. Place the following code into Form1's code window:
	
	        Private Sub Command1_Click()
	          Printer.FontName = "Arial"
	          Printer.FontSize = 8
	          Debug.Print Printer.FontName;
	          Debug.Print Printer.FontSize;
	          Debug.Print Printer.TextWidth("TEST")
	
	          Printer.Font.Name = "Arial"
	          Printer.Font.Size = 8
	          Debug.Print Printer.FontName;
	          Debug.Print Printer.FontSize;
	          Debug.Print Printer.TextWidth("TEST")
	
	          Dim f As New StdFont
	          f.Name = "Arial"
	          f.Size = 8
	          Set Printer.Font = f
	          Debug.Print Printer.FontName;
	          Debug.Print Printer.FontSize;
	          Debug.Print Printer.TextWidth("TEST")
	        End Sub
	
	4. Run the project and click on Command1. You should see something similar to
	  the following output in the Immediate window:
	
	  Arial 7.92 413
	  Arial 7.92 413
	  Arial 8.16 422
	
	  The first two values match, but the value when using StdFont is different.
	
	REFERENCES
	==========
	
	For more information on Device Contexts, search Help for "hDC property" or
	"device context handle."
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q190223 : PRB: StdFont Rescales When Shared with Printer Object
	
	(c) Microsoft Corporation 1998. All Rights Reserved.
	Contributions by Chris E. Jolley, Microsoft Corporation.
	
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600 kbVBp500 kbFont kbPrinting
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
