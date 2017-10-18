---
layout: page
title: "Q162940: WD97: WordBasic.EditGoTo Does Not Go to Bookmark"
permalink: kb/162/Q162940/
---

## Q162940: WD97: WordBasic.EditGoTo Does Not Go to Bookmark

	Article: Q162940
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the WordBasic form of the EditGoTo command to go to a bookmark
	using Visual Basic for Applications, the insertion point moves to the beginning
	of the current page instead of to the item that is marked with a bookmark.
	
	CAUSE
	=====
	
	Calling EditGoTo with WordBasic.EditGoTo will not return an error but it is not
	a supported method and does not function as expected.
	
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
	
	To go to a bookmark, use one of the following Visual Basic for Applications code
	examples:
	
	     Selection.Goto What:=wdGoToBoomark, Name:="MyBookmark"
	
	  -or-
	
	     ActiveDocument.Bookmarks("MyBookmark").Select
	
	  -or-
	
	     WordBasic.EditBookmark name:="MyBookmark", goto:=1
	
	  -or-
	
	     WordBasic.WW7_EditGoto "MyBookmark"
	
	NOTE: When you convert a macro from WordBasic, the "WordBasic.WW7_EditGoto"
	command is used to replace the WordBasic EditGoTo command.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe wordobj word object
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
