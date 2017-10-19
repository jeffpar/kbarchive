---
layout: page
title: "Q182605: XCLN: Multinational Client Cannot View User's Properties"
permalink: /kb/182/Q182605/
---

## Q182605: XCLN: Multinational Client Cannot View User's Properties

	Article: Q182605
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
	
	If you use a multinational client against an English (US) server, you may
	receive an error message. The error message is displayed in the foreign language
	of the client, and may differ slightly in the translation.
	
	If you try to view the properties of a user in the global address list, the
	following error message is displayed:
	
	  It wasn't possible to show the properties of the dialog box. The Microsoft
	  Exchange Server isn't configured to support detailed models in your language
	  [language]. Consult your system administrator.
	
	CAUSE
	=====
	
	The server is not properly set up with the necessary client information.
	
	RESOLUTION
	==========
	
	To resolve this problem, you must install the appropriate Template.csv file, as
	well as the code page for the client's language. For additional information,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q150977 XADM: Supporting Localized Exchange Clients
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	
