---
layout: page
title: "Q160021: WD97: GoBack Method Switches to Another Document"
permalink: kb/160/Q160021/
---

## Q160021: WD97: GoBack Method Switches to Another Document

	Article: Q160021
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the GoBack Method in a Microsoft Visual Basic for Applications
	macro, or when you press SHIFT+F5, Word may switch to another open document.
	
	CAUSE
	=====
	
	This behavior occurs because the Visual Basic for Applications GoBack Method and
	the SHIFT+F5 keystroke operate at the Word session level rather than at the Word
	document level. The Visual Basic for Applications GoBack Method switches among
	the last three locations in the currently open documents in which text or
	formatting has changed.
	
	If only one document is open, the GoBack Method switches among the last three
	editing positions in the current document.
	
	When you run a macro that uses the GoBack Method and you have more than one
	document open in Word, the insertion point may go to an unexpected location. For
	example, if you use the GoBack Method in an AutoOpen macro, the insertion point
	may go to another document instead of going to the last editing position within
	the document you are opening.
	
	WORKAROUND
	==========
	
	To work around this problem and return to the previous editing location within a
	document, use one of the following methods.
	
	Method 1: Set a Permanent Bookmark
	----------------------------------
	
	When you run the macro, the insertion point will go to this bookmark location.
	
	The following macro creates a bookmark called "mark" at the insertion point.
	
	NOTE: If the document that contains the bookmark is not open, you will receive an
	error.
	
	     Sub SetBookMark()
	        On Error Resume Next
	        Selection.Bookmarks.Add Name:="YourBookmarkName"
	        If Err > 0 Then MsgBox Err.Description
	     End Sub
	
	The following macro returns the insertion point to the bookmark you set.
	
	     Sub GoToMark()
	        On Error Resume Next
	        Selection.GoTo What:=wdGoToBookmark, Name:="mark"
	        If Err > 0 Then MsgBox Err.Description
	     End Sub
	
	For more information about adding bookmarks, click the Office Assistant while in
	the Visual Basic Editor, type "Add Bookmark" (without the quotation marks),
	click Search, and then click to view "Add Method(Bookmarks Collection)."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	Method 2: Set a Named Range
	---------------------------
	
	The named range exists only while the macro is running. You can return to the
	named location from within any document while the document that contains the
	named range is open.
	
	NOTE: If the document that contains the named range is not open, you will receive
	an error message.
	
	The following macro defines a range called "MyRange" at the insertion point:
	
	   Sub SetRangeMark()
	        On Error Resume Next
	        Set MyRange = Selection.Range
	        If Err > 0 Then MsgBox Err.Description
	     End Sub
	
	The following macro returns the insertion point to the range set in the previous
	example:
	
	   Sub GoToMark()
	        On Error Resume Next
	        Selection.GoTo What:=wdGoToBookmark, Name:="mark"
	        If Err > 0 Then MsgBox Err.Description
	     End Sub
	
	For more information about Range Method, click the Office Assistant while in the
	Visual Basic Editor, type "Range Method" (without the quotation marks), click
	Search, and then click to view "Range Method."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	MORE INFORMATION
	================
	
	The following is a sample AutoOpen macro that uses the GoBack method:
	
	     Sub AutoOpen()
	        Application.GoBack
	     End Sub
	
	For information about how to do this in earlier versions of Word, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q101453 GoBack Command Switches to Another Document
	
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
	Keywords          : kbdta kbdtacode word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
