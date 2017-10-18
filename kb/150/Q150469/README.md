---
layout: page
title: "Q150469: DOC: Code Sample Error in Documentation for RowTop Method"
permalink: kb/150/Q150469/
---

## Q150469: DOC: Code Sample Error in Documentation for RowTop Method

	Article: Q150469
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article corrects a documentation error in the code sample for the RowTop
	Method described in the "Visual Basic 4.0 Language Reference," and online Help.
	When you execute the sample code, an "Expected End of Statement" error occurs
	and the following line of code is highlighted:
	
	     CellTop = DataGrid1.RowTop RowValue + Y - DY / 2
	
	This error occurs because the RowValue argument for the RowTop method is not
	enclosed in parentheses.
	
	To correct this error, enclose the RowValue argument in parentheses as in the
	following example:
	
	     CellTop = DataGrid1.RowTop(RowValue) + Y - DY / 2
	
	STATUS
	======
	
	This documentation error was corrected in Visual Studio 97 Service Pack 3.
	
	Additional query words: kbVBp400 kbVS97SP3fix kbVBp kbdse kbDSupport kbdocfix kbdocerr
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
