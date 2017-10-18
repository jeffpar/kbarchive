---
layout: page
title: "Q166845: TN3270E Service Error 503 - Session Dropped Due to Inactivity"
permalink: kb/166/Q166845/
---

## Q166845: TN3270E Service Error 503 - Session Dropped Due to Inactivity

	Article: Q166845
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SNA Server TN3270 Server configuration includes an Idle Timeout parameter
	which causes the server to disconnect a TN3270 client session after the session
	has been inactive for the idle timeout period. The idle timeout period defaults
	to 120 minutes or 2 hours.
	
	When the Idle Timeout expires for a TN3270 client session, the TN3270 server
	drops the client's SNA session and sends the following message to the TN3270
	client to display to the user:
	
	  TN3270E Service Error 503
	  Session terminated due to inactivity.
	
	When this occurs, the TN3270 Server will also report the following event to the
	Windows NT Server Event Viewer Application log:
	
	  Event ID: 603
	  Source: TN3270 Server
	  Description:
	  TN3270(E) session with client at <client IP address and port> using
	  LU <luname> terminated abnormally because:
	
	  TN3270E Service Error 503
	  Session terminated due to inactivity
	
	NOTE: Event ID 603 can occur for a variety of reasons. Service Error 503 is a
	specific cause for an abnormal session termination caused only by the TN3270
	Server's idle timeout parameter.
	
	MORE INFORMATION
	================
	
	The TN3270 Server Idle Timeout parameter can be set from 1 minute to 1440
	minutes (or 1 day). Here are instructions for setting this parameter:
	
	- If you are using SNA Server 2.11 (or 2.11 service pack 1 or 2), run the
	  TN3270 Service Admin program and choose the &lt;Options&gt; button.
	
	- If you are using SNA Server 3.0 (or 3.0 service pack 1), run the SNA Server
	  Manager program, right-click on the TN3270 Server, choose the Properties
	  button, and choose the Settings folder.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,4.0
	
	=============================================================================
	
