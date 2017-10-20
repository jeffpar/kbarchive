---
layout: page
title: "Q159719: WD97: Error Merging with Outlook CSV, TSV File"
permalink: /kb/159/Q159719/
---

## Q159719: WD97: Error Merging with Outlook CSV, TSV File

{% raw %}

	Article: Q159719
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta kbmergekbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error message when you attempt to merge using a comma
	separated value (CSV) or a tab separated value (TSV) data source exported from
	Microsoft Outlook 97 for Windows.
	
	  Record <n> contained too few data fields.
	
	CAUSE
	=====
	
	When you export the data from Microsoft Outlook, some of the fields are not
	exported. For example, all of the header fields are exported, but empty data
	fields are dropped, resulting in fewer fields for some data records than are
	present in the header record.
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1: Export File from Outlook as CSV or TSV
	------------------------------------------------
	
	When you export the file from Outlook into either CSV or TSV format, follow these
	steps:
	
	1. On the File menu, click Import and Export.
	
	2. Select Export To A File and click Next.
	
	3. Select the folder you want to export from. For example, select the Contacts
	  folder. Click Next.
	
	4. In the Create A File Of Type list, select either Comma Separated Values
	  (Windows) or Tab Separated Values (Windows), and then click Next.
	
	5. Type a name for the new file in the Save Exported Files As box, and click
	  Next.
	
	6. Click Map Custom Fields, select the default map, and then click OK.
	
	7. Click Finish.
	
	Method 2: Attach the CSV File Using ODBC
	----------------------------------------
	
	NOTE: This method does not work with TSV files. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q137385 WD97: Error Using Text Data Source with ODBC Driver
	
	To attach the CSV file using ODBC, start Word, and then follow these steps:
	
	- On the Insert menu, click Database, and then click the Get Data button.
	
	  -or-
	
	- Open the mail merge main document and follow these steps:
	
	  1. On the Tools menu, click Mail Merge.
	
	  2. In the Mail Merge Helper, click the Get Data button, and then click Open
	     Data Source.
	
	Select the CSV file you want to use, click to select the Select Method check box,
	and then click OK.
	
	In the Confirm Data Source dialog box, select Text Files Via ODBC, and then click
	OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	
	Additional query words: 8.0 word8 word97 outlook97
	
	======================================================================
	Keywords          : kbualink97 kbdta kbmerge kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
