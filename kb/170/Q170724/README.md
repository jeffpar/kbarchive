---
layout: page
title: "Q170724: WD97: Macro to Determine If Insertion Point Is in a Table"
permalink: /kb/170/Q170724/
---

## Q170724: WD97: Macro to Determine If Insertion Point Is in a Table

	Article: Q170724
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro kbProgramming kbdtacode word97 kbtable
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you write a macro in Visual Basic for Applications, you may need to know
	whether the insertion point is positioned within a Word for Windows table.
	
	The sample macro in the "More Information" section of this article displays a
	message box stating whether the insertion point is within a Word for Windows
	table.
	
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
	
	This example uses the Visual Basic for Applications "Information" property to
	determine whether the insertion point is within a table.
	
	     Sub IsInTable()
	        'Macro to determine if the insertion point is in a Word table
	        If Selection.Information(wdWithInTable) Then
	           MsgBox "Insertion point is in a Word table"
	        Else
	           MsgBox "Insertion point is not in a Word table"
	        End If
	     End Sub
	
	For more information about using the Information property, in the Visual Basic
	for Applications Editor, click the Office Assistant, type "Information" (without
	the quotation marks), click Search, and then click to view "Information
	Property."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	Additional query words: offcon wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbmacro kbProgramming kbdtacode word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
