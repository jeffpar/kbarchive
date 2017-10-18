---
layout: page
title: "Q160022: WD97: Symbol Characters Change to Box Characters"
permalink: kb/160/Q160022/
---

## Q160022: WD97: Symbol Characters Change to Box Characters

	Article: Q160022
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	For a Microsoft Word 2002 version of this article, see Q290978.
	
	SYMPTOMS
	========
	
	When you format text with a symbol font, such as Wingdings, and then change to a
	non-symbol font such as Times New Roman, the text is replaced with box
	characters.
	
	CAUSE
	=====
	
	Word displays the box characters after it translates the symbol font to its
	Unicode equivalent.
	
	This problem occurs when you do the following:
	
	1. Format text using a symbol font, such as Wingdings.
	
	2. Select the text from Step 1 and apply a non-symbol font, such as Times New
	  Roman.
	
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
	
	The following Microsoft Visual Basic for Applications macro converts the symbol
	characters to non-symbol characters:
	
	NOTE: Select the square characters before you run the following macro.
	
	  Sub ConvertSymbol()
	     Dim dlg As Object
	     Dim NoFC As Integer
	     Dim SCP As Integer
	     Dim StartRange As Range
	     Dim UniCodeNum As Integer
	     ' Temporarily disable Screen Updating
	     Application.ScreenUpdating = False
	     ' Temporarily disable Smart Cut & Paste
	     If Options.SmartCutPaste = True Then
	        SCP = 1
	        Options.SmartCutPaste = False
	     End If
	     ' Temporarily display field text
	     If ActiveWindow.View.ShowFieldCodes = False Then
	        NoFC = 1
	        ActiveWindow.View.ShowFieldCodes = True
	     End If
	     ' Set StartRange variable to current selection's range
	     Set StartRange = Selection.Range
	     Selection.Collapse
	     ' Select first, then each next character in user-defined selection
	     Selection.MoveRight unit:=wdCharacter, Extend:=wdExtend
	     While Selection.End <= StartRange.End And _
	     ActiveDocument.Content.End > Selection.End
	       ' If the character is a space, then move to next character
	       Set dlg = Dialogs(wdDialogInsertSymbol)
	       UniCodeNum = dlg.charnum
	       If UniCodeNum = 32 Then
	         Selection.Collapse
	         Selection.MoveRight unit:=wdCharacter, Extend:=wdMove
	         Selection.MoveRight unit:=wdCharacter, Extend:=wdExtend
	       End If
	       ' Loop, converting symbol Unicode characters to ASCII characters
	       Set dlg = Dialogs(wdDialogInsertSymbol)
	       UniCodeNum = dlg.charnum
	       While UniCodeNum < 0 And Selection.End <= StartRange.End _
	       And ActiveDocument.Content.End > Selection.End
	          Selection.Delete
	          Selection.InsertAfter (ChrW(UniCodeNum + 4096))
	          Selection.Collapse (wdCollapseEnd)
	          Selection.MoveRight unit:=wdCharacter, Extend:=wdExtend
	          Set dlg = Dialogs(wdDialogInsertSymbol)
	          UniCodeNum = dlg.charnum
	       Wend
	       Selection.Collapse (wdCollapseEnd)
	       Selection.MoveRight unit:=wdCharacter, Extend:=wdExtend
	     Wend
	     ' Reset Word document settings
	     If SCP = 1 Then Options.SmartCutPaste = True
	     If NoFC = 1 Then ActiveWindow.View.ShowFieldCodes = False
	        Selection.Collapse (wdCollapseStart)
	        Selection.MoveLeft unit:=wdCharacter
	        Application.ScreenUpdating = True
	  End Sub
	
	MORE INFORMATION
	================
	
	The following table lists common symbol and non-symbol fonts.
	
	  Symbol Fonts                             Non-Symbol Fonts
	  ---------------------------------------------------------
	  Bookshelf Symbol 3                       Arial
	  Marlett                                  Book Antiqua
	  Monotype Sorts                           Bookman Old Style
	  MS Outlook                               Century Schoolbook
	  MT Extra                                 Courier New
	  Symbol                                   Garamond
	  Wingdings                                Times New Roman
	
	Unicode
	-------
	
	Unicode is a 16-bit character set designed to cover all the world's major living
	languages, in addition to scientific symbols and dead languages that are the
	subject of scholarly interest. It eliminates the complexity of multi-byte
	character sets that are currently used on UNIX and Windows to support Asian
	languages. A consortium of companies including Apple, Microsoft, Hewlett-Packard
	(HP), Digital, and IBM created Unicode. These companies used information from
	the ISO-10646 standard to produce a single standard in 1993. Unicode is the
	basis for the Windows NT operating system.
	
	Unicode is a 16-bit character set where all characters occupy the same space. The
	first 256 values are the same as the ISO-Latin character set, which is also the
	basis for the ANSI character set used in Windows 3.1 and Windows 95. However,
	Unicode defines 34,168 distinct coded characters. In most character sets, a
	single value is often assigned to several characters. For example, in ASCII a
	"-" is used to represent a hyphen, a minus sign, a dash, and a non-breaking
	hyphen. In Unicode, each meaning is given its own code; that is, a hyphen is
	represented by a character different from a minus sign, and so forth. The
	Unicode standard contains only one instance of each character and assigns it a
	unique name and code value. It also supports "combining" accent characters,
	which follow the base character that they are to modify.
	
	For more information about Unicode, visit the Unicode Web site at:
	
	  http://www.unicode.org/ (http://www.unicode.org/)
	
	Additional query words: square boxed garbage incorrect font symbols change changed changing boxes wd97
	
	======================================================================
	Keywords          : kbdta kbdtacode kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
