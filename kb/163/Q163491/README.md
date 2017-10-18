---
layout: page
title: "Q163491: WD97:Can't Assign an Array to Explicitly Declared Array Variable"
permalink: kb/163/Q163491/
---

## Q163491: WD97:Can't Assign an Array to Explicitly Declared Array Variable

	Article: Q163491
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Visual Basic for Applications language contains properties whose values can
	be returned into an array. To use this functionality, you must declare your
	array as type "variant." Attempting to declare the array as any other type
	results in an error.
	
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
	
	The following Visual Basic for Applications macro sample returns an array that
	contains the names of all writing styles available for the U.S. English
	language. Each writing style and its number in the array are also displayed in a
	message box through means of a loop set to iterate for the total number of items
	in the array.
	
	     Sub GetWritingStyles()
	        ' Dimension the array as type "variant".
	        Dim WrStyles As Variant
	        Dim iCount As Integer
	        ' Assign the values to the array
	        WrStyles = Languages(wdEnglishUS).WritingStyleList
	        ' Loop the number of items in the array and display...
	        ' each item and its array position.
	        For iCount = 1 To UBound(WrStyles)
	           MsgBox WrStyles(iCount)
	        Next iCount
	     End Sub
	
	For more information about declaring variables, from the Visual Basic Editor,
	click the Office Assistant, type "declaring variables" (without the quotation
	marks), click Search, and then click to view "declaring variables."
	
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
	
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kberrmsg kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
