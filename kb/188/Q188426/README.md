---
layout: page
title: "Q188426: WD97: Macro to Insert Style Name in Each Paragraph"
permalink: /kb/188/Q188426/
---

## Q188426: WD97: Macro to Insert Style Name in Each Paragraph

	Article: Q188426
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbmacroexample kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Word, you can display the style names used in a document as a view
	option only. There is no built-in feature that inserts the style name of each
	paragraph next to that paragraph and print out the information.
	
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
	
	This sample macro inserts the applied paragraph style name at the beginning of
	each paragraph in the document. The document can then be printed for reference
	purposes.
	
	NOTE: This macro will change the text in your document. Therefore, you should run
	it on a backup copy of your document (rename the document and run the macro in
	the renamed document).
	
	     Sub InsertStyleNames()
	        ' This example inserts the style name at the beginning of every
	        ' paragraph in the active document.
	        Dim para As Object
	        ' Move to beginning of document.
	        Selection.HomeKey Unit:=wdStory
	        For Each para In ActiveDocument.Paragraphs
	           ' Move cursor to beginning of line.
	           Selection.HomeKey wdLine
	           ' Inserts the style name and >> characters.
	           Selection.TypeText para.Style & ">>"
	           ' Move to next paragraph.
	           Selection.Move wdParagraph
	        Next para
	     End Sub
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	For more information about running sample, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	Additional query words: kbcode kbmacro vba vb
	
	======================================================================
	Keywords          : kbdta kbmacroexample kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
