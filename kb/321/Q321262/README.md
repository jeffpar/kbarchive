---
layout: page
title: "Q321262: How to Upgrade Previous Versions of SNA Server to HIS 2000"
permalink: /kb/321/Q321262/
---

## Q321262: How to Upgrade Previous Versions of SNA Server to HIS 2000

	Article: Q321262
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the proper order by which to upgrade SNA Server (primary,
	backup, and member SNA Server computers) version 3.0 (all service packs) and
	version 4.0 (all service packs) to Host Integration Server 2000.
	
	Before you start the upgrade, note the following:
	
	- Setup upgrades SNA Server versions 3.0 or later (including clients). It does
	  not upgrade versions of SNA Server earlier than 3.0, nor does it upgrade
	  components that have been installed in directories other than the default SNA
	  directory.
	
	- Microsoft recommends that you make a backup copy of the primary's SNA Server
	  configuration file (Com.cfg).
	
	- The primary Host Integration Server computer is the last server upgraded.
	
	
	MORE INFORMATION
	================
	
	You can upgrade any version of SNA Server 3.0 or later to Host Integration
	Server 2000 without removing the existing version. When you upgrade an SNA
	Server subdomain to a Host Integration Server subdomain, follow these steps (in
	the order presented):
	
	1. Upgrade any member SNA Server computers.
	
	2. Upgrade any backup SNA Server computers.
	
	3. Upgrade the primary SNA Server computer.
	
	NOTE:
	
	- In Host Integration Server 2000, the member server role has been removed. Any
	  member SNA Servers will become backup Host Integration Server 2000 servers.
	
	- Host Integration Server 2000 now requires a service account for the Host
	  Integration Server 2000 services to run under. You cannot install Host
	  Integration Server 2000 in the Local System Account as in previous versions
	  of SNA Server.
	
	After the configurations are verified, the Host Integration Server 2000 Manager
	can be used to administer the subdomain, and Host Integration Server 2000
	release-specific features can be configured.
	
	For special case upgrade information (such as SNA Remote Access Services [SNARAS]
	and DB2 packages), see the Host Integration Server 2000 README.doc file.
	
	Mixing SNA Server 3.0 or SNA Server 4.0 with Host Integration Server 2000 in the Same Subdomain
	-----------------------------------------------------------------------------------------------
	
	If you cannot upgrade all SNA Server computers to Host Integration Server 2000 at
	the same time, you will be running in a mixed subdomain mode. Therefore, you
	must manage the servers from the oldest primary SNA Server computer. This is
	because you do not want the configuration file (Com.cfg) updated (or saved) to
	the Host Integration Server 2000 installation, because the SNA Server systems
	cannot read it. If you use a mixed subdomain environment, note the following:
	
	- Do not save an SNA Server configuration file (Com.cfg) by using SNA Manager
	  from a Host Integration Server 2000 Server or Admin client. If you save the
	  configuration file in mixed environments, this may cause configuration
	  corruption.
	
	- When you view the connection and LU status, they may be listed as Inactive,
	  even though the actual status is Active.
	
	- TN3270 user status information may not appear.
	
	- If multiple SNA Services are configured on a server, the SNA Server 3.0 or
	  SNA Server 4.0 Manager may display the Microsoft Windows NT or Microsoft
	  Windows 2000 computer name for each instance. For example, if Host
	  Integration Server 2000 is installed on a computer whose name is "SNA1", and
	  two SNA Services are configured, the SNA Server 3.0 or SNA Server 4.0 Manager
	  may display two SNA Services named "SNA1" and "SNA1".
	
	Any features that are new to Host Integration Server are not available until the
	whole SNA Server 3.0 or SNA Server 4.0 subdomain is running Host Integration
	Server and the configuration file has been upgraded.
	
	NOTE: Microsoft does not support the use of SNA Server 3.0 or SNA Server 4.0
	Manager to administer a Host Integration Server 2000 subdomain.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbhowto
	
	=============================================================================
	
