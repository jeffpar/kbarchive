---
layout: page
title: "Q146188: XCLN: Use Network Security Option Not Working as Expected"
permalink: /kb/146/Q146188/
---

## Q146188: XCLN: Use Network Security Option Not Working as Expected

	Article: Q146188
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange client Use Network Security During Logon check box does
	not always function as expected. This option might not allow a user to access
	another user's mailbox even though the proper Windows NT credentials for the
	other mailbox were typed. When this occurs, the user will receive the following
	error message:
	
	  The set of folders could not be opened.
	  You do not have permission to log on.
	
	In addition, the user may be prompted to type Windows NT credentials even though
	they have selected Use Network Security During when logging on.
	
	MORE INFORMATION
	================
	
	When named pipes is listed first in the binding order and the profile is set to
	not use network security during logon, the Microsoft Exchange client will prompt
	the user for Windows NT credentials. However, it will not use them to actually
	connect to the Microsoft Exchange Server and the user will be denied access. If
	TCP/IP is listed first in the binding order, the Microsoft Exchange client will
	always ask for the Windows NT domain credentials regardless of the setting for
	Use Network Security During logon. In this case, the typed in Windows NT domain
	credentials will be used and the user will be allowed access.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q161866 XCLN: Stopping Windows 3.x Clients from Prompting for a Domain
	
	
	STATUS
	======
	
	This is by design. If the user connects over raw IP or IPX there is no current
	authenticated session and thus the user is prompted for NT credentials. These
	credentials are then passed in on the RPC calls. The user is only prompted for
	NT credentials when there are no authenticated session already active. If the
	user is using Named Pipes, they are already running within the context of an
	authenticated session and thus will never be prompted for their NT credentials.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbOutlook2000Search kbOutlook98Search kbZNotKeyword3
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
