---
layout: page
title: "Q160734: WD97: Errors When Using ODBC to Insert Microsoft Excel Worksheet"
permalink: /kb/160/Q160734/
---

## Q160734: WD97: Errors When Using ODBC to Insert Microsoft Excel Worksheet

{% raw %}

	Article: Q160734
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbualink97 kbdta kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to insert a Microsoft Excel worksheet into a Word document or
	when you attempt to attach a Microsoft Excel worksheet as a data document to a
	mail merge main document using the Microsoft Excel ODBC driver, you receive one
	of the following error messages:
	
	  Word was unable to open the data source.
	
	-or-
	
	  Open Database Connectivity Error: Syntax error in query. Incomplete query
	  clause.
	
	When you click the Details button, you receive the following message:
	
	  ODBC Error: [Microsoft][ODBC Excel Driver] Syntax error in query.
	  Incomplete query clause.
	  SQL State: S1000
	  Return Code: SQL_Error
	
	CAUSE
	=====
	
	You did not select a worksheet from the Select Table dialog box. (To locate this
	dialog box, click to select the Select Method check box in the Open Data Source
	dialog box, select the Excel Files via ODBC (*.xls) driver in the Confirm Data
	Source dialog box, and then click OK.)
	
	WORKAROUND
	==========
	
	Use the following procedure to insert a Microsoft Excel worksheet as a database
	in Word:
	
	NOTE: Be sure that the Microsoft Excel ODBC driver is installed before you follow
	this next procedure. If the Microsoft Excel ODBC driver is not installed, re-run
	Setup and install the ODBC driver.
	
	1. On the View menu, point to Toolbars, and then click Database.
	
	  The Database toolbar appears.
	
	2. Click the Insert Database button on the Database toolbar.
	
	3. Click the Get Data button.
	
	4. Select the Microsoft Excel workbook you want to open, click to select the
	  Select Method check box, and then click Open.
	
	5. In the Confirm Data Source dialog box, under Open Data Source, select "Excel
	  Files via ODBC (*.xls)," and then click OK.
	
	6. In the Select Table dialog box, click Options.
	
	7. In the Table Options dialog box, click to select the System Tables check box,
	  and then click OK.
	
	8. In the Select Table dialog box, under Table, select the worksheet you want to
	  insert, and then click OK.
	
	  NOTE: Each sheet name is appended with a dollar sign ($) symbol, such as
	  Sheet1$, Sheet2$, and so forth.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q156835 OFF97: Complete Setup Doesn't Install All ODBC Drivers
	
	
	  Q155179 WD97: How to Use Microsoft Excel Data Source for Word Mail Merge
	
	Additional query words: word97 xl97 xl word
	
	======================================================================
	Keywords          : kbinterop kbualink97 kbdta kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
