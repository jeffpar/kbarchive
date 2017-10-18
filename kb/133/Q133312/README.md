---
layout: page
title: "Q133312: SNA Server Win 3.x APPC/CPIC Apps Hang Using Blocking Hook"
permalink: kb/133/Q133312/
---

## Q133312: SNA Server Win 3.x APPC/CPIC Apps Hang Using Blocking Hook

	Article: Q133312
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the SNA Server Windows 3.x client WinAPPCSetBlockingHook() or
	WinCPICSetBlockingHook() calls from a Windows 3.x application, the blocking hook
	function must call PeekMessage, or the Windows 3.x application will hang.
	
	The SNA Server Windows 3.x CPIC and APPC API interfaces rely on the use of
	Windows messages to process an API call on behalf of the calling application. If
	the application registers it's own blocking hook function that blocks the
	reception of Windows messages, the calling application will hang.
	
	MORE INFORMATION
	================
	
	The SNA Server Windows 3.x APPC and CPIC interfaces have a default mechanism by
	which blocking functions are implemented. This function gives the application
	the ability to execute it's own function at blocking time in place of the
	default function.
	
	The default blocking function, documented in the SNA Server APPC and CPIC API
	references (under WinCPICSetBlockingHook and WinAPPCSetBlockingHook) is
	equivalent to:
	
	     BOOL DefaultBlockingHook ( void ) {
	        MSG msg;
	        /*  get the next message if any */ 
	        if ( PeekMessage ( &msg, NULL, 0, 0, PM_NOREMOVE) ) {
	           if ( msg.message = WM_QUIT )
	              return FALSE;   // let app process WM_QUIT
	           PeekMessage ( &msg, NULL, 0, 0, PM_REMOVE) ;
	           TranslateMessage (&msg) ;
	           DispatchMessage (&msg) ;
	       }
	       /* TRUE if no WM_QUIT received */ 
	       return TRUE;
	     }
	
	NOTE: The SNA Server 2.1 APPC and CPIC API references incorrectly omit the second
	parameter on the PeekMessage call above (the NULL parameter).
	
	The NULL (window handle) is critical here in order for the underlying SNA client
	software to receive and process the Windows messages necessary to support the
	API calls being made.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbprogramming sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	
