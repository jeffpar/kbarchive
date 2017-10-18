---
layout: page
title: "Q154443: XFOR: Err Msg: Event Id 283, Changes Could not be Written"
permalink: kb/154/Q154443/
---

## Q154443: XFOR: Err Msg: Event Id 283, Changes Could not be Written

	Article: Q154443
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the Microsoft Exchange Migration Wizard to migrate MS Mail
	accounts, you might receive the following error:
	
	  event id= 283 source=ms exchange migds
	  Changes could not be written to the Directory object. Try connecting to an
	  Exchange Server in the same Site as this object.
	
	This can be caused by either insufficient rights to the Microsoft Exchange
	Directory, or a mailbox or custom recipient that already exists on the Microsoft
	Exchange Server.
	
	MORE INFORMATION
	================
	
	If the Microsoft Exchange Server has been set up for Directory Synchronization
	with the MS Mail Postoffice, there will already be an object for the MS Mail
	user. To migrate these users, perform the following steps:
	
	1. Log into the domain using the Microsoft Exchange Service Account or an
	  account that has administrative permissions for the Microsoft Exchange
	  Server.
	
	2. Use the Microsoft Exchange Administrator program to remove the custom
	  recipient or mailbox object for the user that you are trying to migrate from
	  the Global Address List and recipients container.
	
	3. Run a Knowledge Consistency Check on the Microsoft Exchange Directory.
	
	4. Rerun the Microsoft Exchange Migration Wizard.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
