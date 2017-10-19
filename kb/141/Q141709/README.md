---
layout: page
title: "Q141709: Limit of 49 Named Pipe Connections from a Single Workstation"
permalink: /kb/141/Q141709/
---

## Q141709: Limit of 49 Named Pipe Connections from a Single Workstation

	Article: Q141709
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A named pipe server application running on a Windows NT Server creates a large
	number (for example, 100) of separate, distinct named pipes (for example,
	\\pipe\pipe001, \\pipe\pipe002, etc.).
	
	A named pipe client application then tries to connect to all of the named pipes
	created by the server application.
	
	If the named pipe client is running on the same computer as the named pipe
	server, the client can successfully simultaneously connect to all the named
	pipes created by the server application. However, if the named pipe client is
	running on a Windows NT Workstation, the client can connect to only 49 of the
	server's named pipes across the network.
	
	CAUSE
	=====
	
	This limit on the number of network connections to named pipes from a single
	client is imposed by the MaxMpxCt registry value for the LanmanServer service on
	the Windows NT Server.
	
	MORE INFORMATION
	================
	
	The MaxMpxCt Registry value is described as follows in the Windows NT Resource
	Kit Registry Help file:
	
	Registry path:
	
	HKEY_LOCAL_MACHINE\SYSTEM
	  \CurrentControlSet
	     \Services
	        \LanmanServer
	           \Parameters
	
	MaxMpxCt     REG_DWORD
	
	Range:  1 to 100 requests
	Default: 50
	
	Provides a suggested maximum to clients for the number of simultaneous requests
	outstanding to this server. A higher value can increase server performance but
	requires higher use of server work items.
	
	RESOLUTION
	==========
	
	Either increase the server's MaxMpxCt registry value, or redesign the
	client/server application to use fewer named pipes. Redesigning the
	client/server application is recommended, because this minimizes server resource
	usage and results in a much more scaleable solution.
	
	Additional query words: 3.50 3.5 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search
	Version           : WINDOWS:2000; winnt:3.5,3.51,4.0
	
	=============================================================================
	
