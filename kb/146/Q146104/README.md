---
layout: page
title: "Q146104: XFOR: How to Display Per Postoffice Users in the Address Book"
permalink: kb/146/Q146104/
---

## Q146104: XFOR: How to Display Per Postoffice Users in the Address Book

	Article: Q146104
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to setup directory synchronization (dirsync) so that
	individual Microsoft Mail postoffice address lists will be available in the
	Microsoft Exchange Address Book.
	
	When you use directory synchronization between Microsoft Exchange and Microsoft
	Mail, when viewing the Address Book in the Microsoft Exchange client, all the
	Microsoft Mail users appear in a single container in addition to the Global
	Address List. Users migrated from Microsoft Mail to Microsoft Exchange may be
	used to look for users on a per-postoffice basis.
	
	The following procedure will only work if Microsoft Exchange is defined as the
	directory synchronization server.
	
	MORE INFORMATION
	================
	
	Assume you want the following list of Microsoft Mail postoffices to be
	displayed:
	
	  MICROSOFT MAIL
	     NETWORK1
	        PO1
	        PO2
	     NETWORK2
	        PO1
	        PO2
	
	To have the above hierarchy populated with the names from the corresponding
	postoffices and appear in the Exchange Address Book, follow the steps below:
	
	1. Create containers with the above hierarchy, that is, create a container named
	  MICROSOFT MAIL.
	
	2. Create two sub-containers of this container, named NETWORK1 and NETWORK2.
	
	3. Create sub-containers of these containers for the postoffice names listed
	  above.
	
	4. When you define the remote dirsync requestors for each Microsoft Mail
	  postoffice, in the Import Container property page, select the container
	  created in step 1 for that postoffice. For example, if you are defining a
	  remote requestor for postoffice NETWORK1/PO1, select the container PO1 that
	  is a sub-container of the container NETWORK1.
	
	5. Configure the remaining Remote Requestor settings as you would normally do.
	
	After directory synchronization is successfully completed, Microsoft Mail custom
	recipients should be created on the Exchange side for each Microsoft Mail user.
	Also, these custom recipients should be created in the container corresponding
	to the Microsoft Mail postoffice.
	
	Additional query words: dir-sync dirsynch
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
