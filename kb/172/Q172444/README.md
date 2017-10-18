---
layout: page
title: "Q172444: FPNW Generates Many Event ID 2024s"
permalink: kb/172/Q172444/
---

## Q172444: FPNW Generates Many Event ID 2024s

	Article: Q172444
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	File and Print Service for NetWare (FPNW) logs many Event ID 2024s.
	
	  Event ID 2024, Source FPNWSrv:
	  The client at address below was not logged in and attempted to open
	  <volumename>.
	
	where <volumename> is a NetWare-compatible volume defined on the FPNW
	server.
	
	CAUSE
	=====
	
	This can occur when any application or process is trying to access an FPNW
	volume on the network but is only attached to the FPNW server, not logged on to
	the server.
	
	RESOLUTION
	==========
	
	Ensure that the user is logged on to the FPNW server before trying to access any
	FPNW volumes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351 kbFPNW400
	Version           : :3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
