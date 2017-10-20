---
layout: page
title: "Q196964: WD97: Visual Basic 3.0 Does Not Support Named Arguments"
permalink: /kb/196/Q196964/
---

## Q196964: WD97: Visual Basic 3.0 Does Not Support Named Arguments

{% raw %}

	Article: Q196964
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:2.0,97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Access 2.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you use a Microsoft Visual Basic 3.0 application, you cannot call a Visual
	Basic for Applications or WordBasic instruction using named arguments. Instead,
	you must identify these arguments by position using commas as placeholders.
	
	NOTE: Visual Basic 4.0 supports named arguments.
	
	Word 97 Visual Basic for Applications
	-------------------------------------
	
	The following example shows the Visual Basic for Applications syntax as it might
	appear in a Visual Basic for Applications macro in Word:
	
	     Documents.Open FileName:="""table calculation.doc""", _
	     ConfirmConversions:= False, ReadOnly:=False, AddToRecentFiles:=False, _
	     PasswordDocument:="", PasswordTemplate:="", Revert:=False, _
	     WritePasswordDocument:="", WritePasswordTemplate:="", _
	     Format:=wdOpenFormatAuto
	
	Syntax:
	
	     expression.Open(FileName, ConfirmConversions, ReadOnly,
	     AddToRecentFiles, PasswordDocument, PasswordTemplate, Revert,
	     WritePasswordDocument, WritePasswordTemplate, Format)
	
	To use this instruction in a Visual Basic 3.0 procedure, you would write:
	
	     WordObj.Documents.Open "C:\Test.doc", False, False, False,,, False,,, 0
	
	The following Visual Basic procedure opens a Word Document as read-only with the
	file name appearing on the MRU (Most Recently Used) list on the File menu.
	
	     Sub Command1_Click ()
	        Dim WordObj As Object
	        Set WordObj = CreateObject("Word.Basic")
	        WordObj.FileOpen "D:\WINWORD\MYDOC.DOC", , 1, 1
	     End Sub
	
	MORE INFORMATION
	================
	
	If you want to leave out an argument, you must indicate the missing argument
	with a comma. Trailing commas at the end of an instruction can be omitted. In
	the example above, it is not necessary to add additional commas after the final
	argument.
	
	Additional query words: wordcon ole automation word basic object container position vba
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbAccessSearch kbWord97 kbWord97Search kbAccess200 kbZNotKeyword2
	Version           : WINDOWS:2.0,97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
