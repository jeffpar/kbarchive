---
layout: page
title: "Q192593: XFOR: Attachment File Name in 8.3 Format in cc:Mail User Inbox"
permalink: kb/192/Q192593/
---

## Q192593: XFOR: Attachment File Name in 8.3 Format in cc:Mail User Inbox

	Article: Q192593
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you send a message with an attachment having a long file name to a cc:Mail
	user, the attachment's file name is shown in 8.3 format in the recipient's
	Inbox.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: cc:Mail Connector
	
	  File Name     Version
	  -----------------------
	  Ccmc.exe      5.5.2332
	  Ccmsg.dll     5.5.2332
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	After you obtain the above fix, add the following registry value in the
	registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	    HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeCCMC
	    \Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	     Value Name: Use long filename
	     Data Type:  REG_DWORD
	     Value:      1
	
	  NOTE: If the registry value is set to 1, the Exchange Connector for Lotus
	  cc:Mail will send the attachment with a long file name to the cc:Mail
	  postoffice. If the registry value is set to 0 or does not exist, the cc:Mail
	  Connector will send the attachment with an 8.3 format file name to the
	  cc:Mail postoffice.
	
	4. Quit Registry Editor.
	
	Additional query words: ccmail
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
