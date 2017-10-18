---
layout: page
title: "Q165414: Error Message: Internal MAPI Error"
permalink: kb/165/Q165414/
---

## Q165414: Error Message: Internal MAPI Error

	Article: Q165414
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running the Inbox Setup Wizard and you click the Back button to
	change a setting, you may receive the following error message:
	
	  Internal MAPI error
	  The properties of Microsoft Fax
	  could not be saved into the profile.
	  Contact your administrator.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	- Cancel the Inbox Setup Wizard and start the Inbox Setup Wizard again.
	
	- Use the Add/Remove Programs tool in Control Panel to remove Windows
	  Messaging, restart Windows 95 when you are prompted, and then reinstall
	  Microsoft Fax. This adds Windows Messaging by default. When you click the
	  Apply button, the Inbox Setup Wizard will start.
	
	NOTE: You can add additional Windows Messaging components you may need by
	clicking Details for Windows Messaging.
	
	MORE INFORMATION
	================
	
	When you click the Back button the Next button may disappear, preventing you
	from completing the Inbox Setup.
	
	Additional query words: 95 exchange
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
