---
layout: page
title: "Q163808: WD97: Picture Is Pasted as Float Over Text, Not as Inline"
permalink: /kb/163/Q163808/
---

## Q163808: WD97: Picture Is Pasted as Float Over Text, Not as Inline

{% raw %}

	Article: Q163808
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word97kbfaq
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you choose to paste a picture from the Clipboard to a document, Word pastes
	the picture as a floating object (Float Over Text).
	
	CAUSE
	=====
	
	By design, Word pastes the picture as a floating object (Float Over Text).
	
	This article includes a macro that changes this default behavior, so that an
	object is pasted as an inline object rather than a floating object.
	
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
	
	The following macro changes the default behavior in Word so that pasted objects
	are pasted as inline rather than floating objects.
	
	NOTE: Office Art objects are converted to pictures and pasted inline.
	
	     Sub EditPasteObject()
	        On Error GoTo ErrHandler ' Error will occur if object is Office Art.
	        ActiveWindow.View.Type = wdPageView
	        Selection.PasteSpecial Placement:=wdInLine
	        ' If the object is not text, then convert it.
	        If Selection.Type = wdSelectionShape Then
	             Selection.ShapeRange.ConvertToInlineShape
	        End If
	     ErrHandler:
	        If Err <> 0 Then
	           ' If the object is Office Art, paste it as an inline picture
	           ActiveDocument.Undo
	           Selection.PasteSpecial DataType:=wdPasteMetafilePicture,
	           Placement:=wdInLine
	        End If
	     End Sub
	
	Copy the picture to the clipboard. If you want to paste the picture as an inline
	object, run this macro. If you want to paste the object normally (as a floating
	object), use the Paste command on the Edit menu.
	
	
	MORE INFORMATION
	================
	
	Inline objects are treated as characters and are positioned as characters within
	a line of text. In versions of Word earlier than Word 97 for Windows and Word 98
	Macintosh Edition, all pictures are treated as inline objects.
	
	Floating objects are anchored to a range of text but can be positioned anywhere
	on the page.
	
	For more information about inline objects, click the Office Assistant, type
	"InlineShape," click Search, and then click to view "InlineShape Object."
	
	For more information about floating objects, in the Visual Basic Editor, click
	the Office Assistant, type "Shape," click Search, and then click to view "Shape
	Object."
	
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
	Keywords          : kbdta kbdtacode kbmacroexample word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
