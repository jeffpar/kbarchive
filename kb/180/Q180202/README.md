---
layout: page
title: "Q180202: WD97: How to Keep OnEntry Macro from Running at Document Open"
permalink: /kb/180/Q180202/
---

## Q180202: WD97: How to Keep OnEntry Macro from Running at Document Open

	Article: Q180202
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you use form fields in Word and you have assigned an OnEntry macro to the
	first form field in a document, the OnEntry macro will automatically run when
	the document first opens.
	
	This article contains a sample Microsoft Visual Basic for Applications macro (Sub
	procedure) that can be used to work around this issue.
	
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
	
	The following sample Visual Basic for Applications macro tests to see if, upon
	the execution of the macro, the document's Open event has triggered the OnEntry
	macro.
	
	     Sub OnEntry()
	
	        Dim sOpenStatus As String
	        ' An error occurs the first time this macro is
	        ' run because the document variable does not yet exist,
	        ' so we just resume to the next line (the If...Then...Else
	        ' statement).
	        On Error Resume Next
	
	        ' Get the value of the document variable DocOpen,
	        ' and put the value into the string variable sOpenStatus.
	        sOpenStatus = ActiveDocument.Variables("DocOpen")
	
	        If sOpenStatus = "" Then
	
	           ' On the first run of this macro, the value of
	           ' sOpenStatus will be Null because it does not
	           ' yet exist, so we create the document variable and
	           ' set the value to "Already Open."
	           ActiveDocument.Variables.Add Name:="DocOpen", _
	              Value:="Already Open"
	
	        ElseIf sOpenStatus = "Just Opened" Then
	
	           ' If the value of the document variable equals "Just Opened,"
	           ' do not run the other code section of this macro
	           ' and make the document variable equal "Already Open."
	           ActiveDocument.Variables("DocOpen").Value = "Already Open"
	
	        Else
	
	           ' Other code section runs ONLY if the variable
	           ' sOpenStatus equals "Already Open." Place your
	           ' code here that you want to run only when the
	           ' form field is tabbed to or clicked on.
	
	           '<<< Your OnEntry Code Goes Here >>>
	
	        End If
	
	     End Sub
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon on-entry
	
	======================================================================
	Keywords          : kbdta kbdtacode kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
