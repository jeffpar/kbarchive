---
layout: page
title: "Q186818: RPC Server Unavailable When Joining a Domain with NETDOM"
permalink: /kb/186/Q186818/
---

## Q186818: RPC Server Unavailable When Joining a Domain with NETDOM

	Article: Q186818
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Window NT 4.0 Resource Kit Supplement III includes a command line utility
	called NETDOM (v 1.7) that allows the administrator to join a domain from a
	command prompt.
	
	The command line can be run locally on the workstation or also remotely. The
	following error message may appear when NETDOM tries to query domain information
	on the workstation remotely:
	
	  The RPC server is unavailable.
	
	CAUSE
	=====
	
	This error is caused because the administrator of the domain does not have
	administrative access on the workstation (recall that the passwords are
	different).
	
	The following scenario leads to the problem:
	
	1. The domain is DOMAIN and the PDC is DOMAINPDC.
	
	2. Install a Windows NT Workstation as \\DOMAINMEMBER in a workgroup.
	
	3. Make sure the workstation administrator account password and domain
	  administrator account passwords are different.
	
	4. On the PDC, log on as the administrator and send the following command line:
	
	  NETDOM /DOMAIN:DOMAIN MEMBER \\DOMAINMEMBER /JOINDOMAIN
	
	  The output is as follows:
	
	  Searching PDC for domain DOMAIN ...
	  Found PDC \\DOMAINPDC
	  Querying domain information on PDC \\DOMAINPDC ...
	  Querying domain information on computer \\DOMAINMEMBER ...
	  The RPC Server is unavailable.
	
	RESOLUTION
	==========
	
	Use one of the following workarounds:
	
	- Before giving the NETDOM command, connect to the workstation with
	  administrative access:
	
	  NET USE \\DOMAINMEMBER\IPC$ /USER:DOMAINMEMBER\ADMINISTRATOR password
	
	- Run NETDOM locally (that is, on the workstation).
	
	
	MORE INFORMATION
	================
	
	For more information about NETDOM, please see the following Microsoft Knowledge
	Base article:
	
	  ARTICLE ID: Q150493
	  TITLE : How To Join a Domain From the Command Line
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
