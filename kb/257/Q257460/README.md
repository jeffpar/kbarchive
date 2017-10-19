---
layout: page
title: "Q257460: INFO: IPPROTO_IP Level Socket Options - Header and Library Files"
permalink: /kb/257/Q257460/
---

## Q257460: INFO: IPPROTO_IP Level Socket Options - Header and Library Files

	Article: Q257460
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:95,98,98 Second Edition; winnt:3.51,4.0; :
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbOSWinNT351 kbOSWin2000 kbSDKPlatform kbSDKWin32 kbOSWin95 kbOSWin98 k
	Last Modified: 12-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Platform Software Development Kit (SDK) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When setting or getting socket options at the IPPROTO_IP level in a C/C++
	Winsock application targeted for Windows NT, Windows 2000, Windows 95, or
	Windows 98, including the correct header and library file in the program project
	is critical. If the header and library files are not properly matched,
	setsockopt or getsockopt may fail with runtime error 10042 (WSAENOPROTOOPT). In
	certain cases, even if the API returns successfully, the option value that you
	set or get may not be what you would have expected.
	
	To avoid this problem, observe the following guidelines:
	
	- A program that includes Winsock.h should only link with Wsock32.lib.
	
	- A program that includes Ws2tcpip.h may link with either Ws2_32.lib or
	  Wsock32.lib. Note that Ws2tcpip.h must be explicitly included after
	  Winsock2.h in order to use socket options at this level.
	
	MORE INFORMATION
	================
	
	The IPPROTO_IP level socket options are defined differently in Winsock.h than in
	Ws2tcpip.h. In Winsock.h, the definitions are the following:
	
	  /*
	   * Options for use with [gs]etsockopt at the IP level.
	   */ 
	  #define IP_OPTIONS          1           /* set/get IP per-packet options    */ 
	  #define IP_MULTICAST_IF     2           /* set/get IP multicast interface   */ 
	  #define IP_MULTICAST_TTL    3           /* set/get IP multicast timetolive  */ 
	  #define IP_MULTICAST_LOOP   4           /* set/get IP multicast loopback    */ 
	  #define IP_ADD_MEMBERSHIP   5           /* add  an IP group membership      */ 
	  #define IP_DROP_MEMBERSHIP  6           /* drop an IP group membership      */ 
	  #define IP_TTL              7           /* set/get IP Time To Live          */ 
	  #define IP_TOS              8           /* set/get IP Type Of Service       */ 
	  #define IP_DONTFRAGMENT     9           /* set/get IP Don't Fragment flag   */ 
	
	  #define IP_DEFAULT_MULTICAST_TTL   1    /* normally limit m'casts to 1 hop  */ 
	  #define IP_DEFAULT_MULTICAST_LOOP  1    /* normally hear sends if a member  */ 
	  #define IP_MAX_MEMBERSHIPS         20   /* per socket; must fit in one mbuf */ 
	
	In contrast, the options at this level are defined in Ws2tcpip.h as:
	
	  /* Option to use with [gs]etsockopt at the IPPROTO_IP level */ 
	
	  #define	IP_OPTIONS		1 /* set/get IP options */ 
	  #define	IP_HDRINCL		2 /* header is included with data */ 
	  #define	IP_TOS			3 /* IP type of service and preced*/ 
	  #define	IP_TTL			4 /* IP time to live */ 
	  #define	IP_MULTICAST_IF		9 /* set/get IP multicast i/f  */ 
	  #define	IP_MULTICAST_TTL       10 /* set/get IP multicast ttl */ 
	  #define	IP_MULTICAST_LOOP      11 /*set/get IP multicast loopback */ 
	  #define	IP_ADD_MEMBERSHIP      12 /* add an IP group membership */ 
	  #define	IP_DROP_MEMBERSHIP     13/* drop an IP group membership */ 
	  #define IP_DONTFRAGMENT     14 /* don't fragment IP datagrams */ 
	
	If you do not correctly match the header and library files, setsockopt or
	getsockopt may fail with runtime error 10042 (WSAENOPROTOOPT) or the option
	value you set or get may not be as you would have expected.
	
	Case 1. Runtime Error 10042 (WSAENOPROTOOPT):
	
	Options that fall into this category include:
	
	  IP_ADD_MEMBERSHIP
	  IP_DROP_MEMBERSHIP
	  IP_TTL
	  IP_TOS
	
	Assume that you intend to join a multicast group by running code similar to the
	following:
	
	  #include <stdio.h>
	  #include <stdlib.h>
	  #include <winsock.h>
	
	  int main(int argc, char* argv[])
	  {
	     ...
	     ...
	     ...
	     if (setsockopt(sock, 
	                    IPPROTO_IP, 
	                    IP_ADD_MEMBERSHIP, 
	                    (char FAR *)&mreq, 
	                    sizeof (mreq)) == SOCKET_ERROR)
	     {
	        printf ("setsockopt failed: %d"), WSAGetLastError());
	        closesocket (sock);
	        return FALSE;
	     }
	     ...
	     ...
	     ...
	  }
	
	Note that this includes Winsock.h. If the project is linked with Ws2_32.lib,
	setsockopt will fail with runtime error 10042 (WSAENOPROTOOPT). This is because
	in Winsock.h, IP_ADD_MEMBERSHIP is defined as "5". The corresponding Winsock
	runtime can not resolve option 5 at the IPPROTO_IP level, so the failure occurs
	with error code 10042.
	
	Case 2. Options Set or Get Appear Do Not Take Effect:
	
	Options that fall into this category include:
	
	  IP_MULTICAST_IF
	  IP_MULTICAST_TTL
	  IP_MULTICAST_LOOP
	  IP_DONTFRAGMENT
	
	Take IP_MULTICAST_TTL as an example. In Winsock.h, IP_MULTICAST_TTL is defined as
	"3". In ws2tcpip.h, the constant is defined as "10" and IP_TOS is defined as
	"3". Try to change the default TTL value:
	
	  #include <stdio.h>
	  #include <stdlib.h>
	  #include <winsock.h>
	
	  int main(int argc, char* argv[])
	  {
	     int ttl = 7 ; // Arbitrary TTL value.
	     ...
	     ...
	     ...
	     source_sin.sin_family = AF_INET;
	     source_sin.sin_port = htons(0);    
	     source_sin.sin_addr.s_addr = htonl (INADDR_ANY);
	
	     if (bind(sock, 
	              (struct sockaddr FAR *)&source_sin, 
	              sizeof(source_sin)) == SOCKET_ERROR) 
	     {
	        printf ("bind() failed: %d"), WSAGetLastError());
	        closesocket (sock);
	        return FALSE;
	     }
	
	     if (setsockopt(sock,
	                    IPPROTO_IP,
	                    IP_MULTICAST_TTL,
	                    (char *)&ttl,
	                    sizeof(ttl))) == SOCKET_ERROR)
	     {
	        printf ("setsockopt failed: %d"), WSAGetLastError());
	        closesocket (sock);
	        return FALSE;
	     }
	     ...
	     ...
	     ...
	  }
	
	If you link the project with Ws2_32.lib and run the application, setsockopt with
	IP_MULTICAST_TTL will succeed. However, the multicast TTL setting will not take
	effect. If you examine the network trace, you see that the TTL value still
	remains as "1" (the default).
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q124876 INFO: Sockets Applications on Microsoft Windows Platforms
	
	  Q138268 BUG: Winsock Sends IP Packets with TTL 0
	
	  Q131978 HOWTO: Receive/Send Multicasts Under WinNT/Win95 Using WinSock
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbOSWinNT351 kbOSWin2000 kbSDKPlatform kbSDKWin32 kbOSWin95 kbOSWin98 kbWinsock kbDSupport kbGrpDSNet 
	Technology        : kbWin32SDKSearch kbAudDeveloper kbSDKSearch kbSDKPlatformSearch
	Version           : WINDOWS:95,98,98 Second Edition; winnt:3.51,4.0; :
	Issue type        : kbinfo
	
	=============================================================================
	
