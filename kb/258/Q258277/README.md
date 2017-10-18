---
layout: page
title: "Q258277: XCLN: How to Disable AutoArchive and Personal Folders"
permalink: kb/258/Q258277/
---

## Q258277: XCLN: How to Disable AutoArchive and Personal Folders

	Article: Q258277
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	You may want to deploy Outlook with the AutoArchive and personal folder file
	(.pst) capabilities disabled. This article describes how to disable the
	AutoArchive and personal folder file features in Outlook and describes the
	Outlook options that are impacted if you disable these features.
	
	MORE INFORMATION
	================
	
	Disabling the AutoArchive and Personal Folder File Features
	-----------------------------------------------------------
	
	To disable the AutoArchive feature in Outlook:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Quit all programs.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	4. Locate one of the following keys in the registry, as applicable:
	
	   - For Outlook 98:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Office\8.0\Outlook\
	
	   - For Outlook 2000:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Office\9.0\Outlook\
	
	5. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: DisablePst
	  Data Type: REG_DWORD
	  Value: 1
	
	6. Quit Registry Editor.
	
	Outlook Options Impacted
	------------------------
	
	- If you click Tools, click Options, and then click the Other tab, the
	  AutoArchive section is hidden. You cannot set AutoArchive options.
	
	- The AutoArchive tab in each Folder Property dialog box is hidden.
	
	- All of the AutoArchive settings that were previously set are no longer
	  enabled. For example, if you previously configured AutoArchive to move
	  messages older than six months from your Sent Items folder to a personal
	  folder file, this feature no longer functions.
	
	- On the File menu, the Archive command is hidden.
	
	- On the File menu, the "Open Personal Folders File (.pst)" command is hidden.
	
	- On the File menu, the "Import and Export" command no longer imports or
	  exports to a .pst file. If you choose this command, the following message is
	  displayed:
	
	  PST (Personal Storage) usage is disabled on this computer.
	
	NOTE: After you add the DisablePst registry key, users can still add the Personal
	Folder service to their profiles.
	
	
	Additional query words: pst OL98 OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook98Search kbZNotKeyword3
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
