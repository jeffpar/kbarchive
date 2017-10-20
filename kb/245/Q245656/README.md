---
layout: page
title: "Q245656: INFO: Where to Obtain Cluster Automation Server"
permalink: /kb/245/Q245656/
---

## Q245656: INFO: Where to Obtain Cluster Automation Server

{% raw %}

	Article: Q245656
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbClustServSearch kbClustServ100 kbClustServ110 kbDSupport
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server, version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to obtain Cluster Automation Server for Windows NT
	4.0 and Windows 2000. Cluster Automation Server (CAS) is a set of ActiveX
	objects that can be used from scripting languages and Visual Basic to query and
	control a Cluster programmatically. CAS ships in the form of Msclus.dll.
	
	MORE INFORMATION
	================
	
	There are two versions of CAS:
	
	- A Windows NT 4.0 version
	- A more feature-rich version for Windows 2000
	
	The Windows NT 4.0 version of CAS can be obtained from the Platform SDK that
	ships with Windows 2000 under the Redist\Cluster\NT4\i386 (or alpha) directory.
	Please read the Readme.txt file in that directory before installing the DLL.
	
	NOTE: A copy of Atl.dll may need to be added to your system. For a list of
	Microsoft applications that Atl.dll ships with, please refer to the following
	Web site:
	
	  Microsoft File Version Information Center
	
	CAS is installed by default in Windows 2000. No additional actions need to be
	taken. The DLL is also available in the Windows 2000 Admin Pack.
	
	REFERENCES
	==========
	
	  Microsoft File Version Information Center
	
	Additional query words:
	
	======================================================================
	Keywords          : kbClustServSearch kbClustServ100 kbClustServ110 kbDSupport 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch kbClustServ110
	Version           : winnt:1.0,1.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
