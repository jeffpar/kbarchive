---
layout: page
title: "Q159562: WD97: Determining the Current Page and Section Number"
permalink: /kb/159/Q159562/
---

## Q159562: WD97: Determining the Current Page and Section Number

	Article: Q159562
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Visual Basic for Applications, you can use the Information
	property, with the appropriate Type, to return information about the current
	selection. For example, you can determine the current page and section number
	for the insertion point or the selected text.
	
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
	
	The following Visual Basic code demonstrates the use of the Information property
	to return the current page and section number for the current selection in a
	document.
	
	       Public Sub rPageSectionNumber()
	        Dim sCurPage As String
	        Dim sCurSection as String
	        ' Obtain page number.
	        sCurPage = Selection.Information(wdActiveEndPageNumber)
	        ' Obtain section number.
	        sCurSection = Selection.Information(wdActiveEndSectionNumber)
	        ' Display results.
	        MsgBox "Page " & sCurPage & ": " & "Section " & sCurSection
	     End Sub
	
	For more information about the Information property, while in the Visual Basic
	for Applications Editor, click the Office Assistant, type "Information" (without
	the quotation marks) click Search, and then click to view "Information
	Property."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Visual Basic Help is not installed on your
	computer, please see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	For information about how to determine the current page and section number in
	earlier versions of Word, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q81791 WD: Determining the Current Page and Section Number w/WordBasic
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
