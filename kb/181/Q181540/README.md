---
layout: page
title: "Q181540: WD97: Statistics Button Unavailable in File Summary Info Dialog"
permalink: /kb/181/Q181540/
---

## Q181540: WD97: Statistics Button Unavailable in File Summary Info Dialog

{% raw %}

	Article: Q181540
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the built-in Summary Info dialog box in a Microsoft Visual Basic
	for Applications procedure or macro, the Statistics button is unavailable
	(dimmed) when the dialog box is displayed.
	
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
	
	To work around this problem, use any of the following methods.
	
	Method 1: Use the BuiltInDocumentProperties property
	----------------------------------------------------
	
	To work around this problem, you can retrieve a document statistic and store it
	in a variable using the BuiltInDocumentProperties property with the proper
	argument. The following sample macro retrieves the number of words in the active
	document:
	
	     Sub GetDocProperties()
	        Dim DP As Object
	        Dim nWrds As Integer
	        Set DP = ActiveDocument.BuiltInDocumentProperties
	        nWrds = DP("Number Of Words")
	        MsgBox "There are " & nWrds & " words."
	     End Sub
	
	Method 2: Use the ComputeStatistics Method
	------------------------------------------
	
	     Sub GetNumWords()
	        Dim nWrds As Integer
	        nWrds = ActiveDocument.ComputeStatistics(Statistic:=wdStatisticWords)
	        MsgBox "There are " & nWrds & " words."
	     End Sub
	
	For more information about the BuiltInDocumentProperties property, click the
	Office Assistant while in the Visual Basic Editor, type
	"BuiltInDocumentProperties" (without the quotation marks), click Search, and
	then click to view "BuiltInDocumentProperties Property."
	
	For more information about the ComputeStatistics method, click the Office
	Assistant while in the Visual Basic Editor, type "ComputeStatistics" (without
	the quotation marks), click Search, and then click to view "ComputeStatistics
	Method."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF97: Office Assistant Not Answering Visual Basic Questions
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q158768 WD97: Sample VB Code to Set, Retrieve Summary Information
	
	  Q170732 WD97: Macro to Count Number of Document Paragraphs and Lines
	
	  Q162440 WD97: BuiltInDocumentProperties Returns Incorrect Page Count
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon winword gray grayed grey greyed dim dimmed
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
