---
layout: page
title: "Q171596: WD97: ErrMsg in Letter and Envelope Mail Merge w/ Excel DDE Data"
permalink: kb/171/Q171596/
---

## Q171596: WD97: ErrMsg in Letter and Envelope Mail Merge w/ Excel DDE Data

	Article: Q171596
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you perform a mail merge in Microsoft Word 97 using a Microsoft Excel
	spreadsheet as your data source using a dynamic data exchange (DDE) connection,
	you may receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	When you click Details, you receive the following message:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at <address>
	
	CAUSE
	=====
	
	This problem occurs when all of the following conditions are true:
	
	- You are creating a mail merge document that combines both a form letter and
	  an envelope.
	
	  -and-
	
	- You are using an Excel spreadsheet as your mail merge data source, and select
	  "MS Excel Worksheets via DDE (*.xls)" as the data source.
	
	  -and-
	
	- You click Cancel on the Envelopes and Labels dialog box, and then click
	  Envelopes and Labels on the Tools menu a second time.
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1: Using the DDE Connection
	----------------------------------
	
	1. Before clicking Envelopes and Labels on the Tools menu, select the mail merge
	  fields in the document that you also want to be added to the Envelope.
	
	2. On the Edit Menu, click Copy.
	
	3. On the Tools Menu, click Envelopes and Labels.
	
	4. On the Envelopes tab, press CTRL+V to paste the mail merge fields into the
	  Delivery Address box.
	
	5. Click Add To Document.
	
	6. Proceed with the Mail Merge.
	
	Method 2: Use a Connection Method to Excel Other Than DDE
	---------------------------------------------------------
	
	When setting up the mail merge document, select a connection method to Excel
	other than DDE. To do this, follow these steps:
	
	1. On the Tools menu, click Mail Merge.
	
	2. Under Data Source, click Get Data, and then click Open Data Source.
	
	3. Click to select the Select Method check box.
	
	4. In the Confirm Data Source dialog box, click to select the Show All check
	  box. In the Open Data Source list, select either "Microsoft Excel Worksheet
	  via Converter (*.xls; *.xlw)" or "Microsoft Excel Files via ODBC (*.xls)."
	
	Method 3: Use Separate Mail Merge Documents
	-------------------------------------------
	
	Create the form letter and envelope in two different mail merge main documents.
	Use the same spreadsheet as the data source for both documents.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	REFERENCES
	==========
	
	For additional information about similar problems using Word and Excel, please
	see the following articles in the Microsoft Knowledge Base:
	
	  Q113705 Word Could Not Re-Establish DDE Connection to MS Excel
	
	  Q155179 WD: How to Use Microsoft Excel Data Source for Word Mail Merge
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
