---
layout: page
title: "Q193486: Differences Between Windows 95 and Windows NT SNA Clients"
permalink: kb/193/Q193486/
---

## Q193486: Differences Between Windows 95 and Windows NT SNA Clients

	Article: Q193486
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT and Windows 95 SNA Server clients are both 32-bit clients that
	may be used on workstations running Windows NT. In some cases it may be
	preferable to run the Windows 95 SNA Server client instead of the Windows NT SNA
	Server client, depending on the functionality users need.
	
	MORE INFORMATION
	================
	
	With the Windows NT SNA Server client, SnaBase runs as a service. By default,
	the SnaBase service is configured to be started automatically by the system.
	However, if the service fails for any reason, the user must have administrative
	rights to start it manually. In some cases, network administrators do not want
	to give users these rights. In these cases, the user can install the Windows 95
	client instead, so SnaBase runs as an application rather than a service.
	
	Other reasons you may choose to use the Windows 95 client are listed below:
	
	- The Windows 95 client takes less hard disk space than the Windows NT client.
	
	- The Windows 95 client consumes less RAM than the Windows NT client.
	
	- The Web setup is available only for the Windows 95 client.
	
	- The Windows 95 client can be installed on both Windows 95/98 and Windows NT
	  workstations.
	
	- A user must have administrative rights to install the Windows NT client.
	  There are no special rights required to install the Windows 95 client.
	
	The features listed below are available in the Windows NT client but not provided
	with the Windows 95 client. If any of these features are needed, the Windows NT
	client should be installed.
	
	- The ability to administer SNA Server from the client computer.
	
	- NetView services.
	
	- COMTI functionality.
	
	- The ability to autostart an invokable transaction program written as a
	  Windows NT service (rather than a Win32 application).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
