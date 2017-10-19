---
layout: page
title: "Q166973: WD97: Example Macro to Select or Go to a Table Cell"
permalink: /kb/166/Q166973/
---

## Q166973: WD97: Example Macro to Select or Go to a Table Cell

	Article: Q166973
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article provides a sample Microsoft Visual Basic for Applications macro
	demonstrating how to select or go to a specified table cell.
	
	MORE INFORMATION
	================
	
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
	
	Using Visual Basic for Applications, you can move the insertion point or
	selection to a specific table cell.
	
	The following sample macro moves the selection to the second row and third column
	of the first table in the document. When the macro completes the first line of
	code, the entire cell will be highlighted (selected). The second line,
	Selection.Collapse, changes the selection to a insertion point at the beginning
	of the cell.
	
	     Sub GoToTableCell()
	        ActiveDocument.Tables(1).Cell(Row:=2, Column:=3).Range.Select
	        Selection.Collapse
	     End Sub
	
	For more information about automating common Word tasks, from the Visual Basic
	for Applications Editor, click the Office Assistant, type "automating common
	word tasks" (without the quotation marks) click Search, and then click to view
	"Automating common Word tasks."
	
	For more information about the Collapse method, from the Visual Basic for
	Applications Editor, click the Office Assistant, type "Collapse" (without the
	quotation marks) click Search, and then click to view "Collapse Method."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vbe vba
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
