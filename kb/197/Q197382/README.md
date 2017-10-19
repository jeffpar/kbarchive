---
layout: page
title: "Q197382: HOWTO: Keep Cluster Administrator from Reconnecting to a Cluster"
permalink: /kb/197/Q197382/
---

## Q197382: HOWTO: Keep Cluster Administrator from Reconnecting to a Cluster

	Article: Q197382
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbClustServ100 kbEEdition kbOSWinNT400 kbSDKPlatform
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start Cluster Administrator, the default behavior is to reconnect to
	the last cluster that Cluster Administrator was previously connected to. In
	certain circumstances, this may not be the desired action.
	
	MORE INFORMATION
	================
	
	You can use a command line switch to run Cluster Administrator without having it
	reconnect to previously connected clusters.
	
	From the command line execute one of the following commands:
	
	- cluadmin /noreconnect
	
	- cluadmin /norecon
	
	NOTE: In this case "/norecon" is an abbreviated version of "noreconnect".
	
	Cluster Administrator starts and prompts the user with the Open Connection to
	Cluster dialog box.
	
	NOTE: The dialog box shows the last cluster or server name that the Cluster
	Administrator was connected to as the first option.
	
	Additional query words: mscs admin
	
	======================================================================
	Keywords          : kbClustServ100 kbEEdition kbOSWinNT400 kbSDKPlatform 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : WINNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
