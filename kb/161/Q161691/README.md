---
layout: page
title: "Q161691: WD97: Extraneous Characters Returned with ViewFieldCodes On"
permalink: /kb/161/Q161691/
---

## Q161691: WD97: Extraneous Characters Returned with ViewFieldCodes On

{% raw %}

	Article: Q161691
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
	
	When you use the Text property of the Range object to return a text string that
	contains a field, you may receive unpredictable results. For example, with field
	codes view turned on, the value returned for a text string that contains the
	Page field is enclosed in pipe (|) characters, like this:
	
	  | PAGE \* MERGEFORMAT |
	
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
	
	To work around this problem, use either of the following methods:
	
	- Turn off field codes view before you run your macro.
	
	-or-
	
	- Use the following Visual Basic for Applications macro. The following macro
	  uses the TextRetrievalMode property to remove the unwanted characters:
	
	  Sub GetFieldTextExample()
	     Dim MyRange As Object
	     Set MyRange = ActiveDocument.Range(Start:=Selection.Range.Start, _
	     End:=Selection.Range.End)
	     MyRange.TextRetrievalMode.IncludeFieldCodes = False
	     MsgBox MyRange.Text
	  End Sub
	
	NOTE: Some field results cannot be returned at all. For instance, the ListNum
	field result is displayed as a picture. If you attempt to retrieve the value for
	ListNum using any Visual Basic for Applications methods or properties, you
	receive either an unwanted character or an empty result. Currently, there is no
	workaround for a field type that displays its results as a picture.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about TextRetrievalMode, click the Office Assistant while
	in the Visual Basic Editor, type "TextRetrievalMode," click Search, and then
	click to view "TextRetrievalMode Property."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For information about how to do this in earlier versions of Word, please see the
	following article in the Microsoft Knowledge Base:
	
	  
	
	  Q106655 WD: GetText$ Encloses Fields in Pipe (Vertical Bar) Characters
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vbe vba vertical bar
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
