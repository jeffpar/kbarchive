---
layout: page
title: "Q148406: HOWTO: How to Create a Microsoft Excel Remote View from Visual F"
permalink: /kb/148/Q148406/
---

## Q148406: HOWTO: How to Create a Microsoft Excel Remote View from Visual F

	Article: Q148406
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a Remote View programmatically in Visual
	FoxPro to access data that resides in a Microsoft Excel spreadsheet (.xls file).
	
	MORE INFORMATION
	================
	
	If you haven't done so already, install the Microsoft Excel ODBC driver that
	ships with Visual FoxPro. To connect to a Microsoft Excel data source, you must
	install the Microsoft Excel ODBC Driver and set up a Microsoft Excel data source
	through the ODBC Microsoft Excel Setup dialog box in the Windows Control Panel.
	This is a level 1 ODBC driver, so the data source is a directory name or the
	current directory, as indicated in the Setup dialog box. The currently shipping
	Microsoft Excel ODBC driver provides an option in the Setup dialog box to
	specify Microsoft Excel versions 3.0 - 4.0 or Microsoft Excel version 5.0
	files.
	
	The following is a code sample that "connects" to a Microsoft Excel data source.
	In a Visual FoxPro application, you will most likely place this in a separate
	program file or in the Load or Init events of a form (.scx file).
	
	  *-- Connect to an Microsoft Excel Data Source
	  * The parameter passed with SQLCONNECT is the name of the data source.
	  * The default for Microsoft Excel is Excel Files. If there is any
	  * trouble with this, execute it with no parameter and a list of
	  * currently available data sources will come up. The text of the
	  * listing that pertains to Microsoft Excel is the actual value to pass
	  * as a parameter. Retry it with that value.
	  *
	  * Still from within the SQLCONNECT() function, a "Select Workbook"
	  * dialog will come up. Next, the program performs some error checking.
	  * Finally, Microsoft Excel is told which sheet of the workbook is desired
	  * within the SQLEXEC() function with the "Sheetn$" where "n" is a
	  * number from 1 to the number of sheets in the workbook.
	
	     nConnHand = SQLCONNECT("Excel Files")
	     IF nConnHand > 0
	        =MESSAGEBOX("Connected to Microsoft Excel File",0)
	     ELSE
	        =MESSAGEBOX("Unable to connect to Microsoft Excel File ..",0)
	     ENDIF
	     nXResult = SQLEXEC(nConnHand, 'SELECT * FROM "Sheet1$"','MyCursor')
	
	REFERENCES
	==========
	
	For more information, please see the Visual FoxPro Help for SQLCONNECT() and
	SQLEXEC(). Also try creating a Remote View with the interface tools. Then
	right-click the cursor, and choose View SQL.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b
	Version           : WINDOWS:2.5,3.0,3.0b
	Issue type        : kbhowto
	
	=============================================================================
	
