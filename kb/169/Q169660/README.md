---
layout: page
title: "Q169660: XCLN: Excel Hyperlinks Don't Work If .xls Is in Public Folder"
permalink: /kb/169/Q169660/
---

## Q169660: XCLN: Excel Hyperlinks Don't Work If .xls Is in Public Folder

	Article: Q169660
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If a Microsoft Excel worksheet contains a hyperlink to a cell on another
	worksheet in the same workbook, and the workbook is posted to a Microsoft
	Exchange public folder, the hyperlink will not work. When you click the
	hyperlink, you receive the following error message:
	
	  An unexpected error has occurred (HRESULT= 0004005)
	
	CAUSE
	=====
	
	Microsoft Excel has no physical reference for the location of the hyperlink (for
	example, c:\Mydocs\Test.xls) when it is stored in a public folder. A Microsoft
	Excel 97 hyperlink needs a physical disk and file location as a reference to
	work correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch
	Version           : :4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	
