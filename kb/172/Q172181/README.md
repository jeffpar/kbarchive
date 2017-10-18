---
layout: page
title: "Q172181: WD97: WithEvents Fails Quit Event with No Documents Open"
permalink: kb/172/Q172181/
---

## Q172181: WD97: WithEvents Fails Quit Event with No Documents Open

	Article: Q172181
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the WithEvents keyword to trap application events in Microsoft
	Word, you cannot trap the Quit event.
	
	CAUSE
	=====
	
	If no documents are open when Word exits, Word does not generate the Quit event.
	
	WORKAROUND
	==========
	
	To work around this problem, have your Visual Basic for Applications macro
	create at least one document prior to exiting Word. The document can be a blank,
	empty document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
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
	
	WithEvents is an optional keyword for the Dim, Private and Public declaration
	statements. It is used to trap specific Application or ActiveX object events,
	and is valid only in class modules.
	
	To create sample Visual Basic for Applications code that uses the WithEvents
	keyword, follow these steps:
	
	1. On the Tools menu, point to Macros and then click Visual Basic Editor.
	
	2. In the Visual Basic Editor, click to select the Normal module.
	
	3. On the Insert menu, click Class Module.
	
	4. In the General Declarations section of the class module, type the following
	  declaration
	
	  " Public WithEvents App As Application " (without the quotation marks)
	
	  and the following procedure
	
	        Private Sub App_Quit()
	           MsgBox "Exiting Word"
	        End Sub
	
	5. In the General Declarations section of a module, for instance the NewMacros
	  module, type the following declaration
	
	  " Public cExit As New Class1 " (without the quotation marks)
	
	  and the following procedure
	
	        Sub AutoExec()
	           Set cExit.App = Application
	        End Sub
	
	6. Exit and restart Word to initialize the class.
	
	When you exit Word again, the message box containing the Exiting Word prompt is
	displayed.
	
	NOTE: If no documents are open when you exit Word, the Quit event is not
	generated, and the message box is not displayed.
	
	For more information about WithEvents, from the Visual Basic for Applications
	Editor, click the Office Assistant, type "Public Statement" (without the
	quotation marks), click Search, and then click to view "Public Statement."
	
	For more information about trapping events, click the Office Assistant, type
	"events" (without the quotation marks), click Search, and then click one of the
	following topics:
	
	- Using Events with ActiveX Controls
	
	- Using Events with the Application object
	
	- Using Events with the Document Object
	
	- Quit Event
	
	- Open Event
	
	- Auto Macros
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vba vb vbe
	
	======================================================================
	Keywords          : kbcode kbProgramming kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug kbhowto
	
	=============================================================================
	
