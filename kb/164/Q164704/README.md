---
layout: page
title: "Q164704: Password Change DLL Fails if First Host Account Cache Offline"
permalink: kb/164/Q164704/
---

## Q164704: Password Change DLL Fails if First Host Account Cache Offline

	Article: Q164704
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The password change DLL, a component installed on Windows NT primary domain
	controllers (PDCs) as part of the Windows NT account synchronization option of
	SNA Server host security setup, may fail to initialize when the PDC is rebooted.
	When the initialization failure occurs, it will log an error indicating that it
	cannot locate the password management service (SnaPMP, the SNA Windows NT
	account synchronization service). This will happen if the SNA host account cache
	running in only one of the resource domains is offline or unreachable even
	though host account cache services in other domains are reachable at the time.
	
	CAUSE
	=====
	
	Although host security setup for Windows NT account synchronization prompts the
	user for multiple domains that contain a host account cache, the password change
	DLL tries to initialize with only the first of the configured domain names. The
	password change DLL needs to find the host account cache to locate the primary
	Windows NT account synchronization service (SnaPMP), which may be running in
	another Windows NT Server domain.
	
	RESOLUTION
	==========
	
	The password change DLL has been enhanced to search all specified domains. The
	list of domains is specified in the following registry key where the Windows NT
	account synchronization option of host security is installed:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SNAPmp\Parameters
	  MdbDomains: REG_MULTI_SZ: <domain1> <domain2> ...
	
	The following file has been changed:
	
	  \<snaroot>\Snapwchg.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna snahostsec
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
