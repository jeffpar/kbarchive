---
layout: page
title: "Q162162: WD97: Recorded Find Method Not Based on Language Formatting"
permalink: /kb/162/Q162162/
---

## Q162162: WD97: Recorded Find Method Not Based on Language Formatting

{% raw %}

	Article: Q162162
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
	
	When you record a macro to find text formatted with a specific language, the
	LanguageID property is not recorded.
	
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
	
	After you record the macro, stop the macro recorder and edit the macro to include
	the LanguageID property.
	
	The following sample macro was recorded to find the word "test." In this example,
	the LanguageID property has been added and the LanguageID constant has been set
	to English (United States).
	
	     Sub FindLanguageProofing()
	        Selection.Find.ClearFormatting
	        With Selection.Find
	           .Text = "test"
	           .Replacement.Text = ""
	           .Forward = True
	           .Wrap = wdFindContinue
	           .Format = True
	           .MatchCase = False
	           .MatchWholeWord = False
	           .MatchWildcards = False
	           .MatchSoundsLike = False
	           .MatchAllWordForms = False
	           'Change the constant, wdEnglishUS, to
	           'the language constant you want to
	           'include as part of a search criteria.
	           .LanguageID = wdEnglishUS   '<---Add this line.
	        End With
	        Selection.Find.Execute
	     End Sub
	
	For more information about Find Object, in the Visual Basic Editor, click the
	Office Assistant, type "Find Object" (without the quotation marks), click
	Search, and then click to view "Find Object."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
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
	
	Additional query words: wordcon vba vbe vb
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
