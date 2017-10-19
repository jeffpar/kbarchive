---
layout: page
title: "Q163809: WD97: Extend Selection Is Turned Off After Macro Completion"
permalink: /kb/163/Q163809/
---

## Q163809: WD97: Extend Selection Is Turned Off After Macro Completion

	Article: Q163809
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your Visual Basic for Applications macro contains a line to change ExtendMode
	to "On" (True), when the macro ends, Extend Mode is turned "Off" (it is set back
	to False).
	
	NOTE: In earlier versions of Microsoft Word, extend selection mode remained on,
	upon completion of the macro.
	
	CAUSE
	=====
	
	This functionality is by design. The following sample Visual Basic for
	Applications macro demonstrates this behavior by changing extend selection mode
	to "On":
	
	  Sub TurnExtendModeOn()
	     Selection.ExtendMode = True
	     Msgbox "Extend Mode is On."
	  End Sub
	
	When the macro ends, extend selection mode will be turned "Off".
	
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
	
	For more information about how to use the sample code in this article, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	MORE INFORMATION
	================
	
	Microsoft welcomes suggestions or comments about changes in functionality and
	product design. For more information about how to submit suggestions, please
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q114491 How to Contact the Microsoft Wish Program
	
	For more information about ExtendMode, point to Macro on the Tools menu and click
	Visual Basic Editor. On the macro code page, type "ExtendMode" (without the
	quotation marks) and then press F1.
	
	NOTE: If the macro code page does not appear when you start the Visual Basic
	Editor, click Code on the View menu.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q163425 WD97: Macro Programming Resources
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe toggle
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
