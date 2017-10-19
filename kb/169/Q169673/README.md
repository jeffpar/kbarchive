---
layout: page
title: "Q169673: XADM: Remote Procedure Call Fails When Generating Offline AB"
permalink: /kb/169/Q169673/
---

## Q169673: XADM: Remote Procedure Call Fails When Generating Offline AB

	Article: Q169673
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.00
	Operating System(s): 
	Keyword(s): kbnetwork kbusage
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Administrator program is generating the Offline Address Book (OAB), the
	Administrator program displays the following message:
	
	  The Remote Procedure call failed.
	
	In addition, MAD stops running on the server on which the Administrator program
	is running when generating the OAB. As a result, you are not able to generate an
	OAB on the global address list (GAL) or specific containers.
	
	CAUSE
	=====
	
	The directory of the computer running Microsoft Exchange Server version 5.0 or
	earlier has exceeded the limit of different Distinguished Names (DNs) in one
	container that can be added to an Offline Address Book (OAB).
	
	An array holding parent DNs and used within the OAB generation process, was
	limited to a fixed size (1,000 entries). If the container from which the OAB was
	being generated held more than 1,000 unique parent DNs, the OAB generation
	process would assert, causing the above symptoms and OAB generation failure.
	
	WORKAROUND
	==========
	
	The Offline Address Book can be generated on a container that contains a smaller
	number of unique DNs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	This problem has been corrected in the latest U.S. Service pack for Microsoft
	Exchange Server version 4.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server version 4.0 will generate an event ID 5004 containing
	the following text:
	
	  Generation of the Offline Address Book is complete. Results: The MAPI
	  call failed.
	  80004005.
	
	Microsoft Exchange Server version 5.0 will generate an event ID 5012 containing
	the following text:
	
	  Failed to generate offline address book for container: /. Results: An
	  unexpected, unknown error occurred. 8004010b.
	
	After the initial failure in version 5.0, you will receive a message box with the
	message:
	
	  There are no more endpoints available from the endpoint mapper.
	
	This occurs when the Administrator program attempts to contact the System
	Attendant and it is no longer available.
	======================================================================
	Keywords          : kbnetwork kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
