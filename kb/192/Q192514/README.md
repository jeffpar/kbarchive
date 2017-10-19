---
layout: page
title: "Q192514: XFOR: DXA Appends 001 at End of Display Name in MS Mail GAL"
permalink: /kb/192/Q192514/
---

## Q192514: XFOR: DXA Appends 001 at End of Display Name in MS Mail GAL

	Article: Q192514
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The directory synchronization service (DXA) appends the characters 001 at the
	end of the user's display name when performing directory synchronization between
	Exchange Server and Microsoft Mail under the following conditions:
	
	- Deletion and creation of mailboxes with the same name occur in the same cycle
	  of the dirsync.
	
	- Delete transaction reaches the dirsync server before add transaction.
	
	
	CAUSE
	=====
	
	When the above steps are performed, the code compares the full name of the added
	user with that of the deleted one and decides that the display name needs to be
	unique. The postoffice comparison fails because the deleted user's e-mail
	address is a NULL string, and the code is not handling this condition correctly.
	As a result, 001 is appended at the end of the display name in the GAL.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: DXA
	
	  File Name   Version
	  ----------------------
	  Dxa.exe     5.5.2393.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	The problem described above is relevant only in cases where the following
	registry entry is "0":
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeDX
	  \Unique Display Names
	
	For more information about this registry entry, see the following article in the
	Microsoft Knowledge Base:
	
	  Q166545 XFOR: Exchange 5.0 DXA Appends 001 Only When Needed
	
	This article states that when the Unique Display Names registry entry is 0, 001
	is not appended if NETWORK/PO is different, even when a user with the address
	type of MsMail and the same name is dirsynced. However, if dirsync is performed
	under the conditions in the SYMPTOMS section above, 001 will be appended at the
	end of the display name.
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
