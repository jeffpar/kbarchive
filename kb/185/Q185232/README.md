---
layout: page
title: "Q185232: WD97: Error Message Using WordMail: &quot;This method or property is"
permalink: /kb/185/Q185232/
---

## Q185232: WD97: Error Message Using WordMail: &quot;This method or property is

{% raw %}

	Article: Q185232
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbdta kbdtacode word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using WordMail and you try to automate Word from another program,
	you may encounter problems processing some Word commands. For example, you may
	receive Automation errors such as "This method or property is not available" or
	other errors.
	
	This article describes how to check whether WordMail is running when you are
	using Automation to automate Word from another program.
	
	CAUSE
	=====
	
	This problem occurs when all of the following conditions are true:
	
	- You use the GetObject function to automate Word from another program.
	
	  -and-
	
	- You are running WordMail as your e-mail editor.
	
	  -and-
	
	- There is a current e-mail message open for editing.
	
	The GetObject function allows you to retrieve the current or running instance of
	Word. However, because WordMail uses a hidden or non-visible instance of Word,
	GetObject may return the WordMail instance. There is no way to control which
	instance of Word is returned.
	
	For example, the following Visual Basic for Applications code sample may cause
	the error
	
	  Run-time error '4605': "The Open method or property is not available"
	
	if the current selection is within a WordMail message instead of the Word main
	document window:
	
	     Dim wdObj As Word.Application
	     Set wdObj = GetObject(, "word.application")
	     wdObj.Documents.Open "c:\my documents\doc1.doc"
	
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
	
	To determine if the focus is in a WordMail message, use the Selection.Information
	property together with the FocusInMailHeader property to determine whether a
	WordMail instance or a Word instance has the focus.
	
	FocusInMailHeader Property
	--------------------------
	
	The FocusInMailHeader property returns True if the insertion point is in a
	WordMail header field (the To field, for example).
	
	Selection.Information Property
	------------------------------
	
	Use the Selection.Information property to return information about the specified
	or current selection.
	
	The syntax of the Selection.Information property is
	
	     Selection.Information(Type)
	
	where Type is a constant specifying the information to return.
	
	Use wdInWordMail as the Type constant to return a value that indicates the
	WordMail location of the selection, as shown in the following table:
	
	  Value       WordMail Location
	  -----------------------------
	  0(zero)     The selection or range is not in a WordMail message.
	
	  1           The selection or range is in a WordMail send note.
	
	  2           The selection or range is in a WordMail read note.
	
	Example
	-------
	
	The following sample code demonstrates how to use these properties to determine
	whether WordMail or Word has the current focus:
	
	  Sub CheckForWordMail()
	     Dim wdObj As Word.Application
	     Dim boolWordMail As Boolean
	     ' Initialize values.
	     boolWordMail = False
	     ' If Word is running or a WordMail e-mail
	     ' message is open, use GetObject. If Word
	     ' or WordMail is not running, an error will occur.
	     On Error Resume Next
	     Set wdObj = GetObject(, "word.application")
	     If Err.Number = 0 Then
	        ' If no error has occurred, call isWordMail Function
	        ' to see if Word instance is Word or WordMail.
	        boolWordMail = isWordMail(wdObj)
	     Else
	        ' If an error has occurred, create
	        ' new instance of Word.
	        Set wdObj = CreateObject("word.application")
	        wdObj.Documents.Add
	     End If
	     If boolWordMail Then
	        ' <Code to use for WordMail Instance>,
	        ' for example:
	        MsgBox "Focus in WordMail."
	     Else
	        ' <Code to use for Word Instance>,
	        ' for example:
	        MsgBox "Focus in Word."
	     End If
	     ' Free the object variable in memory.
	     Set wdObj = Nothing
	  End Sub
	
	  Function isWordMail(oWord As Word.Application) As Boolean
	     ' Is focus in a WordMail Header (To, CC or Subject line)?
	     If oWord.Application.FocusInMailHeader Then
	        isWordMail = True
	        Exit Function
	     End If
	     ' If not in WordMail Header, is focus in
	     ' the body of a WordMail message?
	     If oWord.Selection.Information(wdInWordMail) Then
	         isWordMail = True
	     End If
	  End Function
	
	For more information about the Information property, in the Visual Basic Editor,
	click the Office Assistant, type "Information property", click Search, and then
	click to view "Information Property."
	
	For more information about the FocusInMailHeader property, in the Visual Basic
	Editor, click the Office Assistant, type "FocusInMailHeader property", click
	Search, and then click to view "FocusInMailHeader Property."
	
	For more information about the GetObject function, in the Visual Basic Editor,
	click the Office Assistant, type "GetObject", click Search, and then click to
	view "GetObject function."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vba vbe vb excel vbwin xl email
	
	======================================================================
	Keywords          : kbinterop kbdta kbdtacode word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
