---
layout: page
title: "Q170378: XADM: Removing SMTP Addresses for All Users"
permalink: /kb/170/Q170378/
---

## Q170378: XADM: Removing SMTP Addresses for All Users

	Article: Q170378
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It may be necessary to eliminate SMTP addresses for your entire Microsoft
	Exchange Server site. When you delete the addresses on the site addressing
	level, you will be unable to edit and change the SMTP attributes on the site
	level.
	
	MORE INFORMATION
	================
	
	It is possible to remove all SMTP addresses on the server level through the
	Microsoft Exchange Server Import/Export feature by following these steps:
	
	1. Create a .csv file with the attribute E-mail Addresses.
	
	2. Edit a sample .csv file located on the Exchange Server CD in
	  Support\Samples\Csvs\Mailbox, or generate a .csv file by using the Header.exe
	  program supplied with the Microsoft Exchange Server Resource Kit.
	
	3. When you use this .csv file and export the server's recipient list, edit
	  "SMTP:user@host.ext" by deleting the e-mail address; only "SMTP:" should
	  remain.
	
	4. Save the contents and import the new .csv file back to the server.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q155414 Bulk Import/Export FAQ
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
