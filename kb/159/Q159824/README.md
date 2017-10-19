---
layout: page
title: "Q159824: WD97: How to Automatically Update Fields"
permalink: /kb/159/Q159824/
---

## Q159824: WD97: How to Automatically Update Fields

	Article: Q159824
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbusage kbmacroexample word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article provides a Microsoft Visual Basic for Applications macro example
	that automatically updates all fields--including the fields in the header and
	footer--in a Word 97 document or template.
	
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
	
	To create a macro that updates all fields in a document or template, use the
	following steps:
	
	1. On the Tools menu, point to Macro, and then click Visual Basic Editor.
	
	2. In the Visual Basic Project window, expand the Project(<Document/ Template
	  Name>) folder.
	
	3. Double-click "ThisDocument."
	
	4. In the Code window, type either of the following macros:
	
	   - To run the macro when you open the document, type the following code:
	
	          Sub AutoOpen()
	             Dim aStory As Range
	             Dim aField As Field
	             For Each aStory In ActiveDocument.StoryRanges
	                For Each aField In aStory.Fields
	                   aField.Update
	                Next aField
	             Next aStory
	          End Sub
	
	   - To run the macro when you create a new document, type the following code:
	
	           Sub AutoNew()
	             Dim aStory As Range
	             Dim aField As Field
	             For Each aStory In ActiveDocument.StoryRanges
	                For Each aField In aStory.Fields
	                   aField.Update
	                Next aField
	             Next aStory
	           End Sub
	
	5. On the File menu, click Save <Document/Template Name>.
	
	6. Close the Visual Basic Editor.
	
	Each time you open or create a document, the macro will run and update all fields
	in the document or template.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe update updating auto automatic automatically autoupdate autonew autoopen updatefields
	
	======================================================================
	Keywords          : kbualink97 kbusage kbmacroexample word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
