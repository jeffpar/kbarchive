---
layout: page
title: "Q162439: WD97: Unable to Get Count of Table Rows or Columns"
permalink: /kb/162/Q162439/
---

## Q162439: WD97: Unable to Get Count of Table Rows or Columns

{% raw %}

	Article: Q162439
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In a Visual Basic for Applications macro, when you attempt to obtain the number
	of table rows or columns from a document range, you may receive the following
	error message:
	
	  Run-time error '5907': There is no table at this location.
	
	CAUSE
	=====
	
	This error occurs when you use any of the following statements:
	
	     ActiveDocument.Content.Rows.Count
	
	     ActiveDocument.Content.Columns.Count
	
	     ActiveDocument.Range.Rows.Count
	
	     ActiveDocument.Range.Columns.Count
	
	This error occurs regardless of whether a table exists in a document.
	
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
	
	To obtain a total count of rows in all tables in a document, set up a looping
	structure to iterate through the tables collection. In the following example, if
	a table does not exist, the value returned will be zero:
	
	     Sub GetTotalDocumentRowCount()
	        Dim tblTable As Table
	        Dim iCount As Integer
	        ' Loop through tables in body of active document.
	        For Each tblTable In ActiveDocument.Tables
	           ' Obtain count of rows for each table and combine.
	           iCount = iCount + tblTable.Rows.Count
	        Next
	        MsgBox iCount
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
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
	Keywords          : word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
