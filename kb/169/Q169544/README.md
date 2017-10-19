---
layout: page
title: "Q169544: WD97: ReadabilityStatistics Collection Causes Invalid Page Fault"
permalink: /kb/169/Q169544/
---

## Q169544: WD97: ReadabilityStatistics Collection Causes Invalid Page Fault

	Article: Q169544
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbProgramming kbdta word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the ReadabilityStatistics collection in Visual Basic for
	Applications, you may receive the following error:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details (on Microsoft Windows Millennium Edition, press ALT+D),
	you receive the following message:
	
	  WINWORD caused an invalid page fault in WINWORD.EXE at address.
	
	NOTE: The actual memory address may vary.
	
	WORKAROUND
	==========
	
	To work around this problem, use the WordBasic ToolsGrammarStatisticsArray
	command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Word 2000.
	
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
	
	For more information about how to use the sample code in this article, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	The following is the syntax and an example of how to use the WordBasic
	ToolsGrammarStatisticsArray in a Visual Basic for Applications macro.
	
	Syntax
	------
	
	  ToolsGrammarStatisticsArray TwoDimensionalArray$()
	
	This statement runs the grammar checker, and then fills a two-dimensional array
	with the available grammar statistics for the active document.
	
	Argument                  Explanation
	-----------------------------------------------------------------------
	
	TwoDimensionalArray$()    The two-dimensional array (which must be
	                            defined before ToolsGrammarStatisticsArray
	                            is run) to fill with the names of counts,
	                            averages, and indexes (the first
	                            dimension) and their associated statistics
	                            (the second dimension).
	
	The following sample Visual Basic for Applications macro uses the WordBasic
	ToolsGrammarStatisticsArray command to define a two-dimensional array for
	storing grammar statistics, fills the array with grammar statistics for the
	active document, and then displays the returned values in a message box (names
	of counts, averages, and indexes on the left and their associated statistics on
	the right).
	
	  Sub StatisticsArray()
	
	     Dim iSize As Integer
	     Dim dStats() As String
	
	     Documents.Add
	     Selection.TypeText "This is a test."
	
	     ' Return the number of statistics to the
	     ' variable iSize and redimension the array
	     ' to hold those values.
	     iSize = WordBasic.CountToolsGrammarStatistics() - 1
	     ReDim dStats(iSize, 1)
	
	     ' Use the WordBasic command to return statistics.
	     WordBasic.ToolsGrammarStatisticsArray dStats()
	
	     ' Loop through and display statistics.
	     For Count = 0 To iSize
	        MsgBox dStats(Count, 0) + ": " +  dStats(Count, 1)
	     Next
	  End Sub
	
	Additional query words: 8.0 vb vbe vba ipf
	
	======================================================================
	Keywords          : kberrmsg kbProgramming kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
