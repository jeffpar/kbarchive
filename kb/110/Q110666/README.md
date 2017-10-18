---
layout: page
title: "Q110666: Server Services Fail when Start Configuration Changed"
permalink: kb/110/Q110666/
---

## Q110666: Server Services Fail when Start Configuration Changed

	Article: Q110666
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server services are designed to run under the System account, and fail to
	run if the administrator changes any of the services to start under a user
	context.
	
	CAUSE
	=====
	
	The SNA Server setup program automatically configures all SNA Server services to
	"Log On" under the System account. This includes SnaBase, SnaServer, any SNA
	link services, SnaNetMn, NVAlert, and NVRunCmd. If any of the services are
	changed to run under a user context, they will not run.
	
	RESOLUTION
	==========
	
	In the Control Panel window, choose the Services icon, and then choose the
	Startup button and make sure all SNA Server services are configured to start
	under the System account.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	Microsoft is researching this problem and will post more information here in the
	Microsoft Knowledge Base when it becomes available.
	
	MORE INFORMATION
	================
	
	The following are the errors that may occur if these services were configured to
	start in any account OTHER than the System account:
	
	SnaServer Service
	-----------------
	
	- 
	
	  SNATRC.DLL failed to initialize.
	
	- The Windows NT application event log will include:
	
	  
	
	 Event 650, SNA Server, Warning, ConnectNmPipe returned error rc=1
	 Event 121, SNA Server, Error, Fatal error occurred, product ID=00,
	      error code = 0001
	 Event 589, SNA Server, Warning, Failed to display popup, rc=0.
	      A Create process call for the popup process failed. The return
	      code is shown.
	 Event 624, SNA Server, Warning, Creating dump file
	      C:\SNA\traces\snadump.log for SNASERVR.EXE
	 Event 4005, perfctrs, Error, Load of a required DLL failed. Make sure
	      the DLL file is in the PATH. DOS Error number is returned in the
	      data (7e).
	
	- SNA Server Admin will show the server service as "Stopping."
	
	- If started through Control Panel, Control Panel displays:
	
	  Could not start SnaServer service on <machine> Error 2140: An internal
	  Windows NT error occurred
	
	- If started from the command line:
	
	  SnaServer service could not be started.
	
	SnaBase Service
	---------------
	
	- 
	
	  SNATRC.DLL failed to initialize.
	
	- The Windows NT application event log will include:
	
	    Event 650, SNA Server, Warning, ConnectNmPipe returned error rc=1
	
	- If started from the command line:
	
	  SnaBase service could not be started.
	
	Additional query words: prodsna SNATRC.DLL 650 121
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
