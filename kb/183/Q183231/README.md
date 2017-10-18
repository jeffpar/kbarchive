---
layout: page
title: "Q183231: NetWare Login Scripts Fail When Using CSNW Remotely"
permalink: kb/183/Q183231/
---

## Q183231: NetWare Login Scripts Fail When Using CSNW Remotely

	Article: Q183231
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you use either Client Service for NetWare (CSNW) or Gateway Service for
	NetWare (GSNW) on your computer running Windows NT, and you connect to your
	network using Remote Access Service (RAS), your NetWare login scripts may fail
	to map drives.
	
	CAUSE
	=====
	
	Windows NT attempts to run login scripts immediately after the proper logon
	credentials for the workstation are entered and provides no opportunity to dial
	out for a RAS connection.
	
	RESOLUTION
	==========
	
	To resolve this issue, perform the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	If you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe).
	
	2. Go to the following subkey:
	
	  HKey_Local_Mmachine\Software\Microsoft\Windows NT\CurrentVersion
	  \Winlogon
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Click KeepRasConnections, and from the Edit menu, click String and change the
	  value data to 1.
	
	4. Close Registry Editor and restart your computer.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge base:
	
	  ARTICLE-ID: Q158909
	  TITLE : How to Keep RAS Connections Active After Logging Off
	
	5. Dial your RAS server and log on to your network.
	
	6. Click the Start button, point to Settings, click Control Panel, and then
	  double-click CSNW.
	
	7. Click Preferred Server and from the drop-down list, select the NetWare server
	  that contains the appropriate login script.
	
	8. Under Login Script Options, select Run login script, and then click OK.
	
	9. With the RAS connection maintained, click the Start button, click Shut Down,
	  click Close all programs and log on as another user, and then click OK.
	
	10. Log on to your computer running Windows NT using the credentials (user ID
	  and password) required to log on to the RAS server.
	
	11. After you log on, your NetWare login script from the preferred server will
	  run and the appropriate mappings can be observed in Network Neighborhood.
	
	NOTE: There is no dial-up icon on the task bar when you log on as another user
	even though the modem indicates a connection is being maintained. Once this is
	configured, all that is required to setup future connections to this Netware
	server is dial and connect with the RAS credentials.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
