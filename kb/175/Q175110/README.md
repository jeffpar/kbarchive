---
layout: page
title: "Q175110: How to Change the Subdomain Name in SNA Server"
permalink: /kb/175/Q175110/
---

## Q175110: How to Change the Subdomain Name in SNA Server

{% raw %}

	Article: Q175110
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbsetup
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An SNA Server subdomain is the name given to a logical grouping of SNA servers
	and resources (in other words, link services, connections, LU's, sessions, and
	users) within a given NT domain that share the same configuration file. The
	logical grouping of SNA Server's in this manner can be used to reduce the
	administration and configuration overhead associated with managing a collection
	resouces.
	
	There may be times however, when you need to change the name of the SNA Server
	subdomain but would prefer not to go through the process of removing and
	reinstalling SNA Server. Outlined below are the steps that can be performed to
	change the name of the subdomain.
	
	MORE INFORMATION
	================
	
	The information concerning which subdomain an SNA Server belongs to is stored in
	both the registry and Snaexp.snav. Snaexp.snav contains information regarding
	the size and position of the main SNA Server Manager window, as well as which
	part of a subdomain is displayed in each multiple document interface (MDI)
	window and the size and position of the MDI windows. Therefore, several steps
	are necessary in order to complete this modification.
	
	The registry information is located at:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SNABase\Parameters\ 
	  SNADomain REG_SZ: <subdomain name>
	
	Perform the following steps on each SNA Server participating in the subdomain:
	
	1. Stop all SNA services.
	
	2. Run the Svconfig.exe utility which which is found in <snaroot>\system
	  directory.
	
	3. Change the SUBDOMAIN NAME field to the desired one.
	
	4. Apply change and click OK to exit.
	
	5. Restart the SNA services.
	
	Perform the following steps where SNA Manager has previously run:
	
	1. Delete the file SNAEXP.SNAV located in the <snaroot>\system
	  subdirectory.
	
	NOTE: This file will get recreated when SNA Manager is restarted.
	
	NOTE: For SNA clients that are configured to resolve the location of SNA Servers
	via subdomain name, an additional change will be required on the client
	workstation to reflect the new subdomain name. If this change is not made, then
	clients will not be able to locate a SNA Server and fail to create a sponsor
	connection. No chnages are required for clients that are configured to locate a
	server by name.
	
	Additional query words: snafaq
	
	======================================================================
	Keywords          : kbenv kbnetwork kbsetup 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,4.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
