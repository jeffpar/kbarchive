---
layout: page
title: "Q111068: Configuring RAS Callback Time Parameters"
permalink: kb/111/Q111068/
---

## Q111068: Configuring RAS Callback Time Parameters

	Article: Q111068
	Product(s): Microsoft Programming Utilities
	Version(s): 1.0,1.1,1.1a,1.x,3.1,3.11,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Remote Access Service, versions 1.0, 1.1, 1.1a, used with:
	   - Microsoft LAN Manager, version 1.x 
	- Microsoft Windows NT Server versions 3.1, 3.5 
	- Microsoft Windows NT Workstation versions 3.1, 3.5 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Callback Time is the time interval that a Remote Access Service (RAS) server
	waits before it calls back a client when the Callback feature is enabled. This
	article describes how Callback Time works and when to use the "CALLBACKTIME="
	and "CallBackTime:" parameters in various RAS versions.
	
	This information supplements the "Administrator's Guide for Microsoft LAN Manager
	Remote Access" version 1.0 and 1.1 regarding the CALLBACK feature and
	supplements page 57 of the Windows NT version 3.1 "Remote Access Service" manual
	regarding the CallBackTime parameter.
	
	MORE INFORMATION
	================
	
	LAN Manager RAS 1.0 and 1.1 Server
	----------------------------------
	
	LAN Manager RAS 1.x servers use the parameter, CALLBACKTIME= to define Callback
	Time. Callback Time is dictated by the server regardless of any parameter that
	may be defined at the client.
	
	LAN Manager RAS 1.0 and 1.1 Client
	----------------------------------
	
	RAS 1.x clients do not have an individual Callback Time parameter and do not
	provide the server with a Callback Time. Thus, they depend on the server to
	define Callback Time.
	
	Windows NT version 3.1 and 3.5 RAS Server
	-----------------------------------------
	
	Windows NT servers use the CallBackTime: registry parameter to define the default
	Callback Time for any RAS client that does not provide an individual Callback
	Time to the server (RAS 1.x clients must use this default).
	
	Windows RAS Client and Windows for Workgroups 3.11 RAS Client
	-------------------------------------------------------------
	
	Windows for Workgroups 3.11 RAS clients and Windows NT 3.1 and 3.5 RAS clients
	have a CALLBACKTIME= entry in the MODEM.INF file that determines the individual
	client's Callback Time. The client communicates this to the Windows NT RAS
	server during initial authentication. The Windows NT RAS server CallBackTime:
	registry value is ignored when the RAS client supplies a callback time. Clients
	connecting to RAS 1.x servers are not able to communicate their individual
	Callback Times and must accept the server's default.
	
	NOTE: On a Windows NT RAS client there are two Callback Time parameters; the
	CALLBACKTIME= entry in MODEM.INF, which applies to the client function of RAS
	and the CallBackTime: registry parameter, which applies to the server function
	of RAS. Therefore, when a Windows NT RAS client connects to Windows NT RAS
	server, it is the client's CALLBACKTIME= entry in MODEM.INF that determines the
	Callback Time, not the CallBackTime: registry entry.
	
	How Windows for Workgroups 3.11 and Windows NT Callback Time Works
	------------------------------------------------------------------
	
	After the RAS client hangs up the line, it sends an AutoAnswer command to the
	modem within approximately one half of the specified Callback Time. To allow the
	client modem sufficient time to switch to AutoAnswer mode and receive the call,
	the Windows NT RAS server waits for the full Callback Time before it attempts to
	call back.
	
	Do Not Set Windows For Workgroups 3.11 CALLBACKTIME= Value Larger Than 170
	--------------------------------------------------------------------------
	
	Windows for Workgroups 3.11 RAS clients with Callback Time values greater than
	170 seconds do not wait long enough for the server to call back. The client
	times out with the following error message:
	
	  Error 638: The request has timed out.
	
	However, this is an unusually long Callback Time and there should not be any need
	to set the value that high.
	
	The Windows for Workgroups 3.11 RAS client times out because its callback
	algorithm sets the modem to AutoAnswer mode after approximately one half
	Callback Time and then only waits for about another 85 seconds for the server to
	call back. So, when the Callback Time is set very large, for example, 200
	seconds, the client waits for 100 + 85 seconds before it times out, but the
	server won't call until 200 seconds have past.
	
	Additional query words: wfw wfwg prodnt 1.0 1.1 3.11 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbRASSearch
	Version           : :1.0,1.1,1.1a,1.x,3.1,3.11,3.5
	
	=============================================================================
	
