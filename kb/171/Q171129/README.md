---
layout: page
title: "Q171129: WD97: Error Message If AutoText String Exceeds 255 Characters"
permalink: kb/171/Q171129/
---

## Q171129: WD97: Error Message If AutoText String Exceeds 255 Characters

	Article: Q171129
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta kbdtacode kbmacroexample word8 kbautotext word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the AutoTextEntries property to create AutoText entries, you may
	receive the following Microsoft Visual Basic for Applications error message:
	
	  Run-time error '5854': String parameter too long.
	
	CAUSE
	=====
	
	By design, this error message occurs when the text string is longer than 255
	characters.
	
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
	
	To work around this problem, modify the macro to insert the text string into the
	document, select it, add the selection as an AutoText entry, and then remove the
	text string. The following sample Visual Basic for Applications macro
	demonstrates this procedure:
	
	     Sub AutoTextEntryExample()
	        Dim sATName As String
	        Dim sATEntry As String
	        Dim sATNewEntry As AutoTextEntry
	
	        ' Sample AutoText Entry Name.
	        sATName = "ExampleAutoTextEntryName"
	        ' Sample AutoText Entry Text of 500 characters.
	        sATEntry = String(500, "A")
	
	        If Documents.Count = 0 Then Documents.Add
	        If Len(sATEntry) < 256 Then
	           ' If the length of the text is less than 256 characters,
	           ' add it as a new AutoText Entry.
	           Selection.Range.Collapse
	           Set sATNewEntry = NormalTemplate.AutoTextEntries.Add _
	           (Name:=sATName, Range:=Selection.Range)
	           sATNewEntry.Value = sATEntry
	        Else
	           ' If the length of the text is greater than 255 characters,
	           ' insert it into the active document and add it as a new
	           ' AutoText Entry.
	           With Selection.Range
	              .Collapse
	              .Text = sATEntry
	              .Select
	              NormalTemplate.AutoTextEntries.Add _
	                 Name:=sATName, Range:=Selection.Range
	              .Delete
	           End With
	        End If
	     End Sub
	
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
	Keywords          : kberrmsg kbdta kbdtacode kbmacroexample word8 kbautotext word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
