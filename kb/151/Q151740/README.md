---
layout: page
title: "Q151740: Network Client 3.0 Logon Fails On Token Ring"
permalink: /kb/151/Q151740/
---

## Q151740: Network Client 3.0 Logon Fails On Token Ring

{% raw %}

	Article: Q151740
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Network Client 3.0 for MS-DOS is configured to use NWLink (IPX) only on a
	token-ring network, user logons may not be validated by the Windows NT domain.
	When you attempt NET LOGON, the following message appears:
	
	  You were logged on, but have not been validated by a server.
	  Therefore, you may not have permission to use some network
	  resources.
	
	Other network functionality is not affected.
	
	CAUSE
	=====
	
	Windows NT 3.51 servers enable source routing by default. The network client
	does not. Without source routing, when the client requests logon validation, the
	server responds, but the client ignores the server response.
	
	RESOLUTION
	==========
	
	To enable source-routing on the client, add the following entry to the
	[MS$NWLINK] section of the protocol.ini file: Source_Routing=16. The section for
	an IBM 16/4 ISA token-ring network interface card (NIC) is:
	
	  [MS$NWLINK]
	  FRAME=TOKENRING
	  DriverName=nwlink$
	  BINDINGS=MS$IBMTR4
	  Source_Routing=16
	
	Additional query words: source routing token ring nwlink logon
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
