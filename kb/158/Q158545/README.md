---
layout: page
title: "Q158545: XADM: How to Determine the Organization, Site, and Computer Name"
permalink: /kb/158/Q158545/
---

## Q158545: XADM: How to Determine the Organization, Site, and Computer Name

	Article: Q158545
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the Microsoft Exchange Directory service fails to start, either because the
	computer name has been changed or there is file corruption, you need to
	determine the organization name, site name, and possibly the computer name. To
	re-create the same machine configuration, you must determine the computer name.
	To determine these names, you need to find the file called "Exchange Server
	Setup.log," located in the root of the disk drive where the Microsoft Exchange
	Server is installed.
	
	MORE INFORMATION
	================
	
	To determine the organization, site, and computer name:
	
	1. In the root directory of the computer running Microsoft Exchange Server,
	  locate a file called "Exchange Server Setup.log."
	
	2. Using Notepad or another text editor, search the log for the first occurrence
	  of "Creating." This will display the organization, site, and computer name.
	  Because the file is appended each time Setup is run, there may be multiple
	  Setup details in the file.
	
	3. To display the latest log, go to the bottom of the file and search upwards
	  for the "Creating Object" line.
	
	  In the "Creating Object" line, the organization, site, and computer names are
	  displayed as shown below:
	
	     /o=<Organization>/ou=<sitename>/cn=configuration/ 
	     cn=servers/cn=<computername>
	
	Additional query words: recreate dir.edb directory salvage
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
