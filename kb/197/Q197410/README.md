---
layout: page
title: "Q197410: WD97: How to Find Out Which Macro Is Assigned to a Menu Command"
permalink: /kb/197/Q197410/
---

## Q197410: WD97: How to Find Out Which Macro Is Assigned to a Menu Command

	Article: Q197410
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro kbmacroexample word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you open a menu and choose a command, Word does not tell you which macro or
	Word command is assigned to that command. This article explains how to return
	the name of the macro assigned to a custom menu or toolbar command.
	
	MORE INFORMATION
	================
	
	To return the name of the macro assigned to a custom menu or toolbar command,
	use the OnAction Property as in the following sample macro:
	
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
	
	     Sub GetMacroCommandAssignment()
	        For Each cb In CommandBars("AutoText").Controls
	           On Error Resume Next
	           MsgBox cb.OnAction
	        Next cb
	     End Sub
	
	NOTE: You cannot return command assignments for built-in menu or toolbar
	commands.
	
	For additional information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	For more information about the OnAction Property, from the Visual Basic for
	Applications Editor, click the Office Assistant, type "OnAction" (without the
	quotation marks), click Search, and then click to view "OnAction Property."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbmacro kbmacroexample word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
