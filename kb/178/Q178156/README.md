---
layout: page
title: "Q178156: XCLN: How to Change the Default Directory Location"
permalink: /kb/178/Q178156/
---

## Q178156: XCLN: How to Change the Default Directory Location

{% raw %}

	Article: Q178156
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.01, 8.02, 8.03 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article discusses how to change the default location to which attachments
	within a message will be saved.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The location that attachments are saved to is not a function of the Exchange or
	Outlook client. It is a function of the operating system's Program Manager
	shell. In the case of Windows 95 and Windows NT 4.0, this shell is Explorer.
	
	To change this location requires editing the Registry.
	
	1. Start Registry Editor (Regedit.exe for Windows 95/98, Regedt32.exe for
	  Windows NT).
	
	2. Select the following Registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\ Explorer\User
	  Shell Folders
	
	3. Modify the following value by replacing the default directory path with the
	  path for the location you want to save attachments in:
	
	  Personal
	
	4. Quit Registry Editor.
	
	5. Restart the Microsoft Exchange or Microsoft Outlook client.
	
	Additional query words: OL97 OL98 browse file insert custom
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0,8.01,8.02,8.03
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
