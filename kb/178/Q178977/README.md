---
layout: page
title: "Q178977: WD97: Error Message in Print Preview with Excel DDE Data Source"
permalink: /kb/178/Q178977/
---

## Q178977: WD97: Error Message in Print Preview with Excel DDE Data Source

{% raw %}

	Article: Q178977
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Print Preview (on the File menu) within a Microsoft Word envelope
	mail merge main document using a Microsoft Excel spreadsheet as your data
	source, you may receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	When you click Details, you receive the following message:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at <address>
	
	When you click Close, Word will quit automatically.
	
	CAUSE
	=====
	
	This problem occurs when all of the following conditions are true:
	
	- You are creating a mail-merge envelope document.
	
	  -and-
	
	- You are using an Excel spreadsheet as your mail-merge data source, and you
	  select "MS Excel Worksheets via DDE (*.xls)" as the data source.
	
	  -and-
	
	- You activate the View Merged Data icon on the Mail Merge toolbar.
	
	  -and-
	
	- You click Print Preview on the File menu.
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1: Use a Connection Method to Excel Other Than DDE
	---------------------------------------------------------
	
	When setting up the mail merge document, select a connection method to Excel
	other than DDE. To do this, follow these steps:
	
	1. On the Tools menu, click Mail Merge.
	
	2. Under Data Source, click Get Data, and then click Open Data Source.
	
	3. Click to select the Select Method check box.
	
	4. In the Confirm Data Source dialog box, click to select the Show All check
	  box. In the Open Data Source list, select either "Microsoft Excel Worksheet
	  via Converter (*.xls; *.xlw)" or "Microsoft Excel Files via ODBC (*.xls)."
	
	Method 2: Attach an Envelope to a Form Letter Mail-Merge Main Document
	----------------------------------------------------------------------
	
	When setting up the mail-merge document, add an envelope to a Word document and
	then select a Mail Merge Main Document type of Form Letters. To do this, follow
	these steps:
	
	1. In a new document, on the Tools menu, click Envelopes And Labels.
	
	2. Click Add to Document and then save the document.
	
	3. On the Tools menu, click Mail Merge.
	
	4. Under Create, select Form Letters and then click Active Window.
	
	NOTE: This method may cause another error message. For additional information
	about this problem, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171596 WD97: ErrMsg in Letter and Envelope Mail Merge w/ Excel DDE
	  Data[word]
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about similar problems using Word and Excel, please
	see the following articles in the Microsoft Knowledge Base:
	
	  Q113705 Word Could Not Re-Establish DDE Connection to MS Excel
	
	  Q155179 WD: How to Use Microsoft Excel Data Source for Word Mail Merge
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
