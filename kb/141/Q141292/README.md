---
layout: page
title: "Q141292: How to Set Up a Fax Server or Fax Client with Microsoft Fax"
permalink: /kb/141/Q141292/
---

## Q141292: How to Set Up a Fax Server or Fax Client with Microsoft Fax

	Article: Q141292
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the network fax service to configure a network
	fax server or a network fax client.
	
	NOTE: This article assumes that Microsoft Exchange and the Microsoft Fax service
	are already installed in Windows 95.
	
	MORE INFORMATION
	================
	
	Setting Up a Fax Server
	-----------------------
	
	To set up a fax server, follow these steps:
	
	1. In Control Panel, double-click Mail And Fax, and then click Show Profiles.
	
	2. Click Add, and then use the Inbox Setup Wizard to create a new profile that
	  includes Microsoft Fax.
	
	  NOTE: You can also add Microsoft Fax to an existing profile.
	
	3. Double-click the profile that includes Microsoft Fax, click the Microsoft Fax
	  service in the profile, and then click Properties.
	
	4. On the Modem tab, click the "Let other people on the network use my modem to
	  send faxes" check box to select it.
	
	5. Click the drive you want the network fax service to use, and then click OK.
	
	6. Click the Properties button next to the fax share name. If your computer is
	  set up to use share-level security, give Full Access rights to the shared fax
	  folder. If your computer is set up to use user-level security, add any users
	  who will use the fax server and give them Full Access rights. Click OK.
	
	7. Click the active fax/modem in the list of available modems, and then click
	  Properties.
	
	8. Configure the Fax Modem properties as appropriate, and then click OK.
	
	9. Click OK until you return to the Microsoft Exchange Profiles dialog box. In
	  the "When starting Microsoft Exchange, use this profile" box, click the
	  profile that includes Microsoft Fax, and then click Close.
	
	Note that Microsoft Exchange must be running in order for the fax server to be
	available. You may want to place a shortcut to the Inbox in your Startup
	folder.
	
	Setting Up a Fax Client
	-----------------------
	
	To set up a fax client, follow these steps:
	
	1. In Control Panel, double-click Mail And Fax, and then click Show Profiles.
	
	2. Click Add, and then use the Inbox Setup Wizard to create a new profile that
	  includes Microsoft Fax.
	
	  NOTE: You can also add Microsoft Fax to an existing profile.
	
	3. Double-click the profile that includes Microsoft Fax, click the Microsoft Fax
	  service in the profile, and then click Properties.
	
	4. On the Modem tab, click Add. Click Network Fax Server, and then click OK.
	
	5. Type the path to a shared network fax directory, and then click OK. Use the
	  following syntax:
	
	  "\\<server name>\<share name>" (without the quotation marks)
	
	  NOTE: If Microsoft Exchange is not running on the Fax server, you receive an
	  error message when you type the path to the shared network fax directory.
	  Make sure that Microsoft Exchange is running on the Fax server.
	
	6. Click the path for the shared network fax in the list of available modems,
	  click Set As Active Fax Modem, click OK, and then click OK.
	
	7. In the "When starting Microsoft Exchange, use this profile" box, click the
	  profile that includes Microsoft Fax, and then click Close.
	
	REFERENCES
	==========
	
	For additional information, please refer to chapter 27 of the Windows 95
	Resource Kit.
	
	Additional query words: msfax
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
