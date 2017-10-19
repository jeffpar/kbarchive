---
layout: page
title: "Q186711: Back Level SNA Manager May Save Com.cfg Incorrectly"
permalink: /kb/186/Q186711/
---

## Q186711: Back Level SNA Manager May Save Com.cfg Incorrectly

	Article: Q186711
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Several new features have been added to SNA Server that have resulted in changes
	to the SNA Server's configuration file (Com.cfg). One such addition is multi-SAP
	support that allows the selection of the Local and Remote SAP from the
	connection. Back-level clients are not aware of this change and may overwrite
	the information stored in the Com.cfg file that represents this information.
	Connection problems may not be evident until the server is restarted or the SNA
	Server service is cycled.
	
	MORE INFORMATION
	================
	
	When you use SNA Manager to administer an SNA Server subdomain, care should be
	taken to ensure all SNA Servers and SNA WinNT clients that make and save changes
	to the configuration file (Com.cfg), are running a service pack at least equal
	to the service pack level installed on the Primary SNA Server of that subdomain.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
