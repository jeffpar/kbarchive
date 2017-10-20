---
layout: page
title: "Q142024: How to Configure the Windows NT RPC Name Service Provider"
permalink: /kb/142/Q142024/
---

## Q142024: How to Configure the Windows NT RPC Name Service Provider

{% raw %}

	Article: Q142024
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an RPC server application starts, it exports its characteristics to a
	name-service provider. By default, Microsoft Locator is the default name-
	service provider. The Microsoft RPC interoperates with any name-service provider
	that follows the Microsoft RPC name-service interface (NSI) specification. For
	example, the DCE Cell Directory Service is accessed through the DEC NSID. Any
	RPC client that needs to access the RPC Server application can use the name
	service provider to locate the server.
	
	MORE INFORMATION
	================
	
	If you want to change the default Windows NT Name Service Provider to another
	provider, follow these steps:
	
	1. In Control Panel Network, select the RPC Name Service Provider and choose
	  Configure.
	
	2. In the RPC Configuration dialog box, select the DCE Cell Directory Service.
	
	3. For Network Address, enter the address of the NSI daemon (NSID) and choose
	  OK. The NSID computer is a gateway for the DCE Cell Directory Service. It
	  passes name service interface function calls between a Microsoft network
	  operating system and a DCE computer. A network address can consist up to 80
	  characters. For example, 11.1.9.169 is a valid network address.
	
	  NOTE: The Windows NT Locator does not require a Network Address.
	
	Digital Equipment Corporation's (DEC) DCE DCS product is required to configure
	the DCE CDS as your name service provider. For more information, refer to DCE
	CDS documentation available from DEC.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
