---
layout: page
title: "Q181530: WD97: Sample Code to Scroll to Top or Bottom of Document Window"
permalink: kb/181/Q181530/
---

## Q181530: WD97: Sample Code to Scroll to Top or Bottom of Document Window

	Article: Q181530
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article provides sample Microsoft Visual Basic for Applications code that
	you can use to scroll the document window so the line containing the insertion
	point moves either to the top or to the bottom of the screen.
	
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
	
	Use the appropriate method for your situation.
	
	Code to Scroll Down One Screen
	------------------------------
	
	  ActiveWindow.LargeScroll Down:=1
	
	Code to Split the Window and Scroll Up Two Screens and Right One Screen
	-----------------------------------------------------------------------
	
	     With ActiveWindow
	       .Split = True
	       .LargeScroll Up:=2, ToRight:=1
	     End With
	
	REFERENCES
	==========
	
	For more information about Scrolling, click the Office Assistant while in the
	Visual Basic Editor, type "Scroll" (without the quotation marks), click Search,
	and then click to view the Scroll method you want to use.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon up page down pgdn pgup pageup pagedown vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
