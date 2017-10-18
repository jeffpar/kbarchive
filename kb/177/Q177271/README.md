---
layout: page
title: "Q177271: WD97: Converted WordBasic On Error Statements May Fail"
permalink: kb/177/Q177271/
---

## Q177271: WD97: Converted WordBasic On Error Statements May Fail

	Article: Q177271
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
	
	When you run a Microsoft Visual Basic for Applications procedure or macro that
	was converted from a WordBasic procedure or macro that contained error trapping,
	the error trap is ignored though it worked as expected when run in WordBasic.
	
	CAUSE
	=====
	
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
	
	By design, the On Error statement in Visual Basic works differently from
	WordBasic. In Visual Basic, On Error is not cleared when an error occurs, while
	in WordBasic, the On Error statement is cleared, the error trap is reset, and
	your code continues to run.
	
	Therefore, the following sample converted WordBasic code fails when an error
	occurs the second time.
	
	     Sub Main()
	        ' Clear error trap. Set error trap.
	        On Error GoTo -1: On Error GoTo ErrorTrap
	        ' Loop 10 times.
	        For i = 1 To 10
	           ' Artificially raise an error.
	           Err.Raise 5
	     ErrorTrap:
	          ' Decision tree based on error returned.
	          If Err.Number = 0 Then
	              ' If no error occurred, do this...
	              count_ = count_ + 1
	          Else
	              ' Else, if error occurred, do this...
	              Err.Number = 0
	          End If
	        Next
	     End Sub
	
	RESOLUTION
	==========
	
	To resolve this issue, make the On Error statement the first statement inside
	the loop.
	
	     Sub Main()
	        ' Loop 10 times.
	        For i = 1 To 10
	        ' Clear error trap. Set error trap.
	        On Error GoTo -1: On Error GoTo ErrorTrap
	           ' Artificially raise an error.
	           Err.Raise 5
	     ErrorTrap:
	          ' Decision tree based on error returned.
	          If Err.Number = 0 Then
	              ' If no error occurred, do this...
	              count_ = count_ + 1
	          Else
	              ' Else if error occurred, do this...
	              Err.Number = 0
	          End If
	        Next
	     End Sub
	
	In this example, the Err.Raise statement artificially raises an error for
	demonstration purposes. When the error occurs and the next iteration of the loop
	occurs, the "On Error GoTo -1" statement clears the error trap and the "On Error
	GoTo ErrorTrap" statement resets the error trap. The loop continues to process
	without interruption until it completes the designated number of iterations
	(10).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	REFERENCES
	==========
	
	For more information about the On Error Statement, click the Office Assistant in
	the Visual Basic Editor, type "On Error" (without the quotation marks), click
	Search, and then click to view "On Error Statement."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vba
	
	======================================================================
	Keywords          : kbcode kbProgramming kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
