---
layout: page
title: "Q170410: WD97: ErrMsg Inserting If Then Else Field into Envelope"
permalink: kb/170/Q170410/
---

## Q170410: WD97: ErrMsg Inserting If Then Else Field into Envelope

	Article: Q170410
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbfield winword word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you insert an If Then Else field into a Microsoft Word 97 envelope mail
	merge, and you use a Microsoft Excel worksheet as a data source with the default
	dynamic data exchange (DDE) method, you may receive the following error
	message:
	
	  This program has performed an illegal operation and will be shut down.
	  If the problem persists, contact the vendor.
	
	When you click Details, you receive the following message:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at
	  0137:<address>
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	1. On the Tools menu, click Mail Merge.
	
	2. Under Main Document, click Create, and then click Envelopes.
	
	3. Click New Main Document.
	
	4. Under Data Source, click Get Data, and then click Open Data Source.
	
	5. In the Open Data Source dialog box, click to select the Select Method check
	  box.
	
	6. In the Files Of Type list, click to select MS Excel Worksheets.
	
	7. Select the Microsoft Excel worksheet that you want to open, and then click
	  Open.
	
	8. In the Confirm Data Source dialog box, select either "Microsoft Excel
	  Worksheet via Converter" or "Excel Files via ODBC" and then click OK.
	
	  NOTE: Do not select "MS Excel Worksheets via DDE," as this causes the error
	  message described in the "Symptoms" section of this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	MORE INFORMATION
	================
	
	For more information on how to use Microsoft Excel as a data source in a mail
	merge, please see the following article in the Microsoft Knowledge Base:
	
	  Q155179 How to Use Microsoft Excel Data Source for Word Mail Merge
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbfield winword word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
