---
layout: page
title: "Q166194: WD97: How To Hide The Full Screen Toolbar Using VB Code"
permalink: kb/166/Q166194/
---

## Q166194: WD97: How To Hide The Full Screen Toolbar Using VB Code

	Article: Q166194
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbProgramming kbdta kbdtacode kbmacroexample word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Word 97 user interface does not provide a way to disable the Full Screen
	toolbar. This functionality is different from previous versions of Word. This
	article describes a Visual Basic for Applications macro that hides the Full
	Screen toolbar.
	
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
	
	     Sub HideFullScrToolBar()
	         ' Using the CommandBars Collection, identify the toolbar
	         ' you want to hide. Set Visible to equal false in order
	         ' to hide it.
	         CommandBars("full screen").Visible = False
	     End Sub
	
	For information about how to redisplay the Full Screen toolbar, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q161988 WD97: Full Screen View Toolbar Is Hidden
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe show hide toolbars display view
	
	======================================================================
	Keywords          : kbProgramming kbdta kbdtacode kbmacroexample word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
