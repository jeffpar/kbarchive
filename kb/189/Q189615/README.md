---
layout: page
title: "Q189615: Incorrect Server License Setup During Reinstall"
permalink: kb/189/Q189615/
---

## Q189615: Incorrect Server License Setup During Reinstall

	Article: Q189615
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If Microsoft SNA Server must be reinstalled, client license information
	concerning the previous installation is ignored.
	
	MORE INFORMATION
	================
	
	During setup of Microsoft SNA Server 4.0, client license information must be
	selected. A choice of Per Server or Per Seat is indicated. If you select Per
	Seat, you must use the License Manager to add client licenses when Setup is
	complete.
	
	You can access License Manager through Control Panel or through the Start menu.
	
	In the event that Microsoft SNA Server is removed through the Setup program, the
	license information in License Manager is not removed. This information can be
	viewed in License Manager following the removal of Microsoft SNA Server.
	
	During any subsequent setup of Microsoft SNA Server, a dialog is presented asking
	for Per Server or Per Seat client license information. The default is Per Server
	for zero concurrent connections. Information in License Manager does not take
	precedence over the license information selected during setup.
	
	After completion of setup and configuration of Microsoft SNA Server, client
	connection attempts receive the following error message: "There are no SNA
	Servers running in your domain" [F004] [010000F0]. The Application Event Log on
	the SNA Server will log an event 597 indicating:
	
	  User limit of zero exceeded: client connection rejected
	
	The solution is to start License Manager on the SNA Server and select "Server
	Browser." Locate the SNA Server and select "Microsoft SNA Server." Double-click
	"Microsoft SNA Server" and change the licensing mode to Per Seat. The client
	license information contained in License Manager is then available to Microsoft
	SNA Server, and client access will be allowed.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	
	=============================================================================
	
