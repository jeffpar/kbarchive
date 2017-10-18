---
layout: page
title: "Q159973: WD97: Macro to Move Insertion Point to Top of Current Page"
permalink: kb/159/Q159973/
---

## Q159973: WD97: Macro to Move Insertion Point to Top of Current Page

	Article: Q159973
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Word there is no built-in feature that moves the insertion point to
	the top of the current page. However, you can achieve this result by using a
	Microsoft Visual Basic for Applications macro.
	
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
	
	The following macro moves the insertion point to the top of the current page
	using the built-in "\Page" bookmark.
	
	      Sub GoToTopOfPage()
	          Selection.GoTo What:=wdGoToBookmark, Name:="\Page"
	          Selection.MoveLeft Unit:=wdCharacter, Count:=1
	      End Sub
	
	For more information about adding a command to a menu, click Contents And Index
	on the Help menu, click the Index tab in Word Help, type the following text
	
	  " menus " (without the quotation marks)
	
	and then double-click the selected text to go to the "Add a command or other item
	to a menu" topic. If you are unable to find the information you need, ask the
	Office Assistant.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q166861 WD97: How to Use Built-in (or Predefined) Bookmarks in VBA
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	For information about how to do this in earlier versions of Word, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q94977 Macros to Move Insertion Point to Top of Current Page
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
