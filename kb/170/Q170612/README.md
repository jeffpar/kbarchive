---
layout: page
title: "Q170612: WD97: Macro to Create Table of Contents Entry Automatically"
permalink: /kb/170/Q170612/
---

## Q170612: WD97: Macro to Create Table of Contents Entry Automatically

	Article: Q170612
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
	
	The following macro example allows you to designate selected text as a table of
	contents entry without removing the text from the body of the document and
	without having to type the table of contents entry twice.
	
	NOTE: Microsoft Word provides a method for marking table of contents entries. To
	do this, select the text that you want to mark as a table of contents entry and
	press ALT+SHIFT+O. However, you can also use the macro described in this
	article.
	
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
	
	You can assign the following macro to a menu, toolbar, or key sequence to quickly
	designate text to be included in a table of contents.
	
	     Sub EnterTCField()
	        Dim SelectedText As String
	        ' Selection must be text.
	        If Selection.Type = wdSelectionNormal Then
	           ' Get selected text and place it within quotation marks.
	           SelectedText = Chr$(34) & Selection.Text & Chr$(34)
	           ' Move insertion point to end of selection.
	           Selection.Collapse (wdCollapseEnd)
	           ' Insert TC field.
	           Selection.Fields.Add Range:=Selection.Range, _
	           Type:=wdFieldTOCEntry, Text:=SelectedText
	        Else
	           MsgBox "The selected text is not valid for a TC field."
	        End If
	     End Sub
	
	When you have designated all of the table of contents entries with this macro,
	choose Table Of Contents from the Insert menu. Click Options and click to select
	the Table entry fields check box.
	
	Table of Contents entries or TC fields are automatically formatted as hidden
	text. To edit these entries, you must select either Show All or Hidden Text. To
	do this, do the following:
	
	1. On the Tools menu, click Options.
	
	2. On the View tab, click to select Field Codes.
	
	3. Click to select the Hidden Text check box.
	
	For more information about Table of Contents Entry fields, click Contents And
	Index on the Help menu, click the Index tab in Word Help, type the following
	text
	
	  TC
	
	and then double-click the selected text to go to the "Field codes: TC (Table of
	Contents Entry) field" topic. If you are unable to find the information you
	need, ask the Office Assistant.
	
	For more information about adding a command to a menu, click Contents And Index
	on the Help menu, click the Index tab in Word Help, type the following text
	
	  menus, commands
	
	and then double-click the selected text to go to the "Add a command or other item
	to a menu" topic. If you are unable to find the information you need, ask the
	Office Assistant.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q70996 WD: Macro to Create Table of Contents Entry Automatically
	
	  Q163547 WD97: How to Create Custom Toolbars and Toolbar Buttons
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
