---
layout: page
title: "Q129974: BUG: Winsock--Lost FD_WRITE Notifications"
permalink: /kb/129/Q129974/
---

## Q129974: BUG: Winsock--Lost FD_WRITE Notifications

{% raw %}

	Article: Q129974
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbOSWin310bug kbWinsock kbGrpDSNet
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In both of the following situations, the initial FD_WRITE notifications are
	never received:
	
	- Create a datagram socket and call WSAAsyncSelect() with interest in FD_WRITE
	  notification.
	
	  -or-
	
	- Create a stream socket, call connect() to connect to a TCP server and call
	  WSAAsyncSelect() with interest in FD_WRITE notification.
	
	RESOLUTION
	==========
	
	In the first case, call the bind() function in addition to the socket() function
	as shown:
	
	     SOCKADDR_IN source_sin;
	
	     source_sin.sin_family = AF_INET;
	     source_sin.sin_addr.s_addr = htonl(INADDR_ANY);
	     source_sin.sin_port = htons(0);
	
	     s = socket(AF_INET, SOCK_DGRAM, 0);
	     bind(s, (struct sockaddr FAR *)&source_sin,sizeof(source_sin));
	     WSAAsyncSelect(s, hWnd, WSA_WRITE, FD_WRITE);
	
	The window specified by hWnd in WSAAsyncSelect() will now receive the FD_WRITE
	notifications properly.
	
	In second case, call socket() and call connect() asynchronously as shown:
	
	     SOCKADDR_IN dest_sin;
	
	     dest_sin.sin_family = AF_INET;
	     dest_sin.sin_addr.s_addr = htonl(SERV_HOST_ADDR);
	     dest_sin.sin_port = htons(SERVER_TCP_PORT);
	
	     s = socket(AF_INET, SOCK_STREAM, 0);
	     WSAAsyncSelect(s, hWnd, WSA_WRITE, FD_CONNECT | FD_WRITE);
	     connect(s, (struct sockaddr FAR *)&dest_sin, sizeof(dest_sin);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. We are researching this bug and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If a datagram client is not expecting to receive a response from a server, it
	can send data without first binding the datagram socket to a specific port.
	According to this behavior, a datagram socket should be able to receive FD_WRITE
	notifications after calling socket() and WSAAsyncSelect().
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbOSWin310bug kbWinsock kbGrpDSNet 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
