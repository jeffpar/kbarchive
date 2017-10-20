---
layout: page
title: "Q122448: Unable to Run Windows Sockets Utilities with TCP/IP-32"
permalink: /kb/122/Q122448/
---

## Q122448: Unable to Run Windows Sockets Utilities with TCP/IP-32

{% raw %}

	Article: Q122448
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run any Windows Sockets utilities, such as IPCONFIG, on a Windows for
	Workgroups version 3.11 computer configured with Microsoft TCP/IP-32, either of
	the following error messages may appear:
	
	  Unable to initialize winsock
	
	  Failed to retrieve required information from TCP/IP
	
	RESOLUTION
	==========
	
	To correct this problem, use a text editor such as Notepad to open and edit the
	SYSTEM.INI file. In the [386enh] section, verify the following line and add any
	parameters if missing:
	
	  netmisc=ndis.386, ndis2sup.386, wsock.386, wstcp.386
	
	NOTE: Make sure these files reside in the \WINDOWS\SYSTEM sub-directory.
	
	Additional query words: wfw wfwg prodtcp32 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbTCPIP311
	Version           : WINDOWS:
	
	=============================================================================
	

{% endraw %}
