---
layout: page
title: "Q164623: WD97: InlineShape.Reset Does Not Reset Size of Document Object"
permalink: /kb/164/Q164623/
---

## Q164623: WD97: InlineShape.Reset Does Not Reset Size of Document Object

	Article: Q164623
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Visual Basic for Applications Reset property to reset an OLE
	Word document object inserted as an inline shape back to the original size prior
	to re-scaling, the object is not reset as expected.
	
	CAUSE
	=====
	
	Each time the object is resized, the scaling factor is automatically reset to
	100 percent and the new size becomes the original size.
	
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
	
	The following example Visual Basic for Applications macro creates a new Word
	document, inserts a Word document object, re-scales the document object, and
	then resets the document object to its original size:
	
	     Sub ResetOleShape()
	        ' Create variables.
	        Dim sOriginalHeight, sOriginalWidth As Integer
	        ' Add a new blank document.
	        Documents.Add
	        ActiveDocument.Content.Collapse wdStart
	        ' Create the document object.
	        Set oInlineShape = ActiveDocument.InlineShapes.AddOLEObject _
	        (Range:=ActiveDocument.Content, DisplayAsIcon:=False, _
	        ClassType:="Word.Document.8", LinkToFile:=False)
	        ' Add text to embedded document.
	        ActiveDocument.Content.InsertAfter "Text in Embedded Document."
	        ' Close out of embedded document return to source document.
	        ActiveDocument.Close
	        ' Store the original object size.
	        sOriginalHeight = ActiveDocument.InlineShapes(1).Height
	        sOriginalWidth = ActiveDocument.InlineShapes(1).Width
	        ' Scale the object to a different size(for testing.)
	        ActiveDocument.InlineShapes(1).Height = 100
	        ActiveDocument.InlineShapes(1).Width = 100
	        ' Reset the object to it's original size.
	        MsgBox "OLE object has been resized. Click OK to reset."
	        ActiveDocument.InlineShapes(1).Height = sOriginalHeight
	        ActiveDocument.InlineShapes(1).Width = sOriginalWidth
	     End Sub
	
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
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbinterop kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
