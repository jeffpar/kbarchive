---
layout: page
title: "Q137237: Default Logon Script Timeout Limits for MS Network Clients"
permalink: kb/137/Q137237/
---

## Q137237: Default Logon Script Timeout Limits for MS Network Clients

	Article: Q137237
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2.2b,2.2c,3.0,3.1,3.11,3.5,3.51,95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows 95 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft LAN Manager, versions 2.2b, 2.2c 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run a LAN Manager logon script on a client computer, you encounter a
	logon script timeout limit. The logon script timeout limit varies among
	different client computers. This article lists the different logon script
	timeout limit for each Microsoft network client operating system.
	
	MORE INFORMATION
	================
	
	The default timeout limits for processing a LAN Manager logon script are as
	follows for the respective client network operating systems:
	
	- Windows NT Workstation 3.1, 3.5 and 3.51, Windows 95, Windows for Workgroups
	  3.11 and Network Client for MS-DOS 3.0 do not have logon script timeout
	  limit.
	
	- Windows for Workgroups 3.1 allows approximately 30 seconds.
	
	  Please note that the following article in the Microsoft Knowledge Base is
	  incorrect, and therefore will be removed as soon as possible:
	
	  Q90422 WFWG Err Msg: Application Has Violated System Integrity
	
	- LAN Manager 2.2b client computers allow 30 seconds.
	
	- LAN Manager 2.2c client computers allow 30 seconds. This value can be set
	  between 1 and 32,000 seconds. To change the default timeout limit, add the
	  following to the LANMAN.INI file:
	
	        [windows]
	        logontimeout=<Between 1 to 32,000 seconds>
	
	Additional query words: prodlm 2.20 3.10 3.11 wfw wfwg lm winnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWin95search kbWinNT310Search kbWinNTW310Search kbZNotKeyword kbLanManSearch kbWFWSearch kbZNotKeyword3 kbNetworkClientSearch kbWFW310 kbWFW311 kbLanMan220b kbLanMan220c kbNetworkClient300DOS
	Version           : :2.2b,2.2c,3.0,3.1,3.11,3.5,3.51,95
	
	=============================================================================
	
