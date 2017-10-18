---
layout: page
title: "Q242094: ErrMsg: Unable to Find Primary Domain Controller for This Domain"
permalink: kb/242/Q242094/
---

## Q242094: ErrMsg: Unable to Find Primary Domain Controller for This Domain

	Article: Q242094
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start Server Manager or User Manager for Domains on the primary
	domain controller (PDC), you may receive the following error message:
	
	  Unable to find primary domain controller for this domain.
	
	When this occurs, no other computer can ping the PDC by address. The IPCONFIG
	command shows no IP address bound to the network adapter. Bindings show IP and
	NWlink bound to the network adapter, but you have no network functionality.
	
	CAUSE
	=====
	
	This behavior can occur when the IP address appears not to be bound to the
	network adapter.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove and reinstall the network adapter, or replace the
	network adapter with another.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
