---
layout: page
title: "Q128037: TCP/IP-32 Waits on Synchronous NCBs"
permalink: /kb/128/Q128037/
---

## Q128037: TCP/IP-32 Waits on Synchronous NCBs

{% raw %}

	Article: Q128037
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11; :3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a NetBIOS application, running under Windows for Workgroups using
	TCP/IP-32, submits a synchronous command, all NetBIOS related network activity
	stops until the NCB is responded to, or the application submits a CANCEL or
	RESET command.
	
	MORE INFORMATION
	================
	
	There are two types of NetBIOS commands; asynchronous and synchronous. All
	NetBIOS capable transports, such as TCP/IP-32, return immediately to the calling
	application for any asynchronous commands. The NetBIOS driver in TCP/IP-32 sets
	the NCB_RETCODE field to FFH to indicate that the command has been queued. When
	the command completes, the NCB_RETCODE field, as well as NCB_CMD_CPLT, are set
	to the final return code.
	
	In the case of synchronous commands, the TCP/IP-32 NetBIOS driver waits and
	return only when the command has been satisfied or if the application submits a
	NetBIOS CANCEL or RESET. As a result, all NetBIOS commands submitted or received
	by the workstation are blocked until the outstanding command is processed.
	
	To avoid blocking other NetBIOS related activity, applications should be written
	to submit asynchronous NCBs when possible.
	
	
	Additional query words: 3.11 prodtcp32
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : WINDOWS:3.11; :3.11
	
	=============================================================================
	

{% endraw %}
