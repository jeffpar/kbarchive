---
layout: page
title: "Q175924: WD97: Code to Determine Whether Open Document Is a Template"
permalink: kb/175/Q175924/
---

## Q175924: WD97: Code to Determine Whether Open Document Is a Template

	Article: Q175924
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
	
	This article contains a sample Microsoft Visual Basic for Applications procedure
	(or macro) that determines if an open Microsoft Word document is in a document
	format or a template format.
	
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
	
	Sample Procedure
	----------------
	
	     Sub IsTemplate()
	        ' Use the FileSaveAs dialog to determine the typ of document.
	        With Dialogs(wdDialogFileSaveAs)
	           ' Execute the dialog but do not display the dialog.
	           .Execute
	           If .Format = 1 Then
	              MsgBox "Template"
	           Else
	              MsgBox "Not a template"
	           End If
	        End With
	     End Sub
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	For more information about creating Visual Basic for Applications macros, click
	the Office Assistant in Word, type "how to create a macro" (without the
	quotation marks), click Search, and then click to view "Create a macro."
	
	For more information about running Visual Basic for Applications macros, click
	the Office Assistant in Word, type "how to run a macro" (without the quotation
	marks), click Search, and then click to view "Run a macro."
	
	For more information about the Dialogs object, click the Office Assistant in the
	Visual Basic Editor, type "dialogs" (without the quotation marks), click Search,
	and then click to view "Dialog Object."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word or Visual Basic Help are not installed on your
	computer, please see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
