---
layout: page
title: "Q170725: WD97: Sample Macro That Uses a Loop to Find Text"
permalink: /kb/170/Q170725/
---

## Q170725: WD97: Sample Macro That Uses a Loop to Find Text

{% raw %}

	Article: Q170725
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The following sample macros can be used to search for the occurrence of text in
	a Microsoft Word document.
	
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
	
	  Sub EditFindLoopExample()
	   'This example inserts "Tip: " at the beginning of
	   ' every paragraph formatted with the Heading 3 style.
	       With ActiveDocument.Content.Find
	           .ClearFormatting
	           .Style = wdStyleHeading3
	           'The Do...Loop statement repeats a series of
	           ' actions each time this style is found.
	           Do While .Execute(Forward:=True, Format:=True) = True
	                   With .Parent
	                       'If the found text is the last
	                       ' paragraph in the document...
	                       If .End = ActiveDocument.Content.End Then
	                           .StartOf Unit:=wdParagraph, Extend:=wdMove
	                           .InsertAfter "Tip: "
	                           Exit Do
	                       'If the found text is *not* the last
	                       ' paragraph in the document...
	                       Else
	                           .StartOf Unit:=wdParagraph, Extend:=wdMove
	                           .InsertAfter "Tip: "
	                           .Move Unit:=wdParagraph, Count:=1
	                       End If
	                   End With
	           'Goes back to the beginning of the Do...Loop statement.
	           Loop
	       End With
	   End Sub
	
	For more information about searching text in Word documents, from the Visual
	Basic Editor, click the Office Assistant, type "find," click Search, and then
	click to view "Find Object."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	
	Additional query words: vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
