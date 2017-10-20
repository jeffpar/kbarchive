---
layout: page
title: "Q130137: HOWTO: How to Use ODBC to Run SQL SELECT on Microsoft Excel Data"
permalink: /kb/130/Q130137/
---

## Q130137: HOWTO: How to Use ODBC to Run SQL SELECT on Microsoft Excel Data

{% raw %}

	Article: Q130137
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp600 kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article gives example SQL SELECT statements that you can use against
	Microsoft Excel versions 4.0 and 5.0 worksheets in Visual FoxPro by using ODBC.
	
	MORE INFORMATION
	================
	
	You should already have created data sources to your Microsoft Excel files. For
	more information about how to do this, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q130732 How to Create Data Source to Microsoft Excel Files
	
	
	To execute an SQL SELECT against a Microsoft Excel version 5.0 workbook, you may
	need to execute the SQLTABLES() function to get the names of the worksheets that
	reside in the workbook. This will build a cursor that you can then browse to see
	the actual names of the worksheets to use. Here is an example use of the
	SQLTABLES function:
	
	     handle  = SQLCONNECT(<data source>,<username>,<password>)
	     success = SQLTABLES(handle)
	
	The cursor created by this code has five fields, the third of which contains the
	table names. In the case of Microsoft Excel version 5.0, these table names are
	actually the names of the worksheets within the workbook to which you have
	connected. They all have a dollar sign ($) as the last character, and you must
	be sure to include the dollar sign when accessing the worksheet.
	
	Here is an example of an SQL SELECT to a Microsoft Excel version 5.0 file:
	
	     handle  = SQLCONNECT('Excel 5.0 data source','','')
	     success = SQLEXEC(handle,'select * from "sheet1$"')
	
	Note that the sheet name is surrounded by double quotation marks, with the entire
	select statement inside single quotation marks. This is the required syntax.
	
	Here is an example of an SQL SELECT to a Microsoft Excel version 4.0 file:
	
	     handle  = SQLCONNECT('Excel 4.0 data source','','')
	     success = SQLEXEC(handle,'select * from sheet1')
	
	Note the absence of double quotation marks surrounding the sheet name.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP600
	Version           : WINDOWS:2.5,3.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
