---
layout: page
title: "Q176238: WD97: Sample Code to Increment Through a Document Line by Line"
permalink: /kb/176/Q176238/
---

## Q176238: WD97: Sample Code to Increment Through a Document Line by Line

	Article: Q176238
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbProgramming kbdta kbdtacode kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article provides a sample Microsoft Visual Basic for Applications procedure
	that increments through a document, line by line.
	
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
	
	The following sample Visual Basic for Applications subroutine (or macro)
	demonstrates looping through a document, line by line. After it selects a line,
	it displays a message box containing the line number. Click OK in the message
	box to allow the code to continue to the next line.
	
	     Sub LineByLine()
	        Dim x As Integer
	        Dim fdWord As String
	        ' Move the insertion point to the beginning of the document.
	        Selection.HomeKey Unit:=wdStory, Extend:=wdMove
	        ' Loop number of lines in document.
	        x = ActiveDocument.BuiltInDocumentProperties("NUMBER OF LINES")
	        For i = 1 To x
	           ' Select a line.
	           ActiveDocument.Bookmarks("\LINE").Select
	           ' Display line number.
	           MsgBox "Line: " & i
	           ' Move to next line.
	           Selection.MoveRight Unit:=wdCharacter, Count:=1, Extend:=wdMove
	        Next i
	     End Sub
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	
	Additional query words: wordcon vba vbe vb loop
	
	======================================================================
	Keywords          : kbProgramming kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
