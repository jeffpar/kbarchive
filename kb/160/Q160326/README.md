---
layout: page
title: "Q160326: WD97: Macro to Find Tables in Word Documents"
permalink: kb/160/Q160326/
---

## Q160326: WD97: Macro to Find Tables in Word Documents

	Article: Q160326
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses how to find and loop through tables in a document using
	the Visual Basic for Applications Tables collection.
	
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
	
	The following Visual Basic macro finds each table in a Word document
	
	     Sub FindTables()
	        Dim iResponse As Integer
	        Dim tTable As Table
	        'If any tables exist, loop through each table in collection.
	        For Each tTable In ActiveDocument.Tables
	           tTable.Select
	           iResponse = MsgBox("Table found. Find next?", 68)
	           If response = vbNo Then Exit For 'User chose to leave search.
	        Next
	        MsgBox prompt:="Search Complete.", buttons:=vbInformation
	     End Sub
	
	For information about how to do this in earlier versions of Word, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q88540 WD: WordBasic Macro to Find Tables in Word Documents
	
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
	Keywords          : kbdta kbdtacode kbmacroexample word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
