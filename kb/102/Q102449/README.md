---
layout: page
title: "Q102449: NetWkstaGetInfo Documented Incorrectly in Programmer's Ref"
permalink: kb/102/Q102449/
---

## Q102449: NetWkstaGetInfo Documented Incorrectly in Programmer's Ref

	Article: Q102449
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	The LAN Manager API NetWkstaGetInfo is documented incorrectly on
	pages 661 and 665 of the "LAN Manager Programmer's Reference."
	
	The documentation for NetWkstaGetInfo states that the return
	parameter wkiX_logon_server (X = 0 or 1) is not supported for MS-DOS
	workstations, when in fact it is supported for enhanced workstations.
	
	It does not, however, function correctly under Windows for Workgroups
	using either real mode or the virtual redirector. Both of these
	redirectors return a NULL for the wkiX_logon_server (X = 0 or 1). The
	NULL indicates that the user was not validated by a server. This is
	expected, because the WfW logon validation is performed through the
	password list on the local machine. The option to logon to a LAN
	Manager server does not make a difference.
	
	Additional query words: wfw wfwg 2.10 2.1 2.10a 2.1a 2.20 2.2 api
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
