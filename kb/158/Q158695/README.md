---
layout: page
title: "Q158695: WD97: How to Use the Name...As Statement to Rename Files"
permalink: /kb/158/Q158695/
---

## Q158695: WD97: How to Use the Name...As Statement to Rename Files

	Article: Q158695
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Word, the Microsoft Visual Basic for Applications Name Statement
	allows you to rename a specified file, directory, or folder.
	
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
	
	The following Microsoft Visual Basic for Applications example code demonstrates
	how to trap for run-time errors when using the Name Statement:
	
	     Sub RenameFile()
	       Dim sOldPathName As String
	       sOldPathName = "c:\winword\test.doc"
	       On Error Resume Next
	       Name sOldPathName As "c:\winword\test2.doc"
	       If err Then MsgBox Err.Description
	     End Sub
	
	For more information about the Name Statement, click the Office Assistant while
	in the Visual Basic Editor, type "Name Statement" (without the quotation marks)
	click Search, and then click to view "Name Statement."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For information about how to use the WordBasic Name command in earlier versions
	of Word, please see the following article in the Microsoft Knowledge Base:
	
	  Q86714 WD: Using the WordBasic Name...As Command to Rename Files
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
