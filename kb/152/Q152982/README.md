---
layout: page
title: "Q152982: XCLN: Changing the Directory for Adding and Saving Attachments"
permalink: kb/152/Q152982/
---

## Q152982: XCLN: Changing the Directory for Adding and Saving Attachments

	Article: Q152982
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 01-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The default directory that file attachments are loaded from and message
	attachments are saved to is set by the start up directory property set on the
	Microsoft Exchange icon.
	
	MORE INFORMATION
	================
	
	This can be modified by following the steps listed below for each client.
	
	Microsoft Windows 95
	--------------------
	
	If Microsoft Exchange is being started from the desktop, then a Short Cut must be
	created to modify the Startup directory. The file properties can not be modified
	on the Inbox icon.
	
	To create the short cut, right click the Desktop, and choose Shortcut from the
	New menu item. Create a shortcut to Exhcng32.exe and set the shortcut property
	for Start In directory to the desired location; for example, C:\TEMP.
	
	Microsoft Windows 3.1, Windows for Workgroups: and Windows NT 3.51
	------------------------------------------------------------------
	
	With the Microsoft Exchange icon selected in Program Manager, click Properties on
	the File menu. Set the Working Directory to the desired location; for example,
	C:\TEMP.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
