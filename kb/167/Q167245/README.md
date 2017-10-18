---
layout: page
title: "Q167245: List of Documentation Errors in FPNW Administrator's Guide"
permalink: kb/167/Q167245/
---

## Q167245: List of Documentation Errors in FPNW Administrator's Guide

	Article: Q167245
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists known documentation errors in the Microsoft File and Print
	Services for NetWare Administrator's Guide.
	
	The following known documentation errors are described in this article:
	
	- Page 28, Chapter 2: Logon Scripts
	
	- Page 100, Appendix A: Parameters Available but Not Installed
	
	MORE INFORMATION
	================
	
	Page 28, Chapter 2: Logon Scripts
	---------------------------------
	
	The last sentence of the third paragraph states:
	
	  You can edit the server's system login script by editing the SYSNET$.DAT
	  file, located in the SYSVOL\PUBLIC directory.
	
	This sentence should read:
	
	  You can edit the server's system login script by editing the NET$LOG.DAT
	  file, located in the SYSVOL\PUBLIC directory.
	
	Page 100, Appendix A: Parameters Available but Not Installed
	------------------------------------------------------------
	
	This section includes a description for the NTQueueDirectory parameter. If you
	enable this parameter, you receive the following error message:
	
	  Event ID: 2506
	  Value named "NTQueueDirectory" is not valid or does not exist
	
	This parameter should read QueueDirectory.
	
	Additional query words: fpnw docerr doc err doc error print queue
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	Version           : WinNT:3.51
	
	=============================================================================
	
