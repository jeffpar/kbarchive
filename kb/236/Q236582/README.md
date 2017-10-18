---
layout: page
title: "Q236582: XADM: Event 1005: Your Profile Is Not Configured"
permalink: kb/236/Q236582/
---

## Q236582: XADM: Event 1005: Your Profile Is Not Configured

	Article: Q236582
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following events logged in the Event Viewer:
	
	  Event ID 1005 Source MSExchangeSA
	
	  Unexpected error 0xc0040000 Your Profile is not configured.
	  Microsoft Exchange Server Information Store ID no:
	  8004011c-0521-00000000
	
	  Event 5004 Source MSExchangeSA
	
	  Generation of the Offline address Book is complete. Result: Your profile
	  is not configured. Microsoft Exchange Server Information Store ID no:
	  80040111-0521-00000000
	
	CAUSE
	=====
	
	The system attendant mailbox in the information store is not logging on to the
	directory.
	
	RESOLUTION
	==========
	
	Check that a value exists for the Home-MDB attribute of the System Attendant
	object, and that it has the correct distinguished name.
	
	Steps to Check the Home-MDB Attribute
	-------------------------------------
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. Connect to the server that is producing the error.
	
	3. Click to expand Site, click to expand Configuration, click to expand Servers,
	  click to expand <servername>, and then select the System Attendant
	  object.
	
	4. On the File menu, click Raw Properties.
	
	5. In the List Attributes of type box, select All.
	
	6. Select the Home-MDB object. The syntax should be in the following format; if
	  it isn't, please change accordingly:
	
	  /o=OrgName/ou=SiteName/cn=Configuration/cn=Servers/cn=ServerName/cn=Microsoft
	  Private MDB
	
	7. Click Apply if changes were made in step 6.
	
	8. Quit the Administrator program, and stop and restart the Exchange Server
	  directory service.
	
	Additional query words: SA
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
