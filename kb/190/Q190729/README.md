---
layout: page
title: "Q190729: XADM: How to Enter a Company Name for a Distribution List"
permalink: kb/190/Q190729/
---

## Q190729: XADM: How to Enter a Company Name for a Distribution List

	Article: Q190729
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you edit or create a new distribution list in the Exchange Server
	Administrator program, there is no data field to enter a Company value.
	
	To enter a Company name for a distribution list, perform the following steps:
	
	1. In the Administrator program, select Tools and choose Directory Export to
	  export the distribution list to a CSV file.
	
	2. Modify the CSV file to add the column "Company."
	
	3. Modify the CSV file to enter the company information in the Company column.
	
	4. Import the updated CSV file.
	
	MORE INFORMATION
	================
	
	A complete CSV file with all possible headers can be found on the Exchange
	Server 4.0 disc under Support\Samples\Csvs\Mailbox\Mailbox.csv. For more
	information about the Import/Export process, see the following article in the
	Microsoft knowledge Base:
	
	  Q155414 XADM: Bulk Import/Export FAQ
	
	Additional query words: DL
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
