---
layout: page
title: "Q128350: Configuring Network Client for Validation Across Routers"
permalink: kb/128/Q128350/
---

## Q128350: Configuring Network Client for Validation Across Routers

	Article: Q128350
	Product(s): Microsoft Windows NT
	Version(s): 3.00 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	To allow a computer running Microsoft Network Client for MS-DOS to be
	validated by a primary domain controller (PDC) across a router:
	
	1. Run Network Client for MS-DOS Setup and install TCP/IP.
	
	2. Make sure that the following entries are present in the [Network] section of
	  the SYSTEM.INI file located in the Network Client for MS-DOS subdirectory
	  (typically C:\NET):
	
	  lmlogon=1
	  logondomain=<Your domain name>
	
	3. Add the following to the LMHOSTS file in the Network Client for MS-DOS
	  subdirectory:
	
	  <IP address> <PDC NetBIOS name> #DOM:<Domain name>
	
	  NOTE: The #PRE command should not be used in the LMHOSTS file for Network
	  Client for MS-DOS. Any command following the #PRE command is ignored. For
	  example, if you add #PRE in front of #DOM:<Domain name>, #DOM:
	  <Domain name> is ignored.
	
	Additional query words: prodnt nc msclient winnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : 3.00 3.50
	
	=============================================================================
	
