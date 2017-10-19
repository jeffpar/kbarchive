---
layout: page
title: "Q175998: WD97: Reference Type Changed in Code, Not in Cross-reference"
permalink: /kb/175/Q175998/
---

## Q175998: WD97: Reference Type Changed in Code, Not in Cross-reference

	Article: Q175998
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbui word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to set the Reference Type in the Cross-reference dialog box
	using a Microsoft Visual Basic for Applications procedure or macro, the
	Reference Type you specify in your procedure or macro is not selected as the
	Reference Type when you view the Cross-reference dialog box. The dialog box
	ignores the Reference Type specified in the procedure or macro.
	
	WORKAROUND
	==========
	
	In Microsoft Word Visual Basic for Applications code us the SendKeys statement
	to access and set the built-in dialog box argument list items.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
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
	
	To demonstrate the problem, the following Visual Basic macro attempts to set the
	Reference Type to "Bookmark" (without the quotation marks):
	
	     Sub SetXRefTypeFail()
	        With Dialogs(wdDialogInsertCrossReference)
	           .Referencetype = "Bookmark"
	           .Update
	           .Show
	        End With
	     End Sub
	
	When you view the Cross-reference dialog box, the Reference Type is not set to
	Bookmark. (To view the Cross-reference dialog box, click Cross-reference on the
	Insert menu.)
	
	To change the type to Bookmark and the reference to Page Number in the Cross
	Reference dialog box use the following example.
	
	     Sub WorkaroundSetXRefType()
	        With Dialogs(WdDialogInsertCrossReference)
	           SendKeys "%tb"
	           SendKeys "{enter}"
	           SendKeys "%r"
	           SendKeys "{down 1}"
	           SendKeys "{enter 2}"
	           .Show
	        End With
	     End Sub
	
	REFERENCES
	==========
	
	For more information about Sendkeys, from the Visual Basic Editor, click the
	Office Assistant, type "sendkeys" (without the quotation marks), click Search,
	and then click to view "SendKeys statement."
	
	For more information about creating Visual Basic for Applications macros, click
	the Office Assistant in Microsoft Word, type "how to create a macro" (without
	the quotation marks), click Search, and then click to view "Create a macro."
	
	For more information about running Visual Basic for Applications macros, click
	the Office Assistant in Microsoft Word, type "how to run a macro" (without the
	quotation marks), click Search, and then click to view "Run a macro."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vba
	
	======================================================================
	Keywords          : kbcode kbProgramming kbui word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
