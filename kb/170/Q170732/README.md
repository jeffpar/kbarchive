---
layout: page
title: "Q170732: WD97: Macro to Count Number of Document Paragraphs and Lines"
permalink: /kb/170/Q170732/
---

## Q170732: WD97: Macro to Count Number of Document Paragraphs and Lines

{% raw %}

	Article: Q170732
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbProgramming kbdtacode kbmacroexample kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The number of paragraphs and lines in a document can be counted and displayed
	using a Visual Basic for Applications macro. To access this information from a
	macro, see the following example.
	
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
	
	There are several methods that you can use to return the number of paragraphs for
	a document using Visual Basic for Applications properties and collections.
	
	     Sub LinesAndParagraphsCount()
	        Dim AD As Document
	        Dim DP As Object
	        Set AD = ActiveDocument
	        Set DP = AD.BuiltInDocumentProperties
	        ' Method 1 - Returns the number of paragraphs in a document.
	        MsgBox "There are " & AD.Paragraphs.Count & " paragraphs."
	        ' Method 2 - Returns the number of paragraphs and lines in a
	        '            document.
	        MsgBox "There are " & DP("Number Of Paragraphs") & " paragraphs."
	        MsgBox "There are " & DP("Number Of Lines") & " lines."
	        ' Method 3 - Returns the number of selected paragraphs and lines
	        '            in a document.
	        nParas = Selection.Paragraphs.Count
	        nLines = Selection.Range. _
	                 ComputeStatistics(Statistic:=wdStatisticLines)
	        MsgBox "The selection contains " & nParas & " paragraphs."
	        MsgBox "The selection contains " & nLines & " lines."
	     End Sub
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: vba vbe vb
	
	======================================================================
	Keywords          : kbProgramming kbdtacode kbmacroexample kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
