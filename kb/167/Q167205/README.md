---
layout: page
title: "Q167205: RAS Event ID: 20055 Caused by Missing NetBios Interface"
permalink: kb/167/Q167205/
---

## Q167205: RAS Event ID: 20055 Caused by Missing NetBios Interface

	Article: Q167205
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your Windows NT computer, the Remote Access Service (RAS) server
	service fails to start and you may receive the following event log error in the
	event viewer:
	
	  Event ID: 20055
	  Source: RemoteAccess
	  Description: The Remote Access Service server could not be started
	               because it has been configured to access the network and
	               there are no network adapters available.
	
	CAUSE
	=====
	
	This issue may be caused due to the NetBIOS interface having been removed from
	the list of installed network software.
	
	RESOLUTION
	==========
	
	To resolve this issue, reinstall the NetBIOS Interface using the following
	steps:
	
	1. Click the Start button, point to Settings, click on Control Panel, and then
	  double-click the Network icon.
	
	2. Click Add Software.
	
	3. Select NetBIOS Interface in the Network Software list, and then click
	  Continue.
	
	4. Type the location of your Windows NT files, and then click Continue.
	
	5. Click Close, and then restart the computer when prompted.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	
