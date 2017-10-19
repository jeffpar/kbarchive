---
layout: page
title: "Q195203: XFOR: cc:Mail 8.01 Clients See Attachment Name Changed to Date"
permalink: /kb/195/Q195203/
---

## Q195203: XFOR: cc:Mail 8.01 Clients See Attachment Name Changed to Date

	Article: Q195203
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 01-MAY-1999
	
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
	
	When you send an e-mail message containing an attachment from Exchange Server
	5.5 through the cc:Mail Connector, users receiving and viewing it with the
	cc:Mail version 8.01 client see a date stamp instead of the attachment file
	name.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Exchange Connector for Lotus cc:Mail
	
	  File Name   Version
	  ----------------------
	  Ccmc.exe    5.5.2424.0
	  Ccmsg.dll   5.5.2424.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To install the hotfix, please perform the following steps:
	
	1. Stop the CCMAIL Connector.
	
	2. Copy the files included in the hotfix to the following locations:
	
	  Ccmc.exe: Exchsrvr\Connect\Ccmail\bin Ccmsg.dll: Exchsrvr\Res
	
	3. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	    HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeCCMC
	    \Parameters
	
	  NOTE: The above registry path has been wrapped for readability.
	
	4. On the Edit menu, click Add Value and add the following information:
	
	    Value Name: Version 8 Attachment Format
	    Class: DWORD
	    Data: 1
	
	  Setting the above key to 1 prevents the date and time from being appended to
	  the attchment name. (If it is set to 0 or is not present, then there is no
	  change in the current behavior.)
	
	5. Restart the CCMail Connector Service.
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
