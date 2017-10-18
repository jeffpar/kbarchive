---
layout: page
title: "Q159791: WD97: Word Count Appears Inaccurate"
permalink: kb/159/Q159791/
---

## Q159791: WD97: Word Count Appears Inaccurate

	Article: Q159791
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbmacro kbusage kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	For a Microsoft Word 2002 version of this article, see Q291447.
	
	SYMPTOMS
	========
	
	When you use the Microsoft Visual Basic for Applications Words property to
	return a word count, the number of words returned appears to be inaccurate.
	
	CAUSE
	=====
	
	The Words property returns a collection that represents all the words in a
	range, selection, or document. The collection includes all punctuation and
	paragraph marks in the selection or the document.
	
	For example, if you attempt to determine the word count of the following three
	lines of text using the Words property, the result is 21 words:
	
	  This is x number of words<return>
	  This is x number of words<return>
	  This is x number of words<return>
	
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
	
	To return only the number of words in a document or a selection, exclusive of
	paragraph marks and punctuation, use the Dialogs object instead of the Words
	property.
	
	The Dialogs object returns a word count that does not include paragraph marks or
	punctuation. Using the example from the "Cause" section, the Dialogs object
	returns a count of 18 words.
	
	The following Visual Basic for Applications code shows the difference between
	using the Words property and the Dialogs object method to return a word count
	for a document.
	
	     Sub CountWords()
	
	        ' Retrieve the number of words including paragraph marks and
	        ' punctuation using the Dialogs collection. This  returns the
	        ' same result as if you used the Word Count command (Tools menu).
	        Set wdDTWC = Dialogs(wdDialogToolsWordCount)
	        wdDTWC.Execute
	        dlgwordcount$ = wdDTWC.Words
	        MsgBox "Word Count from Tools Word Count: " & dlgwordcount$
	
	        ' Retrieve the number of words from the Words collection.
	        selwordcount$ = ActiveDocument.Words.Count
	        MsgBox "Word Count from Words Collection: " & selwordcount$
	
	     End Sub
	
	For more information about the Dialogs Object, from the Visual Basic Editor,
	click the Office Assistant, type "Dialogs" (without the quotation marks), click
	Search, and then click to view "Dialogs Object."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	MORE INFORMATION
	================
	
	For additional information about word counts, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q241316 WD97: Word Count Macro Available to Count Words in a Selection
	
	For additional information about getting help with Visual Basic for Applications,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbmacro kbusage kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
