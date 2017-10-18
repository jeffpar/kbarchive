---
layout: page
title: "Q168417: WD97: Application.Help wdHelp Generates Run-Time Error"
permalink: kb/168/Q168417/
---

## Q168417: WD97: Application.Help wdHelp Generates Run-Time Error

	Article: Q168417
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbProgramming kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a Visual Basic for Applications macro that attempts to display Word
	Help using the command
	
	     Application.Help wdHelp
	
	you may receive the following error message:
	
	  Run time error '4605'. This command is not available.
	
	CAUSE
	=====
	
	The error message occurs because Word must be the active program when the
	Application.Help wdHelp command is run.
	
	For example, you may receive the error message if you run the following Visual
	Basic for Applications macro from Microsoft Excel, because Microsoft Excel is
	the active program.
	
	     Sub DisplayWordHelp()
	        Dim oMSWord As Object
	        Set oMSWord = GetObject(Class:="Word.Application")
	        oMSWord.Help wdHelp
	     End Sub
	
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
	
	To work around this problem, your code must first open Word as demonstrated in
	the following macro:
	
	     Sub DisplayWordHelp()
	        Dim oMSWord As Object
	        On Error Resume Next
	        ' If Word is already running, use the existing instance.
	        Set oMSWord = GetObject(Class:="Word.Application")
	        If Err <> 0 Then
	           ' If Word is NOT already running, create a new instance.
	           Set oMSWord = CreateObject(Class:="Word.Application")
	        End If
	        If oMSWord.Visible = False Then ' Make Word visible.
	           oMSWord.Visible = True
	        End If
	        oMSWord.Activate   ' <--- Activate Word application.
	        oMSWord.Help wdHelp
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
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
	
	Additional query words: wordcon vb vbe vba
	
	======================================================================
	Keywords          : kbcode kberrmsg kbProgramming kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
