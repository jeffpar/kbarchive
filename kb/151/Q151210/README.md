---
layout: page
title: "Q151210: Q&amp;A: Types Of Socket Applications Supported By Microsoft"
permalink: kb/151/Q151210/
---

## Q151210: Q&amp;A: Types Of Socket Applications Supported By Microsoft

	Article: Q151210
	Product(s): Microsoft Windows NT
	Version(s): 3.11b,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft LAN Manager 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11b 
	- Microsoft Windows for Workgroups 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains questions and answers regarding the different types of
	socket application supported by MS-DOS and the Microsoft Windows operating
	system.
	
	MORE INFORMATION
	================
	
	What is a socket application?
	
	A socket interface was first provided with Berkeley UNIX (BSD) in the eighties.
	It was designed as a network interprocess communication (IPC) mechanism for the
	built-in TCP/IP. A socket defines a bi-directional end point for combination
	between processes.
	
	A socket has three primary components:
	
	  The interface to which it is bound
	  The port number to which it will send or receive data
	  The type of socket--either stream or datagram
	
	In TCP/IP, the interface is the IP address of the host. The port number is the
	software process address. In IPX/SPX, the interface is the combination of the
	IPX network ID and the MAC address of the network interface. The port number is
	the software process address (IPX socket number).
	
	A server application listens on a well-known port over all installed network
	interfaces. A client generally initiates communication from a specific interface
	from any available port.
	
	What is Windows Sockets?
	
	The Windows Socket (WinSock) specification defines a network programming
	interface for Microsoft Windows that is based on the Socket interface
	popularized in Berkeley Unix. The WinSock API is a library of functions that
	implement the Windows Socket specification. WinSock augments the Berkeley socket
	implementation by adding Windows-specific extensions to support the
	message-driven nature of Windows operating systems.
	
	There are a few other proprietary windows socket APIs (WSOCKETS, and WIN_SOCK).
	For more information see the following article in the Microsoft Knowledge Base:
	
	Q98599Differences Among WIN_SOCK.DLL, WSOCKETS.DLL, and WINSOCK.DLL
	
	These are not encouraged APIs and do NOT implement the Windows Sockets API
	standard.
	
	What is WINSOCK.DLL?
	
	WINSOCK.DLL is a dynamic-link library (DLL) that provides Windows Sockets version
	1.1 API for TCP/IP Windows Socket applications. WINSOCK.DLL is offered in
	current version of all Microsoft TCP/IP stacks:
	
	  MS-DOS TCP/IP for Lanman 2.2C
	  MS-DOS TCP/IP for Microsoft Network 3.0 Clients
	  Microsoft TCP/IP for Windows for Workgroups
	  Microsoft TCP/IP-32 for Windows for Workgroups
	  Microsoft TCP/IP for Windows NT 3.5x
	  Microsoft TCP/IP for Windows 95
	
	For additional information about Microsoft TCP/IP protocol comparison, see the
	following article in the Microsoft Knowledge Base:
	
	Q94069Microsoft TCP/IP Protocol Comparison and FAQ
	
	What version of the WinSock specification does WINSOCK.DLL comply with?
	
	Microsoft WINSOCK.DLL complies with Windows Socket Specification version 1.1.
	Support for previous versions of the Sockets specification is not provided.
	WINSOCK.DLL does not provide support for Raw Sockets(SOCK_RAW), DOS Sockets, or
	vendor-specific implementations.
	
	For instruction about downloading the WinSock specification from Microsoft, see
	the following article in the Microsoft Knowledge base:
	
	Q85965Microsoft Socket API Specification version
	
	What is WSOCK32.DLL?
	
	WSOCK32.DLL is a dynamic-link library (DLL) that provides Windows Sockets API for
	32-bit TCP/IP Windows Socket applications and 32-bit IPX/SPX Windows Socket
	Applications. WSOCK32.DLL is offered in Windows NT and 95.
	
	Can Microsoft WINSOCK.DLL be used with third-party TCP/IP stacks?
	
	No. WINSOCK.DLL and WSOCK32.DLL will be provided by the vendor providing the
	TCP/IP stack. The DLL and the protocol stack implementation cannot be mixed and
	matched with other TCP/IP and DLL implementations. For example, you cannot use
	WINSOCK.DLL provided by Microsoft with FTP's TCP/IP stack or vice versa.
	
	What type of Socket applications are supported by MS-DOS TCP/IP stacks?
	
	MS-DOS TCP/IP for Lanman 2.2c and Microsoft Network Clients 3.0 support DOS
	Socket application and WinSock 1.1 application. Sockets.exe in MS-DOS TCP/IP is
	a terminate-and-stay-resident (TSR) program; it allows MS-DOS socket
	applications to run if they've been written with the Microsoft TCP/IP Sockets
	Development Kit Version 1.0, using the DOS Socket Library (DOS_SOCK.LIB)
	available in the Development Kit. WSOCKETS.DLL is provided in Lanman 2.2 SDK to
	make Windows calls look as they do in MS-DOS.
	
	While the 16-bit MS-DOS TCP SDK is still available (through Microsoft Developer
	Support), it is no longer supported by Microsoft and is not guaranteed to work.
	The user accepts full responsibility regarding the use of the SDK.
	
	The SOCKETS.EXE and WSOCKETS.DLL do NOT implement the Windows Sockets API
	standard.
	
	In order for a Windows Socket application to function with MS-DOS TCP/IP,
	SOCKETS.EXE must be loaded before Windows startup and WINSOCK.DLL must exist in
	the application search path.
	
	Is it possible to run a 32-bit Windows Socket application with Windows 3.x?
	
	Yes. Win32s 1.1 contains a thunking layer that converts 32-bit Windows Sockets
	calls (using WSOCK32.DLL) to 16-bit Windows Sockets calls (using WINSOCK.DLL).
	
	Does a Windows Sockets application work over any protocols other than TCP/IP?
	
	Yes. In Windows NT and 95, sockets support is also extended to IPX/SPX. Both
	16-bit and 32-bit IPX/SPX Windows sockets are supported over NWLINK in Windows
	NT and 95.
	
	Does MS Network Client 3.0 support MS-DOS/Windows IPX/SPX Socket applications?
	
	No. MS-DOS/Windows IPX/SPX Socket applications running in a Virtual machine of
	Windows 95 can be interfaced with NWLINK via WSOCK.VXD. WSOCK.VXD supports
	16-bit Windows Sockets application over 32-bit TCP/IP and IPX/SPX Windows
	Socket.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbTCPIPSearch kbLanManSearch kbWFWSearch kbZNotKeyword3 kbTCPIP311b
	Version           : :3.11b,3.5,3.51
	
	=============================================================================
	
