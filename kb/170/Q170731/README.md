---
layout: page
title: "Q170731: WD97: Macro to Test for the Last Cell in a Table"
permalink: kb/170/Q170731/
---

## Q170731: WD97: Macro to Test for the Last Cell in a Table

	Article: Q170731
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses methods that you can use to determine whether the
	insertion point is within the last cell of a Word table.
	
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
	
	The Selection.Move method moves the insertion point to the next cell in the
	table. The function form of the Selection Move method,
	
	     Selection.Move(Unit:=wdCell, Count:=1)
	
	returns 0 (zero) if there is no next cell in the table. This may be useful for
	avoiding the addition of a new row in a table.
	
	This macro posts a message if the current cell is the last cell in the table. The
	MsgBox command can be replaced by other commands, depending on the purpose of
	the macro.
	
	     Sub IsLastCell()
	        If Selection.Information(wdWithInTable) Then
	           If Selection.Move(Unit:=wdCell, Count:=1) = 0 Then
	              MsgBox "Last cell of table."
	           End If
	        End If
	     End Sub
	
	For more information about Move Method, in the Visual Basic Editor, click the
	Office Assistant, type "Move Method" (without the quotation marks), click
	Search, and then click to view "Move Method (Word 97)."
	
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
	
	Additional query words: vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	
