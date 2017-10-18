---
layout: page
title: "Q230273: XWEB: OWA Creates English Special Folders During Logon"
permalink: kb/230/Q230273/
---

## Q230273: XWEB: OWA Creates English Special Folders During Logon

	Article: Q230273
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use Microsoft Outlook Web Access to log on to a mailbox for the very
	first time, the following folders are always created in English:
	
	  Calendar, Journal, Tasks, Notes, Contacts
	
	Only the standard Messaging Application Programming Interface (MAPI) folders are
	localized, which are:
	
	  Inbox, Outbox, Sent Items, Deleted Items
	
	CAUSE
	=====
	
	Collaboration Data Objects (CDO) is not able to handle different languages. It
	always uses English as default.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	For additional information on how to download the update for this problem, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q289606 XGEN: Exchange Server 5.5 Post-Service Pack 4 Collaboration Data
	  Objects Fixes Available
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Exchange Server version 5.5
	SP2. This problem was first corrected in Exchange Server 5.5 Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	There is a new registry setting that can be set to select one of the following
	languages:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeWeb\Parameters
	
	The new value is called: DefaultLCIDForCDO1, type: REG_DWORD
	
	The value for this is the Local ID (LCID) that the Outlook Web Access clients use
	and want their Outlook folder names in. For example, for Japanese Outlook Web
	Access clients, this value should be set to 0x0411. The legal values for this
	are listed below:
	
	  0x0409: //English (US)
	  0x0809: //English (Britain)
	  0x1009: //English (Canada)
	  0x1409: //English (New Zealand)
	  0x0C09: //English (Australia)
	  0x1809: //English (Ireland)
	  0x1C09: //English (South Africa)
	  0x2009: //English (Jamaica)
	  0x2409: //English (Caribbean)
	
	  0x040C: //French (Standard)
	  0x080C: //French (Belgium)
	  0x100C: //French (Switzerland)
	  0x0C0C: //French (Canada)
	  0x140C: //French (Luxembourg)
	
	  0x0407: //German (Standard)
	  0x0807: //German (Switzerland)
	  0x0C07: //German (Austria)
	  0x1007: //German (Luxembourg)
	  0x1407: //German (Liechtenstein)
	
	  0x0411: //Japanese
	
	  0x080A: //Spanish (Mexico)
	  0x040A: //Spanish (Traditional)
	  0x0C0A: //Spanish (Modern)
	
	
	To install the fix, perform the following steps on the computer where Outlook Web
	Access is installed:
	
	1. Stop the Microsoft Internet Information Server (IIS).
	
	2. Replace Cdo.dll under <Winroot>\System32.
	
	3. Add the above registry key and value.
	
	4. Restart IIS.
	
	After that, every client logging on for the first time gets the folder names in
	the language chosen by the registry key.
	
	Additional query words: cdo dll
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
