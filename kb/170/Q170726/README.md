---
layout: page
title: "Q170726: WD97: Macros to Test for an Existing AutoText Entry Name"
permalink: /kb/170/Q170726/
---

## Q170726: WD97: Macros to Test for an Existing AutoText Entry Name

	Article: Q170726
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
	
	When you write macros in Microsoft Word for Windows, it may be necessary to test
	for the existence of an AutoText entry before inserting the contents of the
	entry. If your macro does not check for the existence of an AutoText entry
	before attempting to insert the contents into the document, you may receive the
	following error message:
	
	  Run-time error '5941':
	
	  The requested member of the collection does not exist.
	
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
	
	Routine to Check for the Existence of a Specified AutoText Entry
	----------------------------------------------------------------
	
	If the "Attention:" AutoText entry resides in the Normal template, the following
	macro example posts a message indicating that it does exist.
	
	     Sub AutoTextExists()
	        Dim atEntry As AutoTextEntry
	        ' Look in normal template for
	        ' specified autotext entry.
	        For Each atEntry In NormalTemplate.AutoTextEntries
	           If atEntry.Name = "Attention:" Then
	              MsgBox "Entry Exists!"
	           End If
	        Next atEntry
	     End Sub
	
	Routine to Insert Specified AutoText Entry If It Exists
	-------------------------------------------------------
	
	If the "Attention:" AutoText entry resides in the Normal template, the following
	macro inserts the contents of the AutoText entry in the document at the position
	where the insertion point is located.
	
	     Sub InsertAutoTextIfExist()
	        'This routine will insert the autotext entry if it exists.
	        Dim atEntry As AutoTextEntry
	        For Each atEntry In NormalTemplate.AutoTextEntries
	           If atEntry.Name = "Attention:" Then
	              atEntry.Insert Where:=Selection.Range
	           End If
	        Next atEntry
	     End Sub
	
	Routine to Insert a Specified AutoText Entry from Attached Template
	-------------------------------------------------------------------
	
	The following Visual Basic for Applications macro example tests for an existing
	AutoText entry named "Attention:" in the active template (the template attached
	to the active document):
	
	     Sub InsertAttachedTemplateAutoText()
	        ' This routine will insert the autotext entry contained
	        ' the active document's attached template if the specified
	        ' autotext entry exists.
	        Dim atEntry As AutoTextEntry
	        For Each atEntry In ActiveDocument.AttachedTemplate.AutoTextEntries
	           If atEntry.Name = "Attention:" Then
	              atEntry.Insert Where:=Selection.Range
	           End If
	        Next atEntry
	     End Sub
	
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
	Keywords          : kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
