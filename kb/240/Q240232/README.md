---
layout: page
title: "Q240232: WD97: Selection.Information Returns Incorrect Information"
permalink: /kb/240/Q240232/
---

## Q240232: WD97: Selection.Information Returns Incorrect Information

	Article: Q240232
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Selection.Information(wdStartOfRangeColumnNumber) or
	Selection.Information(wdStartOfRangeRowNumber) method to return the column or
	row number from a Word table with merged cells, the information returned does
	not take into account that a table contains merged cells. Thus the returned
	information cannot be used to reference cells in rows that contain merged
	cells.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use Visual Basic for Applications code to loop
	through and mark Row, Column using the Tables(n).Columns.Count and
	Tables(n).Rows.Count of each cell while keeping track of count manually.
	
	RESOLUTION
	==========
	
	To resolve the problem described in this article, obtain and install the latest
	Microsoft Word 97 update from the following Microsoft Web site:
	
	  http://office.microsoft.com/downloads/9798/Wd97mcrs.aspx
	
	IMPORTANT NOTE: Microsoft Word 97 post-service release fixes are cumulative. The
	latest update contains all of the fixes since Service Release 2. If you install
	the latest update for Word 97, you do not need to install any other updates
	after Service Release 2.
	
	For additional information about the fixes included in the latest update for Word
	97, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q265374 WD97: Post Service Release Fixes for Word 97
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: VBA VBE VB
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
