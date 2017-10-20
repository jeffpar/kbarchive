---
layout: page
title: "Q159676: WD97: Close Method in Macro Fails in Protected Form"
permalink: /kb/159/Q159676/
---

## Q159676: WD97: Close Method in Macro Fails in Protected Form

{% raw %}

	Article: Q159676
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta kbdtacode kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You receive the following error message when you press TAB to move to another
	form field:
	
	  Run-time error '4198': Command Failed
	
	CAUSE
	=====
	
	The error occurs when you use the Microsoft Visual Basic for Applications Close
	method in a macro that runs when you exit a form field in a protected document.
	
	WORKAROUND
	==========
	
	Microsoft provides programming examples for illustration only, without Microsoft
	provides programming examples for illustration only, without warranty either
	expressed or implied, including, but not limited to, the implied warranties of
	merchantability and/or fitness for a particular purpose. This article assumes
	that you are familiar with the programming language being demonstrated and the
	tools used to create and debug procedures. Microsoft support professionals can
	help explain the functionality of a particular procedure, but they will not
	modify these examples to provide added functionality or construct procedures to
	meet your specific needs. If you have limited programming experience, you may
	want to contact a Microsoft Certified Partner or the Microsoft fee-based
	consulting line at (800) 936-5200. For more information about Microsoft
	Certified Partners, please visit the following Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	To work around this problem you can use the OnTime method in one macro to call
	another macro that then issues the Close method for your protected form.
	
	The OnTime method uses the following syntax:
	
	     expression.OnTime(When, Name, Tolerance)
	
	Because the Name argument requires the name of a macro to run, you must create
	two macros. The first macro, "MacroToRunOnExit," runs when you exit a form
	field. It calls the second macro, "CloseDocument," which closes the document.
	
	NOTE: When you use this method, you can only use the wdDoNotSaveChanges constant
	for the Close Method.
	
	     Public Sub MacroToRunOnExit()
	     Application.OnTime When:=Now, Name:="CloseDocument"
	     End Sub
	
	     Public Sub CloseDocument()
	        Application.ActiveDocument.Close(wdDoNotSaveChanges)
	     End Sub
	
	To save the document before you close it, add the Save command before the Close
	command:
	
	     Public Sub CloseDocument()
	        Application.ActiveDocument.Save
	        Application.ActiveDocument.Close(wdDoNotSaveChanges)
	     End Sub
	
	For more information about the OnTime method, while in the Visual Basic for
	Applications Editor click the Office Assistant, type "OnTime Method" (without
	the quotation marks), click Search, and then click to view "OnTime Method."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For information about how to do this in earlier versions of Word, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q126366 WD: FileClose in Macro Doesn't Work with Protected Form
	
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
	Keywords          : kberrmsg kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
