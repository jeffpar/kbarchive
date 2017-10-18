---
layout: page
title: "Q198108: XCLN: Microsoft Exchange and/or Outlook Client Hangs"
permalink: kb/198/Q198108/
---

## Q198108: XCLN: Microsoft Exchange and/or Outlook Client Hangs

	Article: Q198108
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you log on to an Exchange Server mailbox and access your mail messages,
	the client may appear to stop responding (hang) for several minutes before the
	user is able to continue working.
	
	CAUSE
	=====
	
	The profile contains incorrect information for a server that the client
	previously had need to connect to, and the server is no longer online or has
	been removed.
	
	
	WORKAROUND
	==========
	
	To work around this problem, create a new profile.
	
	MORE INFORMATION
	================
	
	This problem may occur because the server(s) that contained Site Folders was
	improperly removed. Site Folders consist of the Off-line Address Book folder
	(OAB), the Schedule+ Free Busy Information folder, and the Organizational Forms
	folder.
	
	For more information, please see the following Microsoft Knowledge Base article:
	
	  Q152959 XADM: How to Remove the First Exchange Server in a Site
	
	Additional query words: hang slow freeze 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0,8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	
