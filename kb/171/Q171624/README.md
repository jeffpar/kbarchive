---
layout: page
title: "Q171624: Win16 SNA App May Hang Over SNA Win 3.x TCP/IP Sockets Interface"
permalink: /kb/171/Q171624/
---

## Q171624: Win16 SNA App May Hang Over SNA Win 3.x TCP/IP Sockets Interface

{% raw %}

	Article: Q171624
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11 SP1;2.11 SP2,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A 16-bit Windows application which uses the APPC, CPIC, or LUA interfaces may
	hang when running over the SNA Server Windows 3.x client TCP/IP sockets
	interface. This problem can occur on either WFW/Windows 3.x or Windows 95. This
	problem may only occur when the client is configured for TCP/IP sockets. The
	application may work correctly when the SNA Server Windows 3.x client is
	configured to use named pipes or Netware ipx/spx.
	
	There are two main scenarios where this has been observed:
	
	1. If the 16-bit application isn't "peeking" on messages to all windows handles.
	
	2. If the Windows SNA startup call is made from a different windows process than
	  the SNA API calls are made from.
	
	These scenarios are described in more detail below.
	
	NOTE: When running on Windows NT, a 16-bit Windows application that uses the
	APPC, CPIC, or LUA interfaces can run over the SNA Server Windows NT client
	software, through the 16-to-32-bit SNA "thunking" DLL's. By using these thunking
	DLL's on the SNA Server Windows NT client software, the problems described in
	this article do not occur.
	
	MORE INFORMATION
	================
	
	Normally, a 16-bit Windows application which uses the SNA Server Windows 3.x SNA
	API's should function properly regardless of the LAN interface used by the
	underlying SNA Windows 3.x client software. However, the application may
	encounter problems when running over the SNA client when configured for TCP/IP
	sockets because the underlying architecture of the socket interface has special
	requirements for the 16-bit Windows calling application.
	
	If a 16-bit Windows application fails to work on top of the SNA Windows client
	TCP/IP sockets interface, here are the possible causes.
	
	1. If the 16-bit application isn't "peeking" on messages to all Window handles.
	
	  Unlike named pipes and Netware IPX/SPX, the Windows 3.x TCP/IP socket
	  interface runs within the non-preemptive Windows architecture, underneath the
	  calling application. When the SNA Windows 3.x client makes calls to named
	  pipes or Netware IPX/SPX, which run outside of Windows, the network i/o is
	  accomplished with no requirements of the 16-bit Windows application.
	
	  However, when the SNA Windows 3.x client is configured for TCP/IP sockets, the
	  16-bit Windows application must "peek" on messages intended for any Windows
	  handle, in order for the underlying SNA client software to receive data from
	  the TCP/IP sockets interface.
	
	  So, in order for the Windows application to work over TCP/IP sockets, the
	  application's Windows message loop should be architected as follows:
	
	        /*  get the next message if any */ 
	        if ( PeekMessage ( &msg, NULL, 0, 0, PM_NOREMOVE) ) {
	           if ( msg.message = WM_QUIT )
	              return FALSE;   // let app process WM_QUIT
	           PeekMessage ( &msg, NULL, 0, 0, PM_REMOVE) ;
	           TranslateMessage (&msg) ;
	           DispatchMessage (&msg) ;
	       }
	
	  The second parameter passed to PeekMessage(), the Window handle (hWnd), must
	  be NULL in order for the underlying TCP/IP sockets interface to receive
	  messages on behalf of the application.
	
	
	  NOTE: If an API communication layer is being developed (for example, an
	  ODBC/DRDA driver), the developer may not have control over the architecture
	  of the calling application. If this is occurring, then the following strategy
	  can be used to function over TCP/IP sockets:
	
	   - When SNA client is running over Winsock it makes a hidden window with
	     class name "SNA Winsock". For the other transports, it's "SNA Server".
	
	   - During initialization of the API communication layer, call EnumWindows and
	     find one whose class starts with "SNA ".
	
	   - Establish an SNA blocking hook which dispatches messages only for this
	     window.
	
	   - Call OpenFile (IF_EXIST) on WINSOCK.DLL. If it exists, call
	
	     If not, do not call LoadLibrary since this will put a dialog on the screen
	     if it can't find the DLL.
	
	   - Call GetProcAddress for WSAStartup and WSASetBlockingHook, and set a
	     Winsock blocking hook that doesn't dispatch any messages.
	
	
	2. If the Windows SNA startup call is made from a different windows process than
	  the SNA API calls are made from.
	
	  If a Windows application calls the APPC, CPIC or LUA interface, the
	  application should first call WinAPPCStartup, WinCPICStartup, or
	  WinRUIStartup/WinSLIStartup respectively. This startup call should be
	  performed when the Windows process first initializes, before initiating a
	  session over the SNA interface.
	
	  A hang has been observed if a Windows 3.x application calls WinAPPCStartup
	  from one Windows process, and then calls the APPC interface from another
	  Windows process. Later versions of the SNA Windows 3.x client software (3.0
	  and later) now allow a Windows 3.x application to invoke an APPC conversation
	  without first calling WinAPPCStartup. However, the application should still
	  call WinAPPCStartup. If an application calls WinAPPCStartup from one process,
	  and then calls APPC functions from another process, the application may hang
	  if TCP/IP sockets is being used.
	
	  To correct this problem, the WinAPPCStartup call should be moved to the
	  process which is actually using the APPC interface, or the WinAPPCStartup and
	  WinAPPCCleanup calls should be removed from the Windows application.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:2.0,2.1,2.11 SP1;2.11 SP2,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
