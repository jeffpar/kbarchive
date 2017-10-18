---
layout: page
title: "Q138481: Win95 LUA/RUI Application Hangs with Named Pipes"
permalink: kb/138/Q138481/
---

## Q138481: Win95 LUA/RUI Application Hangs with Named Pipes

	Article: Q138481
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When running an LUA/RUI application on Windows 95 using the Windows 95 SNA
	Client, the application may hang.
	
	For instance, if your program contains only the following code:
	
	     main()
	
	     {
	        int rc;
	
	        sync_event = CreateEvent(0,0,0,0);
	        lua_attach();
	        lua_init();
	        rc=pWinRUICleanup();
	        printf( "RUI CLEANUP() %d\n", rc );
	        return(0);
	     }
	
	The application never processes the return(0) statement to exit the program until
	you either kill the application thru the Windows 95 task list or stop the link
	service in SNA Server Admin. The printf statement executes. This only occurs
	when running Named Pipes for the client interface. If you are using TCP/IP or
	SPX sockets the program exits correctly. This error does not occur on Microsoft
	Windows NT.
	
	CAUSE
	=====
	
	RUI_kill_session is passing an invalid locality to sbpddrop().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	2.11. A fix to this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments. Microsoft
	does not recommend implementing this fix at this time. Contact Microsoft Product
	Support Services for more information on the availability of this fix.
	
	
	Additional query words: prodsna 2.00 2.10 2.11 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	
	=============================================================================
	
