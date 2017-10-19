---
layout: page
title: "Q185167: WD97: How to Pass a Parameter to a Macro Using Automation"
permalink: /kb/185/Q185167/
---

## Q185167: WD97: How to Pass a Parameter to a Macro Using Automation

	Article: Q185167
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses a method you can use to pass a parameter to a Microsoft
	Word Visual Basic for Applications macro when using automation from another
	application.
	
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
	
	To pass a parameter to a Word Visual Basic for Applications macro using
	Automation, you need to move your Word macro code to the ThisDocument Object
	module of the document or template containing the macro you are calling.
	
	To move your macro to the ThisDocument module, follow these steps:
	
	1. Open the document or template containing the macro you are calling.
	
	2. Press ALT+F11 to open the Word Visual Basic for Applications Editor.
	
	3. Select the macro you want to move or copy.
	
	4. On the Edit menu click Copy to copy your macro or click Cut to move your
	  macro.
	
	5. In the Project Explorer, double-click the document or template project to
	  view "Microsoft Word Objects."
	
	6. Double-click "Microsoft Word Objects," and then double-click "ThisDocument."
	
	7. Click in the "ThisDocument" code window.
	
	8. On the Edit menu click Paste to paste your code into the ThisDocument Object
	  module. For example, if the following macro existed in Word, paste it into
	  the ThisDocument Object module:
	
	        Sub MyWordMacro(strPassedParam As String)
	           MsgBox strPassedParam
	        End Sub
	
	In the application you are using to automate Word, you can use one of the
	following example macros to call and pass a parameter to your Word macro.
	
	Accessing Your Word Macro by Directly Opening a Document or Template
	--------------------------------------------------------------------
	
	Use the following macro to open a document template or a document "based" on a
	template containing your Word macro.
	
	     Sub AutomateWord_OpenDoc()
	        Dim wrdApp As Object
	        Dim wrdDoc As Object
	        Dim strFileName As String
	        Set wrdApp = CreateObject("Word.Application")
	
	        On Error GoTo DocError
	
	        ' Replace the following example string value with the path and
	        ' file name of the document or template containing your macro.
	        strFileName = "<Path and Filename of document or template>"
	
	        ' Open the document or template and set a variable equal to the
	        ' document or template.
	        Set wrdDoc = wrdApp.Documents.Open(strFileName)
	
	        ' Run the macro. (Replace "MyWordMacro" with the name of your macro.)
	        wrdDoc.MyWordMacro ("This is a test.")
	
	     DocError:
	        If Err.Number <> 0 Then Msgbox Err.Description
	
	        ' Quit this instance of Word.
	        wrdApp.Quit
	
	        ' Clear variable memory.
	        Set wrdApp = Nothing
	        Set wrdDoc = Nothing
	
	     End Sub
	
	Accessing a Document Based on the Template Containing Your Macro
	----------------------------------------------------------------
	
	Use the following macro to create a new blank document "based" on a template
	containing your Word macro.
	
	     Sub AutomateWord_OpenDoc()
	        Dim wrdApp As Object
	        Dim wrdDoc As Object
	        Dim strFileName As String
	        Set wrdApp = CreateObject("Word.Application")
	
	        On Error GoTo DocError
	
	        ' Replace the following example string value with the path and
	        ' file name of the template containing your macro.
	        strFileName = "<Path and Filename of template>"
	
	        ' Open the document and set a variable equal to a new blank
	        ' document and its underlying template.
	        Set wrdDoc = wrdApp.Documents.Add(strFileName)
	
	        ' Run the macro. (Replace "MyWordMacro" with the name of your macro.)
	        wrdDoc.MyWordMacro ("This is a test.")
	
	     DocError:
	        If Err.Number <> 0 Then Msgbox Err.Description
	
	        ' Quit this instance of Word.
	        wrdApp.Quit
	
	        ' Clear variable memory.
	        Set wrdApp = Nothing
	        Set wrdDoc = Nothing
	
	     End Sub
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	
	Additional query words: wordcon vba vb vbe OLE
	
	======================================================================
	Keywords          : kbdta kbdtacode word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbhowto
	Solution Type     : kbnofix
	
	=============================================================================
	
