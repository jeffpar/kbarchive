---
layout: page
title: "Q142010: BUG: Bad Message Appears When Promoting Domain Controllers"
permalink: /kb/142/Q142010/
---

## Q142010: BUG: Bad Message Appears When Promoting Domain Controllers

	Article: Q142010
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows NT backup domain controller is promoted to be the primary domain
	controller, the following message is displayed warning that network connections
	will be lost. This message is incorrect.
	
	  Promoting SERVERNAME to Primary may take a few minutes.
	
	  Promoting SERVERNAME will also close client connections to SERVERNAME and to
	  the current domain controller (if any). Press 'Help' for details if either
	  machine is a Remote Access server.
	
	This incorrect message is displayed before a backup domain controller is
	promoted. Connections and sessions established by ms network clients against
	domain resources in the domain are not terminated. These clients will have full
	access to existing resources and can also establish new drive/printer
	connections.
	
	RESOLUTION
	==========
	
	Microsoft network clients that do not have sessions against the domain
	controller will need to wait for the netlogon services to restart on the desired
	domain controllers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
