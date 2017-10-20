---
layout: page
title: "Q182552: XADM: Exporting Secondary Windows NT Accounts"
permalink: /kb/182/Q182552/
---

## Q182552: XADM: Exporting Secondary Windows NT Accounts

{% raw %}

	Article: Q182552
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 08-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes administrators want to export all users using Directory Export.
	However, some users such as conference rooms may have more than one Windows NT
	account. By default, this data is not exported; only the primary account is
	exported.
	
	MORE INFORMATION
	================
	
	In order to pull this data out, the administrator needs to use the Mailbox.csv
	file on the Exchange Server 4.0 compact disc and perform the following steps:
	
	1. Copy the Mailbox.csv file (under \Support\Samples\Csvs) from the Exchange
	  Server compact disc to the Exchange Server computer.
	
	2. Remove the read-only attribute of this file.
	
	3. Point to this file using the Export File button under Directory Export.
	
	4. Set all of the other settings, and then export as usual.
	
	When you look at the .csv file, you will see that the 0bj-Users field contains
	the primary Windows NT account, followed by a percent sign (%) and the secondary
	Windows NT account.
	
	If you do not have the Exchange Server 4.0 CD, the sample .csv files are located
	in the following file that can be downloaded fro the Microsoft Download Center:
	
	Csv.exe:
	
	  http://support.microsoft.com/download/support/mslfiles/Csv.exe
	
	Additional query words: secondary export .csv fields
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
