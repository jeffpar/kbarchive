---
layout: page
title: "Q165928: WD97: Range.Text Length Includes &quot;End Of Cell&quot; for Table Cell"
permalink: /kb/165/Q165928/
---

## Q165928: WD97: Range.Text Length Includes &quot;End Of Cell&quot; for Table Cell

	Article: Q165928
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbProgramming kbusage kbdta kbdtacode kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When your Visual Basic for Applications macro returns the number of characters
	within a range of a table cell, if that range includes the entire cell, the
	number of characters returned is one more than expected.
	
	CAUSE
	=====
	
	By design, the End of Cell Mark (ASCII character number 7) is returned as part
	of the text when the cell range is set to include the entire cell. Using the
	Range.Text property includes the paragraph mark and the end of cell mark (ASCII
	13 and ASCII 7) and returns them as a pair.
	
	WORKAROUND
	==========
	
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
	
	To return the number of characters within a range of a table cell, excluding the
	end of cell mark, use one of the following methods.
	
	  NOTE: Each method includes an example of a Visual Basic for Applications
	  macro that:
	
	  1. Sets a range object to an existing table.
	
	  2. Collapses the range to the start of the range (the first cell in the table).
	
	  3. Expands the range to equal the first cell of the table and returns the number
	  of characters within the range.
	
	Method 1: Subtract 1 from the Return Value
	------------------------------------------
	
	You can simply subtract 1 from the returned value to exclude the end of cell mark
	from your character count. This method still includes any paragraph marks within
	the range of text:
	
	     Sub RangeExpandCell()
	        Dim oTableR As Object
	        ' Set a range equal to the first table in the active document.
	        Set oTableR = ActiveDocument.Tables(1).Range
	        ' Collapse the range to the start of the table.
	        oTableR.Collapse wdCollapseStart
	        ' Return the length of text in cell A1 of the table.
	        MsgBox Len(ActiveDocument.Tables(1).Cell(1, 1).Range.Text)-1
	     End Sub
	
	Method 2: Use the Expand Method
	-------------------------------
	
	The Expand method excludes the end of cell mark but includes any paragraph marks
	within the range of text.
	
	     Sub RangeExpandCell()
	        Dim oTableR As Object
	        ' Set a range equal to the first table in the active document.
	        Set oTableR = ActiveDocument.Tables(1).Range
	        ' Collapse the range to the start of the table.
	        oTableR.Collapse wdCollapseStart
	        MsgBox oTableR.Expand(wdCell)
	     End Sub
	
	For more information about Expand Method, from the Visual Basic Editor, click the
	Office Assistant, type "Expand Method" (without the quotation marks), click
	Search, and then click to view "Expand Method."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe mark
	
	======================================================================
	Keywords          : kbProgramming kbusage kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
