---
layout: page
title: "Q162937: WD97: Compile Error Passing Function Call"
permalink: /kb/162/Q162937/
---

## Q162937: WD97: Compile Error Passing Function Call

	Article: Q162937
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
	
	When you attempt to run a macro converted from WordBasic to Visual Basic for
	Applications that contains code using the Open statement in combination with a
	function call to retrieve the value for the file name argument, you receive the
	following error:
	
	  Compile error: Syntax error
	
	See the "More Information" section of this article for an example of a WordBasic
	macro that converts incorrectly.
	
	
	CAUSE
	=====
	
	When the WordBasic macro is converted, the function call is converted to a
	procedure call.
	
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
	
	Edit the converted macro and change the procedure call back to a function call.
	For example, change this line of code:
	
	     Open WordBasic.Call "Library.OutputFile$", Arg1$ For Append As 2
	
	to this:
	
	     Open WordBasic.Call("Library.OutputFile$", Arg1$) For Random As 2
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	WordBasic Example Prior to Conversion
	-------------------------------------
	
	     Sub MAIN()
	        Dim Arg1$
	        Arg1$ = "A"
	        ' This line contains a Function Call.
	        Open Call("Library.OutputFile$", Arg1$) For Append As 2
	        Close 2
	     End Sub
	
	WordBasic Macro Example After Conversion
	----------------------------------------
	
	WARNING: After conversion, this code produces the error message described in the
	"Symptoms" section.
	
	      Public Sub MAIN()
	        Dim Arg1$
	        Arg1$ = "A"
	
	        ' This line has been converted to a procedure Call and will cause
	        ' the error mentioned earlier in this article.
	        Open WordBasic.Call "Library.OutputFile$", Arg1$ For Append As 2
	
	        Close 2
	     End Sub
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
