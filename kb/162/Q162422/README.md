---
layout: page
title: "Q162422: WD97: GetSpellingSuggestions Method Misses Repeated Words"
permalink: /kb/162/Q162422/
---

## Q162422: WD97: GetSpellingSuggestions Method Misses Repeated Words

{% raw %}

	Article: Q162422
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
	
	The Visual Basic for Applications GetSpellingSuggestions method does not provide
	a means for checking for repeated words. However, after you run a macro that use
	GetSpellingSuggestions, repeated words are flagged in Word.
	
	The "Workaround" section of this article includes a macro you can use to look for
	repeated words.
	
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
	
	The following sample macro checks a document for repeated words. If a repeated
	word is found, the user is prompted to delete the repeated word or to skip the
	deletion and continue checking the remainder of the document.
	
	     Sub CheckForRepeatedWords()
	        Dim oSpErr As Object
	        Dim spSugg As SpellingSuggestions
	        Dim msg As String
	        Dim response As Integer
	        For Each oSpErr In ActiveDocument.SpellingErrors
	           Set spSugg = oSpErr.GetSpellingSuggestions
	           Select Case spSugg.SpellingErrorType
	              Case wdSpellingNotInDictionary
	              Case wdSpellingCapitalization
	              Case Else
	                 'This case can be modified to perform a
	                 'different function dependent upon the need.
	                 oSpErr.Select
	                 msg = "Delete this repeated word?"
	                 response = MsgBox(msg, vbYesNoCancel, "Repeated Word")
	                 If response = vbYes Then
	                    Selection.Expand (wdWord)
	                    Selection.Delete
	                 End If
	                 If response = vbCancel Then Exit Sub
	           End Select
	        Next
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q181058 OFF98: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
