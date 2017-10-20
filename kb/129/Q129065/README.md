---
layout: page
title: "Q129065: PRB: Getsockname() Returns IP Address 0.0.0.0 for UDP"
permalink: /kb/129/Q129065/
---

## Q129065: PRB: Getsockname() Returns IP Address 0.0.0.0 for UDP

{% raw %}

	Article: Q129065
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.11,4.0; :3.1,3.5
	Operating System(s): 
	Keyword(s): kbnetwork kbIP kbOSWinNT310 kbOSWinNT350 kbSDKPlatform kbOSWin95 kbWinsock kbOSWin311 k
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.11, 4.0 
	- Microsoft Win32 Software Development Kit (SDK) for Windows NT, versions 3.1, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	By following the steps listed below, you might think you should get back the
	interface address over which the connection was made. However, it actually
	returns the address 0.0.0.0.
	
	1. Open a UDP socket.
	
	2. Bind it to INADDR_ANY.
	
	3. Call connect() to make a UDP connection.
	
	4. Call getsockname() on your socket.
	
	However, if it was a TCP socket, you would get back the IP address of the
	interface.
	
	CAUSE
	=====
	
	UDP
	---
	
	This is the behaviour expected from some flavors of UNIX, notably those derived
	from BSD. When an application calls connect() on a UDP socket that is bound to
	INADDR_ANY, the operating system associates the remote address with the local
	socket. This saves the programmer from having to specify the remote IP address
	in each sendto() or recvfrom(). Instead they may use send() and recv(). Note
	that this is just a convenience provided by the operating system; there is no
	network traffic associated with this call. At this point, the underlying IP
	software determines the interface over which packets will be sent. As described
	earlier, under BSD UNIX, calling getsockname() will return the IP address of the
	interface to the application.
	
	This however, is not expected behaviour under Windows NT, Windows 95, or
	Microsoft TCP IP/32 for Windows for Workgroups version 3.11. Calling
	getsockname() will return the IP address 0.0.0.0 (INADDR_ANY). Applications
	should not assume that they can get the IP address of the interface.
	
	TCP
	---
	
	The behaviour is different if it was a TCP socket. In this case, calling
	getsockname() on a connected socket that was bound to INADDR_ANY will return the
	IP address of the interface over which the connection was made. The state of the
	connection can also be observed by typing 'netstat' at a command prompt.
	
	NOTE: To enumerate all the IP addresses on an IP host, the application should
	call gethostname(), call gethostbyname(), and then iterate through the
	h_addr_list[] member of the hostent struct returned by gethostbyname() as in
	this example:
	
	     char     Hostname[100];
	     HOSTENT *pHostEnt;
	     int      nAdapter = 0;
	
	     gethostname( Hostname, sizeof( Hostname ));
	     pHostEnt = gethostbyname( Hostname );
	
	     while ( pHostEnt->h_addr_list[nAdapter] )
	     {
	        // pHostEnt->h_addr_list[nAdapter] -the current address in host order
	        nAdapter++;
	     }
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbIP kbOSWinNT310 kbOSWinNT350 kbSDKPlatform kbOSWin95 kbWinsock kbOSWin311 kbGrpDSNet 
	Technology        : kbWinNT400xsearch kbWin32SDKSearch kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32SDKNT310 kbWin32SDKNT350 kbWinSDKSearch kbWinSDK311 kbWinSDK400
	Version           : WINDOWS:3.11,4.0; :3.1,3.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
