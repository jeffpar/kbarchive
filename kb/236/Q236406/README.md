---
layout: page
title: "Q236406: BUG: Accept Socket No Inherit Notification from Listening Socket"
permalink: kb/236/Q236406/
---

## Q236406: BUG: Accept Socket No Inherit Notification from Listening Socket

	Article: Q236406
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95,98,98 Second Edition
	Operating System(s): 
	Keyword(s): kbnetwork kbOSWin95 kbOSWin98 kbWinsock kbDSupport
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a 16-Bit Windows process on Windows 98 application, the listening socket is
	registered for asynchronous notifications using the WSAAsyncSelect() function,
	see the following code sample:
	
	  WSAAsyncSelect(hListenSocket, hWind, WM_SOCKET, 
	                 FD_ACCEPT | FD_WRITE | FD_READ | FD_CLOSE).
	
	The listening socket receives the FD_ACCEPT notification and accepts the
	connection using the accept() function. The socket returned by the accept()
	function does not receive the FD_WRITE, FD_READ or the FD_CLOSE notifications.
	These properties of the listening socket are not transferred to the accepted
	socket. Therefore, the listening socket will not receive any further
	notifications.
	
	RESOLUTION
	==========
	
	You will need to call WSAAsyncSelect again on the accepted socket with the
	required notification.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Accepted sockets don't inherit notifications registered for the listening socket
	in a 16-bit applications on Windows 95 computers that have the Winsock2 upgrade
	installed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbOSWin95 kbOSWin98 kbWinsock kbDSupport 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95,98,98 Second Edition
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
