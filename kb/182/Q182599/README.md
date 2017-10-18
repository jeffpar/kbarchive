---
layout: page
title: "Q182599: XCLN: Multinational Clients Cannot Add Some Users to PAB"
permalink: kb/182/Q182599/
---

## Q182599: XCLN: Multinational Clients Cannot Add Some Users to PAB

	Article: Q182599
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 24-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a multinational client against an English (US) server, you may
	receive the following error message. The error message will be displayed in the
	foreign language of the client and may differ slightly in the translation.
	
	When you try to add a user to a personal address book (PAB):
	
	  An error has occurred. The members list has not changed because one or
	  more selected members couldn't be added.
	
	CAUSE
	=====
	
	The server has not been properly set up with the necessary client information.
	
	RESOLUTION
	==========
	
	To resolve this problem, the administrator must install the appropriate
	Template.csv file as well as the code page for the client's language on the
	server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	
