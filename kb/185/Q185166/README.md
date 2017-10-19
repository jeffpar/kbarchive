---
layout: page
title: "Q185166: WD97: EnableCancelKey Fails to Reset After Macro Completion"
permalink: /kb/185/Q185166/
---

## Q185166: WD97: EnableCancelKey Fails to Reset After Macro Completion

	Article: Q185166
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
	
	When you use the Visual Basic for Applications EnableCancelKey Property with the
	wdCancelDisabled constant to prevent CTRL+BREAK from interrupting a macro,
	CTRL+BREAK continues to be disabled after the macro has finished executing. This
	behavior is different from the behavior described in the EnableCancelKey
	Property Help topic, which states the following:
	
	  The EnableCancelKey property is reset to wdCancelInterrupt when your code
	  stops running.
	
	  NOTE: The wdCancelInterrupt constant resets the EnableCancelKey Property to
	  allow a macro to be interrupted by CTRL+BREAK.
	
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
	
	To work around this problem, make sure the EnableCancelKey Property is reset to
	wdCancelInterrupt at any point before macro termination occurs.
	
	The following example Visual Basic for Applications macro sets an error trap to
	trap an error that may occur. Note that the EnableCancelKey Property is reset to
	wdCancelInterrupt at the point where the macro is terminated.
	
	       Sub IsLastTableRow()
	
	        ' Disable CTRL+BREAK.
	        Application.EnableCancelKey = wdCancelDisabled
	
	        ' Set error trap.
	        On Error GoTo ErrorHandler
	
	        ' Check if insertion point is in last row of a table.
	        ' If the insertion point is within a vertically merged
	        ' cell, an error will occur.
	        MsgBox Selection.Rows(1).IsLast
	
	     ErrorHandler:
	       
	        If Err.Number <> 0 Then
	           MsgBox Err.Description
	        End If
	        
	        ' Re-enable CTRL+BREAK.
	        Application.EnableCancelKey = wdCancelInterrupt
	        
	     End Sub
	
	For more information about the EnableCancelKey property, in the Visual Basic
	Editor, click the Office Assistant, type "EnableCancelKey" (without the
	quotation marks), click Search, and then click to view "EnableCancelKey
	Property."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem does not occur in Word 2000.
	
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
	
	
	Additional query words: wordcon vb vba
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
