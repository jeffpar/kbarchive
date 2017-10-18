---
layout: page
title: "Q170892: WD97: Document Must Be Open to Change Properties by Macro"
permalink: kb/170/Q170892/
---

## Q170892: WD97: Document Must Be Open to Change Properties by Macro

	Article: Q170892
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbmacroexample word8 kbwordvba winword word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you attempt to use Visual Basic for Applications to change the properties of
	a document, you may receive one of the following error messages:
	
	  Run-time error '4248': This command is not available because a document
	  window is not active.
	
	-or-
	
	  Run-time error '4605': Bad File Name
	
	-or-
	
	  Run-time error '5941': The requested member of the collection does not exist.
	
	CAUSE
	=====
	
	This error message occurs when no documents are currently open or the document
	you are referencing is not open.
	
	Word can only change the properties of an open document.
	
	NOTE: In earlier versions of Word, no error message is displayed, and no document
	properties are changed.
	
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
	
	The following sample Visual Basic for Applications macros demonstrates how to
	change the value of the Title field in the Properties dialog box.
	
	This following sample includes code to trap the error, in case there are no
	documents open, and display a message:
	
	  Sub ChangeDocProperties()
	     On Error GoTo ErrHandler
	     ActiveDocument.BuiltInDocumentProperties("Title") = "My Title"
	  ErrHandler:
	     If Err <> 0 Then
	        ' Display an error message.
	        MsgBox Err.Description
	     End If
	  End Sub
	
	The following sample includes code to:
	
	1. Trap the error, in case there are no documents open.
	
	2. Within the error trap, create a new document.
	
	3. Resume execution at the line that caused the error.
	
	  Sub ChangeDocProperties()
	     On Error GoTo ErrHandler
	     ActiveDocument.BuiltInDocumentProperties("Title") = "My Title"
	  ErrHandler:
	     If Err <> 0 Then
	        Documents.Add
	        Resume
	     End If
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
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbcode kbProgramming kbmacroexample word8 kbwordvba winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
