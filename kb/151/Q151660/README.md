---
layout: page
title: "Q151660: Reinstalling Causes Loss of MS Exchange Client Functions"
permalink: kb/151/Q151660/
---

## Q151660: Reinstalling Causes Loss of MS Exchange Client Functions

	Article: Q151660
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Microsoft Exchange Server client and you choose to reinstall
	Microsoft Exchange, The Microsoft Network, or Microsoft Fax during a custom
	Windows 95 installation, Microsoft Schedule+ 7.0 may no longer work properly and
	many of the menu items for the Microsoft Exchange Server client may no longer
	appear.
	
	CAUSE
	=====
	
	When you reinstall the Microsoft Exchange client that is included with Windows
	95, The Microsoft Network, or Microsoft Fax, the Microsoft Exchange Server
	client files are overwritten. The Microsoft Exchange client that is included
	with Windows 95 does not include the advanced features of the Microsoft Exchange
	Server client.
	
	RESOLUTION
	==========
	
	To resolve these problems, reinstall the Microsoft Exchange Server client.
	
	MORE INFORMATION
	================
	
	When this situation occurs, the following menu items no longer appear:
	
	  File     Add to Favorites
	  Tools    Synchronize
	           All folders
	           This Folder
	           Download Address Book
	           Inbox Assistant
	           Out of Office Assistant
	           Application Design
	           Folder Designer
	           Copy Folder Design
	           Folder Design Cue Cards
	  Compose  New Form
	
	Note that some portions of the Inbox Assistant may still function (such as moving
	mail to folders other than the Inbox), but there is no way to alter this
	behavior without reinstalling the Microsoft Exchange Server client. If you made
	changes to the default fonts, such as the font used to reply to mail, you must
	reconfigure your preferences.
	
	
	Additional query words: osr2
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbOPKSearch kbWin95
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
