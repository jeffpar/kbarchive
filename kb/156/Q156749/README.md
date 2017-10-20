---
layout: page
title: "Q156749: WSAAsyncGetHostByName() Returns IP Address in Reverse Order"
permalink: /kb/156/Q156749/
---

## Q156749: WSAAsyncGetHostByName() Returns IP Address in Reverse Order

{% raw %}

	Article: Q156749
	Product(s): Microsoft Windows NT
	Version(s): MS-DOS:3.0; :2.2c
	Operating System(s): 
	Keyword(s): kbnetwork msnets
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft LAN Manager, version 2.2c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Winsock Applications that issue a WSAAsyncGetHostByName() against MS real mode
	TCP/IP Winsock.dll receive IP address in reverse order
	
	A Winsock application such as Internet Explorer 2.01 or Netscape 2.02 running on
	Windows 3.1 with MS real mode TCP/IP stack will fail to connect a remote host
	when the application issues a WSAAsyncGetHostByName() to resolve the remote host
	name to IP address. For example, WSAAsyncGetHostByName() will return
	"99.88.77.66" if the remote host IP address is "66.77.88.99".
	
	CAUSE
	=====
	
	The Winsock.dll, distributed with real mode TCP/IP for LAN Manager and MS
	Network Client, improperly formats the IP address.
	
	WORKAROUND
	==========
	
	To work around the problem, try to use GetHostByName() instead of the
	WSAAsyncGetHostByName() call.
	
	A work around for Internet Explorer is to put Use_Async_DNS=no in the [Services]
	section of Iexplore.ini. This forces the Net_MultiGetHostByName_Async (w32net.c)
	to call WS_GETHOSTBYNAME instead of WS_WSAASYNCGETHOSTBYNAME.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Network Client
	3.0 and Lan Manager 2.2c.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork msnets 
	Technology        : kbAudDeveloper kbZNotKeyword kbLanManSearch kbNetworkClientSearch kbLanMan220c kbNetworkClient300DOS
	Version           : MS-DOS:3.0; :2.2c
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
