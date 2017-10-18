---
layout: page
title: "Q169761: XADM: Sample CSVs Not Included on Exchange Server 5.0 or 5.5 CD"
permalink: kb/169/Q169761/
---

## Q169761: XADM: Sample CSVs Not Included on Exchange Server 5.0 or 5.5 CD

	Article: Q169761
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbtshoot
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample .csv files that are included on the Exchange Server 4.0 CD are not on
	the Exchange Server 5.0 and 5.5 CDs. These .csv files were located on the
	Exchange Server 4.0 CD in the following location:
	
	  Support\Samples\Csvs
	
	The sample files included are: Mailbox.csv, Dl.csv, Custom.csv, Cust_att.csv, and
	tpl.csv.
	
	MORE INFORMATION
	================
	
	You can still use the .csv files from the Exchange Server 4.0 CD for exporting
	and importing in Exchange Server 5.0 or 5.5. If you do not have the Exchange 4.0
	CD, the sample CSVs are located in the following file that can be downloaded
	from the Microsoft Download Center:
	
	  Csv.exe
	  http://download.microsoft.com/download/exch55/Utility/5.5/NT45/EN-US/CSV.exe
	
	Release Date: 09/11/98
	
	For more information about downloading files from the Microsoft Download Center,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	If you are unable to download or locate the .csv files, the Header.exe utility
	from the BackOffice Resource Kit can be used instead to create a .csv file with
	only the required headers for importing.
	
	Additional query words: missing
	
	======================================================================
	Keywords          : kbtshoot 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
