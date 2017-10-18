---
layout: page
title: "Q122871: Unable to Bind Network Services to Protocols"
permalink: kb/122/Q122871/
---

## Q122871: Unable to Bind Network Services to Protocols

	Article: Q122871
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Network Services are not available options on the Bindings sheet of network
	protocol properties. For example, when you click the Bindings tab in the
	properties for Microsoft NetBEUI protocol, there is no option for file and print
	sharing for Microsoft Networks (VSERVER). Or, when you click the Bindings tab in
	the properties for IPX/SPX-compatible protocol for Windows, there is no option
	for file and print sharing for NetWare Networks (NWSERVER).
	
	CAUSE
	=====
	
	In Windows 95, Network Services are dependent on, and bind to, the network
	redirector, not a protocol. This is necessary to enable the Plug and Play
	features of Windows 95.
	
	RESOLUTION
	==========
	
	To run Network Services on a network protocol, bind the protocol to the Network
	client that you want to use.
	
	Additional query words: vserver nwserver server w95cn
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	
	=============================================================================
	
