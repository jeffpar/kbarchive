---
layout: page
title: "Q170072: Host Security Update Renames SNAREG.DLL"
permalink: kb/170/Q170072/
---

## Q170072: Host Security Update Renames SNAREG.DLL

	Article: Q170072
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are currently running Host Security and recently applied Microsoft SNA
	Server, version 3.0 Service Pack 1 (SP1), you must also run the UPDATE.EXE under
	the \Hostsec directory to update these components. After a reboot, the SnaBase
	and Host Security modules will fail and display the following errors:
	
	1. When you open SNA Manager you will get an
	
	  Unable to open Domain - check event logs
	
	  error with diagonal lines across the screen.
	
	2. The Windows NT Server Event Viewer System log will show the following events
	  coming from Service Control Manager.
	
	  Event 7000
	
	  The SnaBase service failed to start due to the following error: The service
	  did not respond to the start or control request in a timely fashion.
	
	  Event 7009
	  Timeout (120000 milliseconds) waiting for service to connect.
	
	3. If you try to start the SnaBase Service you will get the following error:
	
	  SNABASE.EXE - Unable to locate DLL
	
	  The dynamic link library SNAREG.DLL could not be found in the specified
	  path <snaroot>\system\SNAREG.DLL......
	
	CAUSE
	=====
	
	A problem was found in the Host Security Update program after SNA Server 3.0 SP1
	was released. If the 3.0 SP1 Host Security Update program is run by itself, or
	is run after the SNA Server 3.0 SP1 Update program, the SNAREG.DLL file is
	renamed, causing the SnaBase and Host Security modules to fail to function upon
	reboot.
	
	RESOLUTION
	==========
	
	In order to correct this problem, Microsoft suggests one of the following:
	
	- If SNA Server is also running on the same computer as the Host Security
	  components, reapply SNA Server 3.0 SP1 by re-running the SNA Server 3.0 SP1
	  UPDATE program. This will reapply the SNAREG.DLL file.
	
	  -or-
	
	- If SNA Server is not running on this computer, locate a server running SNA
	  Server 3.0 SP1 and copy <snaroot>\system\SNAREG.DLL to the system path
	  of the computer running the Host Security service(s).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	Microsoft is researching this problem and will post more information here in the
	Microsoft Knowledge Base when it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	
	=============================================================================
	
