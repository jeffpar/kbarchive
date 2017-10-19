---
layout: page
title: "Q247839: XCLN: Agents Tab Missing in Outlook Inbox Properties"
permalink: /kb/247/Q247839/
---

## Q247839: XCLN: Agents Tab Missing in Outlook Inbox Properties

	Article: Q247839
	Product(s): Microsoft Exchange
	Version(s): 8.03,8.04; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.03, 8.04 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are trying to add a Microsoft Exchange Server event script to a resource
	account and the Agents tab that you need is missing from the mailbox Inbox
	properties.
	
	CAUSE
	=====
	
	The server scripting add-in may not be enabled in Outlook.
	
	RESOLUTION
	==========
	
	In Outlook 97
	-------------
	
	1. On the Tools menu, click Options, and then click the General tab.
	
	2. Click Add-in Manager.
	
	3. Verify that Server Scripting is installed and enabled. If it is missing from
	  the list, click Scriptxtn.ecf to add it.
	
	In Outlook 98 and Outlook 2000
	------------------------------
	
	1. On the Tools menu, click Options, click the Other tab, and then click
	  Advanced Options.
	
	2. Click Add-in Manager.
	
	3. Verify that Server Scripting is installed and enabled. If it is missing from
	  the list, click Scriptxtn.ecf to add it.
	
	Additionally, to create scripts, users need to be given access. This is done
	through the Microsoft Exchange Server Administrator program. To check or set
	these permissions, perform the following steps:
	
	1. In the Exchange Server Administrator program, double-click the Folders
	  container.
	
	2. Double-click the System Folders container.
	
	3. Double-click Events Root.
	
	4. Click EventConfig_(<ServerName>) where <ServerName> is name of
	  the server you are trying to administer.
	
	5. On the File menu, click Properties.
	
	6. On the General tab, click Client Permissions.
	
	7. Click the users who should have access to create scripts. The lowest
	  permissions you can use is Editor.
	
	Additional query words: 8.03 8.04 8.5 9.0
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook803 kbOutlook804
	Version           : :8.03,8.04; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
