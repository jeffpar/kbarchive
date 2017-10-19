---
layout: page
title: "Q171126: WD97: Macro to Test for an Existing Macro Name"
permalink: /kb/171/Q171126/
---

## Q171126: WD97: Macro to Test for an Existing Macro Name

	Article: Q171126
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbdta kbdtacode kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to run a Visual Basic for Applications macro from within
	another macro or routine in Word, you may receive one of the following error
	messages:
	
	  Run-time error '4633': Unable to run the specified macro
	
	  -or-
	
	  Run-time error '4649': Unable to create the specified macro
	
	CAUSE
	=====
	
	The macro specified by your code may not exist.
	
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
	
	When you write Visual Basic for Applications code, you may need to test for the
	existence of a macro before running it.
	
	The following Visual Basic for Applications macro sample traps the errors
	described earlier. If the specified macro does not exist, the error trap can be
	used to branch selectively.
	
	NOTE: Using this example, if the macro is found, the macro will run. If you want
	to test only for the existence of a macro, without running the macro, replace
	.Run = True with .Run = False.
	
	     Sub DoesMacroExist()
	        On Error Resume Next
	        ' Use the Macro Dialog to run macro.
	        With Dialogs(wdDialogToolsMacro)
	           .Name = "xcallmacro"
	           ' Attempt to run the macro.
	           .Run = True
	           .Execute
	           ' If macro does not exist, an error will occur.
	           If Err = 4633 Or Err = 4649 Then
	              MsgBox "Macro not found."
	           ElseIf Err = 0 Then
	              MsgBox "Macro found."
	           Else
	              Err.Description
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
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbcode kberrmsg kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
