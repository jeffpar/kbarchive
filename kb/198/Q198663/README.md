---
layout: page
title: "Q198663: BUG: Closesocket() on a Duplicated Socket Fails to Clean Up"
permalink: /kb/198/Q198663/
---

## Q198663: BUG: Closesocket() on a Duplicated Socket Fails to Clean Up

	Article: Q198663
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95,98
	Operating System(s): 
	Keyword(s): kbWinsock
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Windows 95 and Windows 98, after launching a few WinSock applications using
	the WSADuplicateSocket() function, you will no longer able to create a socket
	connection. An attempt to call connect() function fails with the following error
	message:
	
	  WSAENOBUFS
	
	CAUSE
	=====
	
	For a duplicated TCP socket on Windows 95 and Windows 98, the closesocket()
	function fails to close the connection of the duplicated socket. This can be a
	problem when you launch several (10 to 20) applications which use
	WSADuplicateSocket() to create a duplicate socket and call closesocket() to
	clean up the connection. It eventually exhausts all the socket resources. Using
	the NETSTAT -AN command shows the maximum number of sockets already in use and
	most of them are either in CLOSE_WAIT or FIN_WAIT_2 state indefinitely. At this
	point, any attempt to call connect() will fail with error WSAENOBUFS since there
	is no more socket available for a new connection.
	
	By default, Windows 95 and Windows 98 TCP/IP stack allows a maximum number of 100
	TCP sockets to open concurrently. This includes the TCP sockets in
	waiting-for-close status. The same problem exists in Windows 95 when an
	application uses the Winsock 1.1 DuplicateHandle() function. This problem does
	not occur with Windows NT since it successfully cleans up the TCP connection
	when calling closesocket() on a duplicated socket.
	
	RESOLUTION
	==========
	
	The workaround would require the child application to create a dummy TCP socket
	(just call socket (AF_INET, ,,,)) and close it at its own leisure. The other
	possibility is to close the socket that is being duplicated in the parent
	process only after child is done with it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: kbDSupport WSADuplicateSocket
	
	======================================================================
	Keywords          : kbWinsock 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95,98
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
