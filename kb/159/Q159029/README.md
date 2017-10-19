---
layout: page
title: "Q159029: WD97: Macro to Count Number of Rows in a Table"
permalink: /kb/159/Q159029/
---

## Q159029: WD97: Macro to Count Number of Rows in a Table

	Article: Q159029
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro kbusage kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Word does not have an automatic feature to count the number of rows in
	a table; however, you can create a simple macro to return these values.
	
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
	
	Method 1: Use the Information property to return the number of rows
	-------------------------------------------------------------------
	
	Use the Microsoft Visual Basic for Applications Selection.Information property to
	return the number of rows in a table.
	
	NOTE: The insertion point must be located in the table before you run the macro.
	
	     Sub numRowsInCurrentTable
	        MsgBox Selection.Information(wdMaximumNumberOfRows)
	     End sub
	
	For more information about the Information Property, click the Office Assistant
	while in the Visual Basic Editor, type "Information Property" (without the
	quotation marks), click Search, and then click to view "Information Property."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	Method 2: Use the the Tables property to return the number of rows
	------------------------------------------------------------------
	
	Use the Microsoft Visual Basic for Applications Tables property to return the
	number of rows within a table. This method will return the total number of rows
	for the first table in the document. The insertion point does not need to be in
	the table.
	
	     Sub numRowsInSpecificTable
	        MsgBox ActiveDocument.Tables(1).Rows.Count
	     End Sub
	
	For more information about the Tables Property, click the Office Assistant while
	in the Visual Basic Editor, type "Tables Property" (without the quotation
	marks), click Search, and then click to view "Tables Property."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For information about how to do this in earlier versions of Word, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q82085 WD: Macro to Count Number of Rows in a Table
	
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
	Keywords          : kbmacro kbusage kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
