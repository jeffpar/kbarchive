---
layout: page
title: "Q183163: BUG: Setting Orientation Changes Background Mix Mode for Printer"
permalink: kb/183/Q183163/
---

## Q183163: BUG: Setting Orientation Changes Background Mix Mode for Printer

	Article: Q183163
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing, a white rectangle appears inside of a printed box instead of the
	expected text, or text appears with a white background when printed onto a
	shaded box.
	
	CAUSE
	=====
	
	When you set Printer.Orientation, or use the Line method, the background mix
	mode for the Printer.hDC is set to Opaque.
	
	RESOLUTION
	==========
	
	Use the SetBkMode API to set the background mix mode back to Transparent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	The background mix mode of a device context (DC) affects text, hatched brushes,
	and pen styles that are not solid lines. The effect can be that the background
	changes so that text is not visible. The API function GetBkMode returns the
	current setting for the background mix mode for a specified DC and SetBkMode
	sets it. The mode can be Opaque or Transparent and has the following effects:
	
	  Value         Description
	  -----------   -----------------------------
	  OPAQUE        Background is filled with the current background color
	                before the text, hatched brush, or pen is drawn.
	
	  TRANSPARENT   Background remains untouched.
	
	The background mix mode should be determined by the FontTransparent Property of
	the Printer object, which defaults to True, meaning that the mode should be
	Transparent. When you set Printer.Orientation, or use the Line method, it can
	have the undesired effect of also setting the background mix mode to Opaque,
	while leaving FontTransparent still set to True. The solution to this is to use
	the SetBkMode API function to set it back to Transparent. The following sample
	demonstrates the problem and a solution.
	
	NOTE: This problem is printer driver-specific, meaning that the exact symptoms
	can vary from driver to driver. Some drivers do not experience this problem at
	all, while others reset the background mix mode to Opaque when any Printer
	object property is changed. This article describes the most common scenario. To
	make sure that you cover the worst possible case, you should call the SetBkMode
	function just before your Printer.Print calls. Then if you change any property
	of the Printer object, call SetBkMode again.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Project in Visual Basic. Form1 is created by default.
	
	2. Add a CommandButton to Form1.
	
	3. Paste the following code into the Form's module:
	
	     Private Declare Function SetBkMode Lib "gdi32" _
	     (ByVal hDC As Long, ByVal nBkMode As Long) As Long
	
	     Private Declare Function GetBkMode Lib "gdi32" _
	     (ByVal hDC As Long) As Long
	
	     'For VB4 16-bit, replace the 2 lines above with the following 2 lines
	     'Private Declare Function SetBkMode Lib "GDI" _
	     (ByVal hDC As Integer, ByVal nBkMode As Integer) As Integer
	
	     'Private Declare Function GetBkMode Lib "GDI" _
	     (ByVal hDC As Integer) As Integer
	
	     Private Const TRANSPARENT = 1
	     Private Const OPAQUE = 2
	
	     Private iBKMode As Long
	
	     Private Sub Command1_Click()
	           iBKMode = GetBkMode(Printer.hDC)
	           Debug.Print "GetBkMode = " & iBKMode
	           ' The next line may set the background mix mode to Opaque
	           'Printer.Orientation = 1 ' May print correctly without this line
	           iBKMode = GetBkMode(Printer.hDC)
	           Debug.Print "GetBkMode = " & iBKMode
	           Debug.Print "Printer.FontTransparent = " & Printer.FontTransparent
	           Printer.ForeColor = &H80000008     ' black
	           ' The Line method can also cause this problem:
	           Printer.Line (100, 100)-(2800, 500), , BF
	           iBKMode = GetBkMode(Printer.hDC)
	           Debug.Print "GetBkMode = " & iBKMode
	           Printer.ForeColor = RGB(255, 255, 255)   ' white
	           Printer.CurrentX = 200
	           Printer.CurrentY = 200
	           ' The next line will reset the background mix mode
	           'iBKMode = SetBkMode(Printer.hDC, TRANSPARENT)
	           Printer.Print "Testing....."
	           Printer.EndDoc
	     End Sub
	
	4. Run the Project and click on Command1. Either a Page prints correctly with a
	  black rectangle containing white text in the upper-left, and the Immediate
	  Window displays the following:
	
	GetBkMode = 1
	GetBkMode = 1
	Printer.FontTransparent = True
	GetBkMode = 1
	
	or a page prints with a black rectangle in the upper-left containing a white
	rectangle instead of text and the Immediate Window displays the following:
	
	GetBkMode = 1
	GetBkMode = 1
	Printer.FontTransparent = True
	GetBkMode = 2
	
	In the latter case, it is the Line method that caused the problem.
	
	5. Choose Stop from the Run menu or click on the Stop button to end the program.
	
	6. Uncomment the line that sets Orientation, run the Project and click on
	  Command1. If a page prints with a black rectangle in the upper-left
	  containing a white rectangle instead of text, it indicates that setting the
	  Orientation property changed the background mix mode and the Immediate Window
	  displays the following:
	
	GetBkMode = 1
	GetBkMode = 2
	Printer.FontTransparent = True
	GetBkMode = 2
	
	7. Uncomment the SetBkMode line, run the Project and click on Command1. ThePage
	  prints correctly again with a black rectangle containing white text in the
	  upper-left.
	
	Additional query words: blank clear
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
