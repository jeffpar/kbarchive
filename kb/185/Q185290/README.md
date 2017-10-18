---
layout: page
title: "Q185290: WD97: Macro to Find Special Characters Based on Unicode Value"
permalink: kb/185/Q185290/
---

## Q185290: WD97: Macro to Find Special Characters Based on Unicode Value

	Article: Q185290
	Product(s): Word 97 for Windows
	Version(s): 97
	Operating System(s): 
	Keyword(s): kbdta kbmacroexample word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains a sample Visual Basic for Applications macro that allows
	you to search for a special character such as an en space or em space as well as
	normal characters (such as a space). The macro identifies the Unicode value of a
	selected character and then displays the Unicode value in the Find What box in
	the Edit Find dialog box.
	
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
	
	The following sample Visual Basic for Applications macro obtains the Unicode
	value of a selected character. If the length of the selection is 1 character,
	the Edit Find dialog box appears with the Unicode value in the Find What box.
	
	NOTE: You must select the character before you run this macro. If you name this
	macro EditFind, it will run when you click Find on the Edit menu.
	
	     Sub EditFindSpecial()
	        Dim strText As String
	
	        ' If the length of the selection is 1 character,
	        ' then get Unicode value of selection.  Otherwise,
	        ' leave variable set to null value.
	        If Len(Selection.Text) = 1 Then
	           strText = "^u" & AscW(Selection.Text)
	        End If
	
	        Selection.Collapse
	        On Error Resume Next
	
	        ' Show Edit Find dialog.
	        With Dialogs(wdDialogEditFind)
	           .Find = strText
	           .Format = False
	           .Show
	        End With
	     End Sub
	
	You can assign this macro to a menu or toolbar. For more information about adding
	a command to a menu, click Contents And Index on the Help menu, click the Index
	tab in Word Help, type the following text
	
	  " menus" (without the quotation marks)
	
	and then double-click the selected text to go to the "Add a command or other item
	to a menu" topic. If you are unable to find the information you need, ask the
	Office Assistant.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q162490 WD97: How to Access Sample Macros for Word 97
	
	  Q171732 WD97: Control Code for Finding/Replacing with Unicode Value
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	
	Additional query words: wordcon vba vbe vb replace symbol hyphen nonbreaking
	
	======================================================================
	Keywords          : kbdta kbmacroexample word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :97
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
