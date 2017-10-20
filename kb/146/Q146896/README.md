---
layout: page
title: "Q146896: WD97: Word Ignores First Record in Excel Data Source"
permalink: /kb/146/Q146896/
---

## Q146896: WD97: Word Ignores First Record in Excel Data Source

{% raw %}

	Article: Q146896
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you perform a mail merge using a Microsoft Excel data source that does not
	contain a header row, and you attach a separate header document, Microsoft Word
	ignores the first row of data from the Excel data file. As a result, if the
	first row in the Excel worksheet contains a data record, this record is not
	merged.
	
	CAUSE
	=====
	
	This problem occurs when you are performing a mail merge via a DDE connection
	with a Microsoft Excel Worksheet as your data.
	
	WORKAROUND
	==========
	
	In Microsoft Windows, this problem does not occur when you use the Microsoft
	Excel Worksheet via an Excel Converter method or ODBC method.
	
	This problem also does not occur when you use other types of data sources.
	
	To work around this problem, use any of the following methods.
	
	Method 1
	--------
	
	1. In the Mail Merge Helper, when you click Open Data Source (Get Data under
	  Data Source), click Select Method.
	
	2. Select the file you want to Open and then click OK or click Open.
	
	3. When the Confirm Data Source dialog box appears, select Microsoft Excel
	  Worksheet via Converter (*.xls, *.xlw).
	
	4. Click OK.
	
	Method 2
	--------
	
	Insert a row above the first record in your Excel data file. Word will ignore
	this first row and merge all of your records.
	
	Method 3
	--------
	
	Instead of using a Header document, insert a row above the first record in your
	Excel data file and type the header field names in this row.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: excel xl datafile dde dynamic exchange converter field missing one initial
	
	======================================================================
	Keywords          : kbinterop word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug kbhowto
	
	=============================================================================
	

{% endraw %}
