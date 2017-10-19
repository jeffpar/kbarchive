---
layout: page
title: "Q181172: WD97: How to Clear the Undo Stack"
permalink: /kb/181/Q181172/
---

## Q181172: WD97: How to Clear the Undo Stack

	Article: Q181172
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbmacroexample word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains several methods for clearing the Undo stack in Word.
	
	
	MORE INFORMATION
	================
	
	By design, you cannot turn off the Undo or Redo commands, nor can you change the
	maximum number of actions Word stores in the Undo or Redo stacks (limited by
	resources and document size (maximum document size of 32 megs without
	graphics)).
	
	
	NOTE: If you are experiencing out-of-memory or slow-performance problems, be sure
	to rule out other Word or system operations as the cause.
	
	To clear the Undo and Redo stacks in Word, use any of the following methods.
	
	Method 1: Protect the Document for Forms
	----------------------------------------
	
	1. On the Tools menu, click Protect Document.
	
	2. Under Protect Document For, click Forms.
	
	3. Click OK.
	
	NOTE: If you do not actually want to protect your document, click Unprotect
	Document on the Tools menu.
	
	Method 2: Create and Use a Macro
	--------------------------------
	
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
	
	The following sample Visual Basic for Applications macro clears the undo stack
	for the active document.
	
	     Sub ClearActiveDocumentUndoStack()
	        ActiveDocument.UndoClear
	     End Sub
	
	The following sample Visual Basic for Applications macro clears the undo stack
	for all open documents.
	
	     Sub ClearAllDocumentsUndoStack()
	        Dim oDocUndoStack as Object
	        For Each oDocUndoStack In Application.Documents
	           oDocUndoStack.UndoClear
	        Next oDocUndoStack
	     End Sub
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	Additional query words: slow slows uses up depleted depletes exhausted exhausts low memory oom insufficient enough out nukes nuked erase erases deletes delete remove removes vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbmacroexample word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
