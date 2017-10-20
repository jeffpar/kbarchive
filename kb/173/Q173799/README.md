---
layout: page
title: "Q173799: WD97: Macro to List Custom Tab Stops in a Paragraph"
permalink: /kb/173/Q173799/
---

## Q173799: WD97: Macro to List Custom Tab Stops in a Paragraph

{% raw %}

	Article: Q173799
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains a sample Visual Basic for Applications Sub procedure (or
	macro) that lists the custom tab stops set in a selected paragraph.
	
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
	
	The following sample Visual Basic for Applications macro displays a message box
	that lists the custom tab stops (if any exist) in a selected paragraph:
	
	      Sub GetCustomTabs()
	        Dim sMsg As String
	        Dim varTab As Variant
	        ' Cycle through tab stops in selected paragraph.
	        For Each varTab In Selection.Paragraphs.TabStops
	           ' If a custom tab stop is encountered...
	           If varTab.CustomTab = True Then
	              ' Add to message variable & convert from points to inches.
	              sMsg = sMsg & vbCrLf & "   " & _
	                 PointsToInches(varTab.Position) & Chr(34)
	           End If
	        Next
	        ' If there are custom tabs, display the values.
	        If sMsg <> "" Then
	           MsgBox "Custom Tabs: " & sMsg
	        Else
	           ' Else display there are no custom tabs.
	           MsgBox "No Custom Tabs."
	        End If
	     End Sub
	
	For more information about CustomTab Property, click the Office Assistant while
	in the Visual Basic Editor, type "CustomTab Property" (without the quotation
	marks), click Search, and then click to view "CustomTab Property."
	
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
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
