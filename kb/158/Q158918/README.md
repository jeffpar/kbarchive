---
layout: page
title: "Q158918: WD97: How to Insert a Caption Next to an Equation or Object"
permalink: kb/158/Q158918/
---

## Q158918: WD97: How to Insert a Caption Next to an Equation or Object

	Article: Q158918
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbusage kbdta kbdtacode kbmacroexample kbfield word97 kblayout
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Word does not offer a built-in method for automatically inserting a caption
	flush with the right margin of the document. Many scientific journals require
	equation objects to be in one of two formats: the equation is centered and the
	caption is right-aligned; or, the equation is left- aligned and the caption is
	right-aligned. In both cases, the caption number is enclosed in parentheses.
	This article describes several methods for formatting equation objects in one of
	these styles.
	
	NOTE: This article uses the term "equation," but this method applies to any item
	(such as a figure or picture) where the caption needs to appear on the same line
	as the object.
	
	Examples of scientific journal formats:
	
	                             y = mx + b                            ( 1 )
	
	  - or -
	
	y = mx + b                                                          ( 1 )
	
	
	MORE INFORMATION
	================
	
	Step 1: Setting Up the Caption
	------------------------------
	
	To create the caption label with the parentheses, follow these steps:
	
	1. On the Insert menu, click Caption.
	
	2. Click New Label.
	
	3. In the Label box, type an opening parenthesis.
	
	4. Click OK.
	
	5. In the Caption box, to the right of the number, type a space.
	
	6. Type a closing parenthesis.
	
	7. Click OK.
	
	After you create the caption format, you can insert additional captions by doing
	the following:
	
	1. On the Insert menu, click Caption.
	
	2. In the Caption box, to the right of the existing caption, type a space and a
	  closing parenthesis.
	
	3. Click OK.
	
	Step 2: Aligning the Equation and Caption
	-----------------------------------------
	
	NOTE: If you intend to cross-reference the caption number, use Method 2.
	
	Method 1: To set a right-aligned Equation and Caption Number:
	
	1. On the Insert menu, click Caption.
	
	2. Under Label, select the Open Parenthesis, type a space and a closing
	  parenthesis, and then click OK.
	
	3. Move the insertion point to the beginning of the line, before the caption.
	
	4. Set a right-aligned tab at the right margin. For example, if the right margin
	  is six inches from the left margin, set the right-aligned tab at six inches
	  by doing the following:
	
	  a. On the Format menu, click Tabs.
	
	  b. Under Tab Stop Position, enter 6.
	
	  c. Under Alignment, click Right.
	
	  d. Click OK.
	
	5. Insert the equation.
	
	6. Press the TAB key to move the caption to the right edge of the page.
	
	  NOTE: When you insert the equation, clear the Float Over Text check box. The
	  equation object must be an inline object for this method to work.
	
	Method 2: To set a a left-aligned Equation:
	
	1. On a new, blank line, insert the equation.
	
	  NOTE: When you insert the equation, clear the Float Over Text check box. The
	  equation object must be an inline object for this method to work.
	
	2. Exit the Equation Editor by clicking anywhere in the document area.
	
	3. Press TAB and then insert the caption.
	
	4. Select the entire line containing the equation and caption. On the Table
	  menu, click Convert Text to Table. The selection is converted to a two-column
	  table.
	
	5. Remove the border around the table by doing the following:
	
	  a. With the table selected, on the Format menu, click Borders and Shading.
	
	  b. Under Setting, select None.
	
	  c. Click OK.
	
	6. Select the table cell that contains the caption and then click the Align
	  Right button on the Formatting toolbar.
	
	Method 3: To set a center-aligned Equation:
	
	1. On a new, blank line, press TAB, and then insert the equation.
	
	2. Exit the Equation Editor by clicking anywhere in the document area.
	
	  NOTE: When you insert the equation, clear the Float Over Text check box. The
	  equation object must be an inline object for this method to work.
	
	3. Press TAB and then insert the caption.
	
	4. Select the entire line containing the equation and caption. On the Table
	  menu, click Convert Text to Table. The selection is converted to a
	  three-column table.
	
	5. Remove the border around the table by doing the following:
	
	  a. With the table selected, on the Format menu, click Borders and Shading.
	
	  b. Under Setting, select None.
	
	  c. Click OK.
	
	6. Select the table cell containing the equation, and click the Center button on
	  the Formatting toolbar.
	
	7. Select the table cell containing the caption, and click the Align Right
	  button on the Formatting toolbar.
	
	Method 4: Create a Microsoft Visual Basic for Applications macro:
	
	Create a macro that automates the process outlined in Method 2.
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	     Sub CaptionRight()
	        Dim Align As Integer
	        On Error GoTo bye
	        If Selection.Information(wdWithInTable) Then
	           MsgBox "You are in a table. Please move outside of the " _
	              & "table to run this macro.", vbInformation
	           Exit Sub
	        End If
	        Align = MsgBox("Would you like the Equation to be " _
	                 & "centered? (Selecting No will left-align the " _
	                 & "Equation.)", vbYesNoCancel)
	        If Align > 2 Then
	           Selection.InsertParagraphAfter
	           Selection.Collapse (wdCollapseEnd)
	           W = ActiveDocument.PageSetup.PageWidth
	           L = ActiveDocument.PageSetup.LeftMargin
	           R = ActiveDocument.PageSetup.RightMargin
	           RTMarg = W - R - L
	           CaptionLabels.add Name:="("
	           If Align = 6 Then
	              tblT1 = Selection.Tables.add(Selection.Range, 1, 3)
	           Else
	              tblT1 = Selection.Tables.add(Selection.Range, 1, 2)
	           End If
	           tblT1.Select
	           With Selection
	              If Align = 6 Then
	                 .Columns(1).Cells.Width = 50.4
	                 .Columns(3).Cells.Width = 50.4
	                 .Columns(2).Cells.Width = RTMarg - 100.8
	                 'Represents 1.5" in Points
	              Else
	                 .Columns(2).Cells.Width = 50.4
	                 .Columns(1).Cells.Width = RTMarg - 50.4
	                   'Represents .75" in Points
	              End If
	              .InsertCaption Label:="(", _
	                 Position:=wdCaptionPositionBelow, Title:= " )"
	              .HomeKey unit:=wdLine, Extend:=wdExtend
	              .Cut
	              .MoveRight unit:=wdCharacter, Extend:=wdExtend
	              .Delete
	              .MoveLeft unit:=wdCharacter, Count:=2
	              .Paste
	              .Rows(1).Select
	              For Each x In Selection.Borders
	                 x.LineStyle = wdLineStyleNone
	              Next x
	              .Borders.Shadow = False
	              .Cells(9 - Align).Select
	              .ParagraphFormat.Alignment = wdAlignParagraphRight
	              .Cells(1).VerticalAlignment = wdCellAlignVerticalCenter
	              .Font.Bold = True
	              .Rows(1).Select
	              If Align = 6 Then
	                 .Cells(2).Select
	                 .ParagraphFormat.Alignment = wdAlignParagraphCenter
	                 .InlineShapes.AddOLEObject ClassType:="Equation.3", _
	                     FileName:="", LinkToFile:=False, DisplayAsIcon:=False
	              Else
	                 .Collapse
	                 .InlineShapes.AddOLEObject ClassType:="Equation.3", _
	                   FileName:="", LinkToFile:=False, DisplayAsIcon:=False
	              End If
	           End With
	        End If
	     End Sub
	
	Several methods exist for inserting captions. AutoCaption inserts a caption
	either above or below an inserted object; manually inserted captions are placed
	above or below the object when the object is selected, or to the immediate right
	when the insertion point is to the right of the object.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	For information about how to do this in earlier versions of Word, see the
	following article in the Microsoft Knowledge Base:
	
	  Q123430 WD: How to Insert a Caption Next to an Equation or Object
	
	Additional query words: equations captions right center centered align alignment position positioned equation table figure photo picture pictures object objects graphic graph 8.0 word97
	
	======================================================================
	Keywords          : kbualink97 kbusage kbdta kbdtacode kbmacroexample kbfield word97 kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
