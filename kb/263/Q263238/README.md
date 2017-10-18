---
layout: page
title: "Q263238: XFOR: Lotus Notes Connector May Not Work If ID File Has Password"
permalink: kb/263/Q263238/
---

## Q263238: XFOR: Lotus Notes Connector May Not Work If ID File Has Password

	Article: Q263238
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 16-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following list are symptoms that you might see if you have assigned a
	password to the ID file for the Microsoft Exchange Connector for Lotus Notes:
	
	- There is no mail flow over the Exchange Notes Connector, and the sender
	  generates a non-delivery report (NDR).
	
	- Directory Synchronization is not successful.
	
	- When you view the status of the Exchange Notes Connector processes, which is
	  in the Process Manager of the Microsoft Connectivity Administrator, Convert
	  Exchange to Notes (LME-NOTES-MEXNTS) and Convert Notes to Exchange
	  (LME-NOTES-NTSMEX) show a "clock" symbol instead of a green icon, which
	  indicates a status of "started."
	
	The Current Activity field for these processes states that they are logging into
	the Notes Mail queue.
	
	CAUSE
	=====
	
	The Exchange Notes Connector has no place in which to specify a password for the
	Notes ID file that is associated with the connector.
	
	RESOLUTION
	==========
	
	Removing the password from the Notes ID should resolve the problem. To remove
	the password, you can use either of these methods:
	
	- Create a new ID file, and then set the appropriate permissions.
	
	- Re-certify the Notes ID with a blank password. For more information, see the
	  documentation accompanying the Notes server software.
	
	MORE INFORMATION
	================
	
	In Microsoft Exchange 2000 Server, you can specify a password for the Connector
	ID, and so it is not required to have a Connector ID without a password.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
