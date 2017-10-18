---
layout: page
title: "Q161407: WD97: VB Macro Examples to Insert Text into a Document"
permalink: kb/161/Q161407/
---

## Q161407: WD97: VB Macro Examples to Insert Text into a Document

	Article: Q161407
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
	
	This article provides several Visual Basic for Applications macro examples that
	use the Selection property and the Range object to insert text into a document.
	
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
	
	Using the Selection Object and the TypeText Method
	--------------------------------------------------
	
	Inserts the specified text. If the ReplaceSelection Property is True, the
	selection is replaced by the specified text. If ReplaceSelection Property is
	False, the specified text is inserted before the selection.
	
	For more information about the ReplaceSelection Property, from the Visual Basic
	Editor, click the Office Assistant, type "ReplaceSelection Property" (without
	the quotation marks), click Search, and then click to view "ReplaceSelection
	Property."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	     Sub TypeTextMethod()
	       Dim MyText As String
	       MyText = "<Replace this with your text>"
	       Selection.TypeText (MyText)
	     End Sub
	
	Using the Range object
	----------------------
	
	The following example replaces the entire contents of a document with the word
	"Replaced" regardless of the current position of the insertion point.
	
	     Sub RangeProperty()
	       ' Range Example:
	       ActiveDocument.Range.Text = "Replaced"
	     End Sub
	
	Using Range or Selection Object with the InsertAfter/InsertBefore Method
	------------------------------------------------------------------------
	
	InsertAfter Method example:
	
	Inserts the specified text at the end of a range or selection.
	
	     Sub InsertAfterMethod()
	       Dim MyText As String
	       Dim MyRange As Object
	       Set MyRange = ActiveDocument.Range
	       MyText = "<Replace this with your text>"
	
	       ' Selection Example:
	       Selection.InsertAfter (MyText)
	
	       ' Range Example:
	       ' (Inserts text at the current position of the insertion point.)
	       MyRange.Collapse
	       MyRange.InsertAfter (MyText)
	     End Sub
	
	InsertBefore Method example:
	
	Inserts the specified text at the beginning of a range or selection. After this
	method is applied, the range or selection expands to include the new text.
	
	     Sub InsertBeforeMethod()
	        Dim MyText As String
	        Dim MyRange As Object
	        Set MyRange = ActiveDocument.Range
	        MyText = "<Replace this with your text>"
	
	        ' Selection Example:
	        Selection.InsertBefore (MyText)
	
	        ' Range Example: Inserts text at the beginning
	        ' of the active document.
	        MyRange.InsertBefore (MyText)
	     End Sub
	
	Inserting a comment into a document using the Range or Selection Object
	-----------------------------------------------------------------------
	
	Inserts a comment at the current position of the insertion point.
	
	     Sub CommentsCollectionObject()
	        Dim MyText As String
	        Dim MyRange As Object
	        Set MyRange = ActiveDocument.Range
	        MyText = "<Replace this with your text>"
	
	       ' Selection Example:
	       Selection.Comments.Add Range:=Selection.Range, Text:=MyText
	
	       ' Range Example:
	       MyRange.Comments.Add Range:=Selection.Range, Text:=MyText
	     End Sub
	
	Inserting a field into a document using the Range or Selection Object
	---------------------------------------------------------------------
	
	Inserts a field at the current position of the insertion point.
	
	     Sub FieldsCollectionObject()
	        Dim MyText As String
	        Dim MyRange As Object
	        Set MyRange = Selection.Range
	        MyText = "<Replace this with your text>"
	
	        ' Selection Example:
	        Selection.Fields.Add Range:=Selection.Range, _
	           Type:=wdFieldQuote, Text:=MyText
	
	        ' Range Example:
	         Range.Fields.Add Range:=Selection.Range, _
	           Type:=wdFieldQuote, Text:=MyText
	     End Sub
	
	This example inserts a formula field. The result is formatted with a dollar
	sign.
	
	     Sub InsertFormulaMethod()
	        Selection.InsertFormula Formula:="=100,000.0-45,000.0", _
	           NumberFormat:="$#,##0.0"
	     End Sub
	
	For information about how to do this in earlier versions of Word, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q86079 Inserting Macro Variable Contents into a Document Window
	
	For more information about using the Range Object, from the Visual Basic Editor,
	click the Office Assistant, type "Range Object" (without the quotation marks),
	click Search, and then click to view "Range Object."
	
	For more information about using the Selection Object, from the Visual Basic
	Editor, click the Office Assistant, type "Selection Object" (without the
	quotation marks), click Search, and then click to view "Selection Object."
	
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
	Keywords          : kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
