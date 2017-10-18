---
layout: page
title: "Q169657: ADT95: Installation of Run-Time Application Disables DFS Client"
permalink: kb/169/Q169657/
---

## Q169657: ADT95: Installation of Run-Time Application Disables DFS Client

	Article: Q169657
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbdta
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 7.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	After you install a run-time application on a computer that is using the
	Microsoft DFS (Distributed File System) Client for Windows 95, you can no longer
	see the contents of remote DFS shares. This problem occurs only when the full
	version of Microsoft Access 95 version 7.0 is not installed on the computer.
	
	CAUSE
	=====
	
	The Microsoft DFS Client for Windows 95 installs an updated vredir.vxd that is
	needed to connect to remote DFS shares. Installation of a run-time application
	created with the Microsoft Access Developer's Toolkit 7.0 replaces this file
	with version 4.00.954 of vredir.vxd (140,367 bytes).
	
	RESOLUTION
	==========
	
	There are two possible resolutions.
	
	Method 1
	--------
	
	1. Reinstall the Microsoft DFS Client.
	
	2. During installation, you may receive the message:
	
	     A file being copied is older than the file currently on your
	     computer. It is recommended that you keep your existing file.
	
	     File name:    vredir.vxd
	     Description:  Windows Virtual Network Redirector
	     Your version: 4.0.954
	
	     Do you want to keep this file?
	
	  Click No to replace version 4.0.954 with the more recent version.
	
	3. Restart your computer.
	
	Method 2
	--------
	
	1. In your Windows\System folder, rename the file vredir.vxd to vredir.old.
	
	2. Copy the file vredir.dfs from your Windows\System\Dfs folder to your
	  Windows\Sytem folder and rename it to vredir.vxd.
	
	3. Restart your computer.
	
	STATUS
	======
	
	This problem does not occur after installation of run-time applications created
	with the Microsoft Office 97 Developer Edition. Also, the DFS Client which ships
	with Microsoft Windows NT 4.0 is not affected by this problem.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork kbdta 
	Technology        : kbAudDeveloper kbAccessSearch kbZNotKeyword3 kbAccessDevTK700
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
