---
layout: page
title: "Q188775: WD97: Table Macro Returns Incorrect Result on Empty Cell"
permalink: kb/188/Q188775/
---

## Q188775: WD97: Table Macro Returns Incorrect Result on Empty Cell

	Article: Q188775
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta KbVBA
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a Visual Basic for Applications macro to select a table cell and
	then test the contents of the cell or check whether the cell is empty, it may
	return a false or invalid result.
	
	CAUSE
	=====
	
	This behavior is by design of Microsoft Word. In Microsoft Word for Windows,
	there are markers in every cell of the table that store formatting attributes.
	When you select a cell in a table manually by double-clicking it or
	programmatically with Select method, the cell marker is included in the
	selection.
	
	WORKAROUND
	==========
	
	When you write macros to test the content of a cell in Word, you must remove or
	account for two additional characters at the right side or end of the selection.
	These characters represent the cell marker.
	
	If you are testing to see if a table cell is empty, then use one of the following
	examples.
	
	Method One--Check for a Character other Than Cell Marker
	--------------------------------------------------------
	
	This macro inserts a space at the end of the cell, and then moves the insertion
	point to the beginning of the cell. If MyVar returns a space, the cell is empty.
	This macro does not work with leading spaces in the text.
	
	     Sub TableCellSpace()
	        ActiveDocument.Tables(1).Cell(Row:=1, Column:=1).Select
	        Selection.InsertAfter " "
	        Selection.MoveLeft Unit:=wdCharacter, Count:=1
	        MyVar = Selection.Text
	        If MyVar= " " then MsgBox "Empty Cell"
	     End Sub
	
	Method Two--Check All Cells in Table Suppress Leading Spaces
	------------------------------------------------------------
	
	This macro checks the number of characters in a table cell, using the Len
	function to count the number of characters and LTrim function to suppress
	leading spaces in the selected content.
	
	To compensate for the cell marker, subtract 2 from the result of the LTrim and
	Len function. All of these features are combined together to apply to the
	content of the selection.
	
	     Sub TableCellTest()
	        For varRow = 1 To ActiveDocument.Tables(1).Rows.Count
	           For varCol = 1 To ActiveDocument.Tables(1).Columns.Count
	              ActiveDocument.Tables(1).Cell(varRow, varCol).Range.Select
	              'Gets number of characters in cell minus cell marker and
	              'leading spaces, then assigns it to the variable.
	              MyVar = Len(LTrim(Selection.Range.Text)) - 2
	              If MyVar = 0 Then
	                 MsgBox "Cell row " & r & ", col. " & c & " is empty"
	              End If
	           Next varCol
	        Next varRow
	        Selection.MoveDown unit:=wdLine
	     End Sub
	
	MORE INFORMATION
	================
	
	In Word, when you select a blank table cell and examine the content, the values
	assigned to the code internally are different from the information displayed in
	a message box: A character count on the cell content returns the value one,
	while the Len function returns the value two. The text value of the selection
	displays a single vertical bar (|) on screen, and a double vertical bar (||)
	internally.
	
	
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
	
	For more information about Len or Trim function, from the Visual Basic Editor,
	click Contents And Index on the Help menu, click the Index tab in Word Help,
	type the following text
	
	  " len or trim " (without the quotation marks)
	
	and then double-click the selected text to go to the "Len Function" topic. If you
	are unable to find the information you need, ask the Office Assistant.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	Additional query words: wordcon Table wd97 VBA Text blank
	
	======================================================================
	Keywords          : kbdta KbVBA 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
