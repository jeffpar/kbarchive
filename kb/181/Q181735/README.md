---
layout: page
title: "Q181735: Adding a Link Service to a Remote SNA Server"
permalink: /kb/181/Q181735/
---

## Q181735: Adding a Link Service to a Remote SNA Server

	Article: Q181735
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to add a link service to a remote SNA Server computer if the
	following are true:
	
	- The user trying to add the link service has Administrator permissions when
	  accessing the remote SNA Subdomain.
	
	- The SNA RPC Service is running on the remote server.
	
	MORE INFORMATION
	================
	
	Link services can be added remotely from one SNA Server computer to another, or
	from a Windows NT Workstation computer running SNA Server Manager. When you try
	to add a link service from a "local" SNA Server computer or Windows NT
	Workstation computer with Manager installed, if the Local User ID does not have
	the correct administrator privileges to add the link service on the "remote" SNA
	Server, the following error message will appear:
	
	  SnaOle
	  You do not have the privileges necessary to lock the config file.
	
	As documented in the README.DOC included on the SNA 4.0 Service Pack 1 CD:
	
	Configuration File Security
	
	Users who have been granted any type of write permission for an SNA Server
	configuration file, but are not a part of the Administrators group, must also be
	granted Manage Audit and Security Log privileges on the local Windows NT machine
	and in the Windows NT domain. Users will not be able to save the configuration
	file unless this privilege is granted.
	
	
	If the "remote" SNA Server computer does not have the SNA Remote Procedure Call
	(RPC) Service running when the "local" system is trying to add a link service,
	the "local" system receives the following error message:
	
	  Failure Returned from RPC Client DLL
	
	In addition to this RPC error, the "local" client posts an Event 5500 coming from
	the SNA RPC Service in the application log of the event viewer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0,4.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
