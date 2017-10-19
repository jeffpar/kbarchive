---
layout: page
title: "Q165206: Installing FPNW on a Standalone Windows NT Server"
permalink: /kb/165/Q165206/
---

## Q165206: Installing FPNW on a Standalone Windows NT Server

	Article: Q165206
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	File and Print Services for NetWare (FPNW) may be installed on Windows NT
	standalone (non-domain controller) servers for access by NetWare-compatible
	users.
	
	For NetWare-compatible users to be able to gain access to domain resources, the
	following rules apply:
	
	- If the standalone server is a domain member server, FPNW authenticates users
	  from the local account database or the domain account database.
	
	- If the standalone server is not a domain member server (otherwise a workgroup
	  member), NetWare-compatible user accounts will not be able to use the domain
	  account database for authentication. Those users will not be granted access
	  to the FPNW server unless their account is in the local user accounts
	  database of the standalone server.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q126436
	  TITLE : Q&A: The Role of a Windows NT Server in a Domain
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351 kbFPNW400
	Version           : WinNT:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
