---
layout: page
title: "Q158299: XCLN: How to Change the Font of Folder Contents"
permalink: /kb/158/Q158299/
---

## Q158299: XCLN: How to Change the Font of Folder Contents

	Article: Q158299
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can change the font used in the folder content listing in the Microsoft
	Exchange Client. This is the font used on the list of folders in the left pane
	and the subject of the messages shown in the right pane.
	
	MORE INFORMATION
	================
	
	In Windows 95 and Windows NT 4.0, the Microsoft Exchange Client uses the same
	font settings as the Internet Explorer does. To change the font:
	
	1. In Control Panel, click the Display icon, or, on the desktop, right- click
	  the desktop and then click Properties from the pop-up menu.
	
	2. On the Appearance tab, change the font for the Icon Item. The font in the
	  right pane will change immediately. The left pane font will not reflect the
	  new settings until you exit and restart the Microsoft Exchange client.
	
	When using Windows NT 3.51, the font can only be changed through a registry
	entry. The following registry key is the key necessary to change:
	
	  HKEY_CURRENT_USER\Control Panel\Desktop
	  IconTitleFaceName: MS Sans Serif
	
	For example, if you want to change the icon font to Courier, change the value to
	"Courier".
	
	The change will take effect the next time that you log in.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
