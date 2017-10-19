---
layout: page
title: "Q238567: XCLN: How to Restore the Outlook Icon to the Desktop"
permalink: /kb/238/Q238567/
---

## Q238567: XCLN: How to Restore the Outlook Icon to the Desktop

	Article: Q238567
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	For Outlook 98 and Outlook 2000, if you delete the Outlook icon from the
	desktop, there is no interface to restore the icon back to the desktop. You
	cannot recover the icon by right-clicking the desktop and using the Undo Delete
	menu item.
	
	For Outlook 97, the above is also true if you removed the Inbox icon from the
	desktop and converted the Outlook shortcut to a permanent desktop icon using the
	Chnginbx.exe utility from the Office 97 compact disc in the Valupack\Patch
	folder or from the following Microsoft Web site:
	
	  http://office.microsoft.com/downloads/9798/chnginbx.aspx (
	  http://office.microsoft.com/downloads/9798/chnginbx.aspx).
	
	For additional information about the Chnginbx.exe utility, please click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q160297 OL97: How to Change Inbox Icon to Start Microsoft Outlook 97
	
	MORE INFORMATION
	================
	
	When you attempt to delete the Outlook icon from the desktop, a Confirm Delete
	dialog box appears with one of the following messages:
	
	  Microsoft Outlook cannot be stored in the Recycle Bin.
	  Are you sure you want to delete Microsoft Outlook from your desktop? After you
	  remove this icon from your desktop you can still access the files in this
	  folder: C:\Program Files \Microsoft\Office\Office\
	  Are you sure you want to delete Microsoft Outlook from your desktop?
	
	-or-
	
	  Microsoft Outlook cannot be stored in the Recycle Bin.
	  Are you sure you want to delete Microsoft Outlook from your desktop?
	
	It is possible to restore the icon by adding a key in the Registry.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Desktop\NameSpace\
	
	3. On the Edit menu, click Add Key, and then add the following registry key:
	
	  Key Name: {00020D75-0000-0000-C000-000000000046}
	
	4. Quit Registry Editor.
	
	You must refresh the desktop to see the restored Outlook icon. To do this:
	
	1. Minimize all open windows.
	
	2. With the left mouse button, click on the desktop.
	
	3. Press F5 to refresh the desktop.
	
	Additional query words: missing deleted icon
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
