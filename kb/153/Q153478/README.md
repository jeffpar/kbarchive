---
layout: page
title: "Q153478: Unexpected Errors 0x89ff and 0x88ff with FPNW"
permalink: kb/153/Q153478/
---

## Q153478: Unexpected Errors 0x89ff and 0x88ff with FPNW

	Article: Q153478
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the client utilities provided with File and Print Services
	for NetWare (FPNW) from an FPNW server without Gateway Services for NetWare
	(GSNW) installed, you will receive the following errors:
	
	- When running MAP:
	  Unexpected error 0x89ff during GetDriveStatus
	
	- When running CAPTURE:
	  Unexpected error 0x89ff during PSJobGetDefault
	
	- When running SLIST:
	  Unexpected error 0x89ff during ScanBinderyObject
	
	- When running LOGIN:
	  Unexpected error 0x88ff during GetFileServerName
	
	CAUSE
	=====
	
	FPNW provides these utilities for NetWare client compatibility. FPNW alone
	provides NetWare Core Protocol (NCP) server services. GSNW is required for NCP
	client services.
	
	RESOLUTION
	==========
	
	Install GSNW on the FPNW server.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbServicesNetwareSearch kbFPNW351
	Version           : 3.50 3.51
	
	=============================================================================
	
