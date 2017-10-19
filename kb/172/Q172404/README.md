---
layout: page
title: "Q172404: PRB: Opening Excel 4.0 Worksheets with DAO"
permalink: /kb/172/Q172404/
---

## Q172404: PRB: Opening Excel 4.0 Worksheets with DAO

	Article: Q172404
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Opening an entire Excel 4.0 Worksheet, according to the syntax described in
	Books Online and according to the syntax used in all previous versions of Visual
	Basic, will cause Run-time error '3011.'
	
	RESOLUTION
	==========
	
	For a workaround, modify the Source argument for the OpenRecordset method from
	FILENAME#XLS to FILENAME$. Please see below for an illustration.
	
	     Set db = OpenDatabase("c:\file.xls", False, False, "Excel 4.0;HDR=NO;")
	     Set rs = db.OpenRecordset("file$")
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The syntax specified in Books Online for working with Excel Worksheets and
	Workbooks is consistent with the documentation for all previous versions of
	Visual Basic.
	
	Other than opening entire Excel 4.0 Worksheets, no other problems are known to
	exist at this time. In fact, opening a named range in an Excel 4.0 Worksheet
	will work just as described.
	
	Additional query words: kbVBp500 kbVBp kbWinOS98 kbDSupport kbdse kbDAO kbVBp600 kbExcel400
	
	======================================================================
	Keywords          : kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
