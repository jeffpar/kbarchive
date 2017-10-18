---
layout: page
title: "Q161733: Err Msg: Unable to Locate NWAPI32.DLL with IntranetWare Client"
permalink: kb/161/Q161733/
---

## Q161733: Err Msg: Unable to Locate NWAPI32.DLL with IntranetWare Client

	Article: Q161733
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the IntranetWare Client for Windows NT manufactured by Novell is installed on
	a computer running Windows NT Workstation 3.51 or 4.0, it replaces the Client
	Services for NetWare (CSNW) service. After installation, if Last Known Good
	Configuration is selected during the startup process, it will fail with the
	following error message:
	
	  Services.exe - unable to find or locate NWAPI32.DLL
	
	CAUSE
	=====
	
	When the Novell IntranetWare Client for Windows NT is installed, it asks if you
	want to replace the Client Services for NetWare (CSNW) service. If you select
	Yes, the IntranetWare client installation process removes CSNW and, in addition
	to making changes in the registry, deletes the following two files:
	
	  Nwapi32.dll
	  Nwc.cpl
	
	This is by design. Novell's IntranetWare Client for Windows NT is manufactured by
	Novell, a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding this product's performance or reliability.
	
	RESOLUTION
	==========
	
	If the above two files are reinstalled, the Last Known Good Configuration will
	function normally.
	
	======================================================================
	Keywords          : kbenv kbnetwork kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351
	Version           : WinNT:3.51,4.0
	
	=============================================================================
	
