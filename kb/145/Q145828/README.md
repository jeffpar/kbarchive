---
layout: page
title: "Q145828: Duplicate Server Names Cause Event Log 537 with FPNW Installed"
permalink: /kb/145/Q145828/
---

## Q145828: Duplicate Server Names Cause Event Log 537 with FPNW Installed

	Article: Q145828
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On your computer running Windows NT and the File and Print Services for NetWare
	(FPNW) service, the following event appears in the security event log:
	
	  Event ID: 537
	  Description:
	  unexpected error occurred during logon.
	
	CAUSE
	=====
	
	There is a Windows NT server with the same name as the Windows NT FPNW server
	service name on your network. This FPNW service name must be different than the
	regular Windows NT server name.
	
	RESOLUTION
	==========
	
	In the FPNW Server Name field, type a new name that is unique on your network.
	The new name does not take effect until you stop and restart the FPNW service.
	
	The FPNW Server Name is the name that NetWare client computers use to refer to
	the server.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
