---
layout: page
title: "Q257951: WD97: Incorrect Result Performing Mail Merge w/Excel Data Source"
permalink: /kb/257/Q257951/
---

## Q257951: WD97: Incorrect Result Performing Mail Merge w/Excel Data Source

	Article: Q257951
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a mail merge with an Excel data source, the results of the mail
	merge may not be correct. For example, a record that contains a blank field in
	the data source displays the data from the previous record in the merge results.
	
	CAUSE
	=====
	
	Microsoft Word used Dynamic Data Exchange (DDE), which is the default, to
	connect to your data source.
	
	RESOLUTION
	==========
	
	The Select Method check box in the Open Data Source dialog box lets you choose
	other connection methods, including ODBC.
	
	WORKAROUND
	==========
	
	To work around this problem, use the Excel Worksheet Converter to connect to
	your data source. To do this, follow these steps:
	
	1. On the Tools menu, click Mail Merge.
	
	2. In the Mail Merge Helper dialog box, click Get Data, and then click Open Data
	  Source.
	
	3. In the Open Data Source dialog box, click "MS Excel Worksheet (*.xls)" in the
	  Files of type list, and then locate and select your Excel data file.
	
	4. Select the Select Method check box, and then click Open.
	
	5. In the Confirm Data Source dialog box, select "MS Excel Worksheet via
	  Converter (*.xls, *.xlw)", and then click OK.
	
	6. In the Open Worksheet dialog box, click Entire Workbook in the Open Document
	  in Workbook list, and then click OK.
	
	  -or-
	
	  In the Open Worksheet dialog box, click the appropriate sheet in the Open
	  Document in Workbook list, click the appropriate Name or Cell Range, and then
	  click OK.
	
	7. Follow the Mail Merge Helper prompts to set up your main document, and
	  continue the mail merge.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q155179 WD97: How to Use Microsoft Excel Data Source for Word Mail Merge
	
	  Q141922 WD97: How to Start a Mail Merge
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
