---
layout: page
title: "Q246392: How to Uninstall Microsoft Metadirectory Services"
permalink: /kb/246/Q246392/
---

## Q246392: How to Uninstall Microsoft Metadirectory Services

{% raw %}

	Article: Q246392
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 12-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to uninstall Microsoft Metadirectory Services 2.1 on
	a computer running Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	Before you uninstall Metadirectory Services, make sure that you are not going to
	jeopardize any data in the Metadirectory. To successfully remove Metadirectory
	Services from a computer running Windows NT 4.0 Server, follow these steps:
	
	1. Stop the Zoomit Service.
	
	2. Click Start, click Run, type "cmd" (without the quotation marks) in the Open
	  box, and then click OK.
	
	3. At the command prompt, navigate to the Zoomserv\Bin folder on your computer.
	
	4. Type "setupsvc -remove" (without the quotation marks).
	
	5. After this command completes successfully, delete the Zoomserv folder or use
	  the Add/Remove Programs tool to uninstall Metadirectory Services and all of
	  its components.
	
	Before you try to uninstall the Metadirectory Services, make sure that the server
	has stopped and that no Management Agents (MAs) are running. The primary MA
	executable is the Importt.exe program. This program gains direct access to the
	database and does not need Via running in order to have the database open. Use
	Task Manager to verify that there are no VIAServer or IMPORTT processes running.
	
	Additional query words: Zoomit via
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
