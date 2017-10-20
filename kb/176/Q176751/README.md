---
layout: page
title: "Q176751: WD97: How to Print a List of AutoCorrect Entries"
permalink: /kb/176/Q176751/
---

## Q176751: WD97: How to Print a List of AutoCorrect Entries

{% raw %}

	Article: Q176751
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbProgramming word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains a sample Microsoft Visual Basic for Applications macro
	(Sub procedure) that inserts all AutoCorrect entries into a document that you
	can then print.
	
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
	
	Sample Visual Basic Procedure
	-----------------------------
	
	      Sub InsertAutoCorrectEntries()
	        Dim ACE As AutoCorrectEntry
	        ' Create new document.
	        Documents.Add
	        ' Iterate through AutoCorrect entries.
	        For Each ACE In Application.AutoCorrect.Entries
	           ' Insert each entry name and its value on a new line.
	           Selection.TypeText ACE.Name & vbTab & ACE.Value & " " & vbCr
	        Next
	        ' Format document for three columns.
	        With ActiveDocument.PageSetup.TextColumns
	           .SetCount NumColumns:=3
	           .EvenlySpaced = True
	           .LineBetween = True
	           .Width = InchesToPoints(1.67)
	           .Spacing = InchesToPoints(0.5)
	        End With
	        ' Set TabStop for all three columns.
	        ActiveDocument.Paragraphs.TabStops(InchesToPoints(0.88)).Position = _
	           InchesToPoints(0.88)
	     End Sub
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon
	
	======================================================================
	Keywords          : kbcode kbProgramming word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
