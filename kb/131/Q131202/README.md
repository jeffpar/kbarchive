---
layout: page
title: "Q131202: HOWTO: Perform Programmatic Logon from Windows for Workgroups"
permalink: /kb/131/Q131202/
---

## Q131202: HOWTO: Perform Programmatic Logon from Windows for Workgroups

{% raw %}

	Article: Q131202
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbLanMan kbOSWin311 kbGrpDSNet
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows for Workgroups, version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	I_AutoLogon is the only documented API for doing a programmatic logon from
	Windows for Workgroups. This API requires the user to type a user name and
	password. There aren't any other documented functions for performing logons. In
	particular, there is nothing documented to:
	
	- Perform a programmatic logon using a specific user name and password.
	
	- Perform a programmatic logon to a particular domain.
	
	MORE INFORMATION
	================
	
	It is possible to perform a logon in an indirect fashion by executing a batch
	file that calls NET LOGON. For example, you might have a file named LOGON.BAT
	that contains:
	
	  REM batch file that performs a logon
	  NET LOGON <username> <password> /DOMAIN:<mydomain>
	
	You can use WinExec to execute the batch file:
	
	  WinExec( "LOGON.BAT", SW_HIDE );
	
	REFERENCES
	==========
	
	For more information, please see the Windows for Workgroups SDK Help file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbLanMan kbOSWin311 kbGrpDSNet 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK311
	Version           : :3.11
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
