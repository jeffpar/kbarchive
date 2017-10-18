---
layout: page
title: "Q235337: Cannot Remove Internet Explorer 5 After You Uninstall Service Pa"
permalink: kb/235/Q235337/
---

## Q235337: Cannot Remove Internet Explorer 5 After You Uninstall Service Pa

	Article: Q235337
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbWinNT400sp5fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the Microsoft Internet Explorer 5.0 uninstall feature on
	a computer running Windows NT that has already had Windows NT 4.0 Service Pack 4
	uninstalled (reverting back to Service Pack 3), the uninstall process stops and
	the following error message may be displayed:
	
	  Unable to locate Regsvr32.exe
	
	CAUSE
	=====
	
	This behavior occurs because the Update.inf file for Service Pack 4 was
	configured to remove Regsvr32.exe (as are all other files installed by the
	service pack Update process) during an uninstallation of the service pack.
	However, the Internet Explorer 5 uninstall feature requires the Regsvr32.exe
	file to be present to properly complete the uninstall process.
	
	NOTE: If the Regsvr32.exe file already exists on the computer before the Service
	Pack 4 installation, uninstalling the service pack restores the previous version
	of Regsvr32.exe and the uninstall process can then be completed.
	
	RESOLUTION
	==========
	
	To work around this issue, complete the uninstall process for Internet Explorer
	5.0 before uninstalling Service Pack 4.
	
	To resolve this problem, obtain the latest service pack for Windows NT. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
