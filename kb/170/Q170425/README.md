---
layout: page
title: "Q170425: SNA 3.0 NT Client Setup Sets LanmanServer Dependency in Error"
permalink: kb/170/Q170425/
---

## Q170425: SNA 3.0 NT Client Setup Sets LanmanServer Dependency in Error

	Article: Q170425
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When installing the SNA Server 3.0 (or 3.0 SP1 refresh) Windows NT client
	software, the setup program incorrectly configures SnaBase to be dependent on
	the Windows NT server service (the LanmanServer service).
	
	While the SNA Server Windows NT client software is dependent on the Windows NT
	Workstation service (LanmanWorkstation) and Windows NT security provider
	(NtLmSsp), there is no need for the Windows NT Server service to be running on
	an SNA Server Windows NT client machine.
	
	CAUSE
	=====
	
	This problem was inadvertently introduced in the SNA Server 3.0 Windows NT
	client setup program. This problem did not exist when installing the SNA Server
	2.x Windows NT client software.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To work around this problem, the DependOnService registry key on the SNA Server
	3.0 Windows NT client machine should be updated as follows, using REGEDT32.
	After initial client installation, the setup program sets the registry entry as
	follows:
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/SnaBase/ 
	  DependOnService: REG_MULTI_SZ: LanmanWorkstation LanmanServer NtLmSsp
	
	Edit the key so it appears as follows, removing the LanmanServer entry:
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/SnaBase/ 
	  DependOnService: REG_MULTI_SZ: LanmanWorkstation NtLmSsp
	
	NOTE: In the multi-string editor within REGEDT32, entries must appear on separate
	lines.
	
	This problem will be corrected in future versions of the SNA Server Windows NT
	client setup program
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and 3.0
	SP1. This problem was corrected in the latest SNA Server for Windows NT 3.0 U.S.
	Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
