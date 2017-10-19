---
layout: page
title: "Q140536: PRB: &quot;TDS buffer length too large&quot; Error with SQL Server"
permalink: /kb/140/Q140536/
---

## Q140536: PRB: &quot;TDS buffer length too large&quot; Error with SQL Server

	Article: Q140536
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): kbnetwork kbvfp300 kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to a data source on a SQL Server, you may receive an
	error, which may be intermittent, that is similar to this:
	
	  [Microsoft][ODBC SQL Server Driver]TDS buffer length too large(#0)
	
	CAUSE
	=====
	
	This often shows up on workstations running Windows for Workgroups 3.11, servers
	that were originally running Windows NT 3.1 but have been upgraded to Windows NT
	3.5 or 3.51, and on systems using named pipes over Microsoft's NWLINK network
	redirector.
	
	NWLINK is Microsoft's IPX/SPX compatible network redirector. Windows NT 3.5
	introduced a new feature called Direct Hosting, where the workstation and server
	bypass the NETBIOS layer of the protocol. This allows the two to talk more
	directly, eliminates a layer of overhead, and generally speeds
	workstation/server interactions. However, when direct hosting is used with older
	versions of the redirector, communications become unreliable.
	
	RESOLUTION
	==========
	
	There are basically two resolutions, either replace the redirector or turn off
	direct hosting. It is best to update the redirector to retain the speed of
	direct hosting and to use the most recent versions of the drivers.
	
	To replace the redirector, you need to find the files that comprise it and copy
	them to the Windows\System subdirectory. The updated files are:
	
	  NDIS.386
	  NET.EXE
	  NETAPI.DLL
	  NWNBLINK.386
	  VNETSUP.386
	  VREDIR.386
	
	They can be found on the Windows NT compact disc. For Windows NT 3.5, they are
	located in \Clients\Wfw\Update. Note that these files are only for Windows for
	Workgroups 3.11.
	
	To turn off direct hosting, open the System.ini file on the Windows for
	Workgroups client, find the [network] section, and add this line:
	
	     DirectHost=off
	
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: connection VFoxWin
	
	======================================================================
	Keywords          : kbnetwork kbvfp300 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300
	Version           : WINDOWS:2.5,3.0
	Issue type        : kbprb
	
	=============================================================================
	
