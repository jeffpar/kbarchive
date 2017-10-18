---
layout: page
title: "Q164892: SNA Manager Shows Incorrect Status For Resources In Subdomain"
permalink: kb/164/Q164892/
---

## Q164892: SNA Manager Shows Incorrect Status For Resources In Subdomain

	Article: Q164892
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	A computer running Microsoft SNA Server that is configured to use only TCP/IP as
	the protocol for Server Broadcasts may not resume sending these broadcasts after
	a network outage. If the SNA Server computer stops sending/receiving broadcasts,
	the SNA Server Manager will not display an accurate status for SNA resources in
	the subdomain.
	
	
	CAUSE
	=====
	
	When using TCP/IP, SNA Server 3.0 systems keep track of the other SNA Servers in
	the subdomain by adding them to the following registry entry:
	
	  HKEY_LOCAL_MACHINE
	     \SYSTEM
	        \CurrentControlSet
	           \Services
	              \SnaBase
	                 \Parameters
	                    \SnaTcp
	                       \LocalHosts:
	                          <snaserver1>:REG_MULTI_SZ: <ip address>
	                             <snaserver2>:REG_MULTI_SZ: <ip address>
	
	LocalHosts will contain a list of all the SNA servers in the subdomain.
	
	This problem occurs because SnaBase was removing the names in the LocalHosts
	registry entry during a network outage that lasted longer than SnaBase's timeout
	of five minutes. SnaBase did not resume the server broadcasts because there were
	no server names in the list for it to send the broadcasts to.
	
	A computer running SNA Server that is listed in the LocalHosts registry entry
	should be removed only if that SNA Server is stopped. They should not be removed
	because of a timeout condition such as a network outage.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	A workaround exists by adding the following registry entry
	
	  HKEY_LOCAL_MACHINE
	     \SYSTEM
	        \CurrentControlSet
	           \Services
	              \SnaBase
	                 \Parameters
	                    \PermanentServers: REG_MULTI_SZ: <list>
	
	where the entries in the <list> are the SNA Server Names and/or IP
	addresses listed on separate lines in the registry editor Multi-String Editor
	Data field. SnaBase will always send service table updates to the SNA Servers
	listed under this registry entry even if they are not in the SNA Server
	configuration file.
	
	The SnaBase service has been updated to prevent servers from being removed from
	the LocalHosts list due to a timeout condition.
	
	The following module has been updated:
	
	  \<snaroot>\System\Snabase.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: sockets server-to-server prodsna sna30 snabaseservice snamanager
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
