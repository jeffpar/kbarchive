---
layout: page
title: "Q162527: WD97: Word Count for Comments Number Incorrect"
permalink: /kb/162/Q162527/
---

## Q162527: WD97: Word Count for Comments Number Incorrect

	Article: Q162527
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Visual Basic for Applications StoryRanges collection to return
	a word count for Comments, as in the following example,
	
	     x = ActiveDocument.StoryRanges(wdCommentsStory).Words.Count
	
	you may not receive the results you expect.
	
	For example, if the author name for a comment is two words long and the comment
	contains four words, the total word count returned is 6 (instead of 4 as
	expected).
	
	CAUSE
	=====
	
	The number of words returned includes the names of the commenting authors.
	
	In addition, this count is cumulative. That is, if there are two comments in a
	document, the number of words in the comment author's name will be counted for
	each comment. For example, if each comment contains 4 words and John Doe is the
	author of both comments, the total word count returned is 12 instead of 8 as
	expected.
	
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
	
	The following example will return the number of words found in all comments in a
	document, but will exclude the number of words in the comment author's name:
	
	     Sub CountWordsInAllComments()
	        Dim ctComment As Comment
	        Dim lWordCount As Long
	        For Each ctComment In ActiveDocument.Comments
	           lWordCount = lWordCount + ctComment.Range.Words.Count
	        Next
	        MsgBox lWordCount
	     End Sub
	
	For more information about the Comment Object, from the Visual Basic Editor,
	click the Office Assistant, type "Comment Object" (without the quotation marks),
	click Search, and then click to view "Comment Object."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
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
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
