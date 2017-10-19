---
layout: page
title: "Q110390: Automatically Starting SNA Server Through Control Panel"
permalink: /kb/110/Q110390/
---

## Q110390: Automatically Starting SNA Server Through Control Panel

	Article: Q110390
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbenv kbsna211sp1 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To automatically start SNA Server when you start your system, use the Services
	application to configure the SnaServer service startup method as Automatic.
	Also, if you are using NetView alerts and Run command, the NVAlert and NVRunCmd
	services should also be configured to start automatically.
	
	For SNA Server version 2.x, all other SNA Serve services are automatically
	started by SNA Server as needed, even though they are configured for manual
	start (this includes any SNA Server link services and SnaNetMn). In the case of
	SnaNetNm, this service displays an error message if the user attempt to start it
	through Control Panel.
	
	With SNA Server versions 3.0 and 4.0, the following services need to be setup
	through Control Panel/Services in order to start automatically: Shared Folders
	Gateway, TN3270, TN5250, SNAPrint. All other 3.0 and 4.0 services are started
	automatically.
	
	MORE INFORMATION
	================
	
	Following is a description of each SNA Server service, and how each service is
	configured to start when SNA Server is installed:
	
	SnaBase: Automatic startup. This service must be started before any other SNA
	Server service can run.
	
	NOTE: You can configure SnaBase for manual startup where the first SNA
	application to be started causes SnaBase to start automatically. However, for
	this to work, the Windows NT user must have sufficient privilege to start it
	(that is, the user's account must belong to the Administrators, Server Operator,
	or Power User group). So, it is recommended that SnaBase be left at "Automatic
	startup".
	
	SnaServer: Manual startup. This can be changed to Automatic startup if desired.
	This may also be started/stopped using the SNA Server Admin program.
	
	SNA Server link services (SnaDlc1, SnaSdlc1, and so on): Manual startup.
	
	SNA Server automatically starts the link services as needed. These services
	should NOT be configured to automatically start using Control Panel.
	Specifically, the SnaBase service starts these automatically. Also, the
	SnaServer service doesn't start unless all link services used by this server are
	running.
	
	NVAlert, NVRunCmd: Manual startup. These services can be changed to Automatic
	startup if desired. SNA Server will not automatically start these services.
	
	SnaNetMn: Manual startup. SNA Server will automatically start this service if
	NetView connectivity is configured on an SNA Server connection. This service
	should NOT be configured to automatically start using Control Panel, and fails
	with the following error message if the administrator tries to start it
	manually:
	
	  SNA Server Error #0352
	  Unable to open the configuration file, rc=618
	
	Additional services available in SNA Server versions 3.0 and later:
	
	Shared Folders Gateway: Manual startup. This service can be changed to Automatic
	startup if desired.
	
	SNA MngAgent: Manual startup. This service should not be changed to Automatic
	startup. It will be started automatically when SnaBase is started.
	
	Sna RPC Service: Manual startup. This service should not be changed to Automatic
	startup. It will be started automatically when SnaBase is started.
	
	SnaPrint: Manual startup. This service can be changed to Automatic startup if
	desired.
	
	TN3270: Manual startup. This service can be changed to Automatic startup if
	desired.
	
	TN5250: Manual startup. This service can be changed to Automatic startup if
	desired.
	
	SNA Host Account Synchronization: Manual startup. This service should not be
	configured for Automatic startup. It will be started automatically if SNA
	Server's Host Security features are installed and configured.
	
	SNA Host Account Cache: Automatic startup.
	
	SNA WinNT Account Synchronization: Automatic startup.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbenv kbsna211sp1 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	
