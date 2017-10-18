---
layout: page
title: "Q176324: RAS Service Disabled during H/PC Explorer Connectivity"
permalink: kb/176/Q176324/
---

## Q176324: RAS Service Disabled during H/PC Explorer Connectivity

	Article: Q176324
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbnetwork
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE, version 1.0 
	- Microsoft H/PC Explorer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect your Microsoft Windows CE computer to a Microsoft
	Windows NT Remote Access Service (RAS) Server, you may receive the following
	error message from Microsoft H/PC Explorer:
	
	  Cannot start communications services. The Remote Access Service (RAS) is
	  failing to start for an unknown reason. Close all applications, disconnect
	  the H/PC serial cable and restart the desktop PC. If this error continues to
	  occur, consult the Communications Troubleshooter topic in the Troubleshooting
	  section of H/PC Explorer help.
	
	CAUSE
	=====
	
	The user with which you are attempting to connect does not have administrative
	rights on the local computer running Windows NT.
	
	WORKAROUND
	==========
	
	To correct the setup so you will no longer receive the above error message,
	perform one of the following:
	
	- Give user(s) administrative privileges for their computers running Windows
	  NT.
	
	-or-
	
	- Add domain user(s) to the Power Users group on the local workstations running
	  Microsoft H/PC Explorer.
	
	For additional information on RAS permission issues, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q153716 Permissions Required to Perform RAS Administration
	
	Additional query words: windowsce
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbnetwork 
	Technology        : kbOSWinCE kbZNotKeyword kbWinCESearch kbWinCE100 kbHPCExplorer
	Version           : :1.0,4.0
	
	=============================================================================
	
