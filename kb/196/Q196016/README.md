---
layout: page
title: "Q196016: XWEB: Outlook Web Access Fails Intermittently"
permalink: /kb/196/Q196016/
---

## Q196016: XWEB: Outlook Web Access Fails Intermittently

{% raw %}

	Article: Q196016
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Outlook Web Access and the WWW Publishing Service can stop if there are not
	enough server resources for them to continue.
	
	Specific error messages that can be generated are listed below:
	
	  Event ID 4097
	  Source - Dr. Watson
	  Description: The application exe/inetinfo.dbg generated a application
	  error.  The error occurred on (date, time). The exception generated
	  c0000005 at address 6f2674ab (no symbols).
	
	  Event ID 5
	  Source - Active Server Pages
	  Description: A Active Server control or component performed an illegal
	  ole countinitialized call.  Components used by Active Server Pages must
	  not do this.
	
	  Event ID 3
	  Source - W3SVC
	  Description: HTTP Server could not initialize the socket library. The
	  data is the error.
	
	  Event ID 7023
	  Source - Service Control Manager
	  The World Wide Web publishing service terminated with the following
	  error.
	
	  Event ID 105
	  Source - W3SVC
	  Description: The server was unable to register the administration tool
	  discovery information.  The administration tool may not be able to see
	  this server. The data is the error code.
	
	CAUSE
	=====
	
	The WWW Service does not have enough processor resources available to support
	Outlook Web Access.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To resolve this problem, modify and increase the value of the following registry
	keys:
	
	Registry path:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\W3SVC\ASP
	  \Parameters
	
	  ProcessorThreadMax  REG_DWORD
	  Default: 10
	
	  NOTE: The above registry key is one path; it has been wrapped for
	  readability.
	
	This value specifies the maximum number of worker threads to create per
	processor. It is not advisable to create more than 20 threads per processor. If
	this value is changed, the Web server must be stopped and restarted for the
	change to take effect.
	
	Registry Path:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\InetInfo
	  \Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for
	  readability.
	
	  MaxPoolThreads REG_DWORD
	  Range: 0 - unlimited
	  Default:4
	
	This value specifies the number of pool threads to create per processor. Each
	pool thread watches for the network request and processes it.
	
	Creating more than 20 threads per processor is discouraged.
	
	MORE INFORMATION
	================
	
	Outlook Web Access and the WWW Publishing Service can fail if a server is
	supporting multiple roles in the domain. For example, if the server is
	functioning as a Primary Domain Controller, DHCP Server, and a Web Server, then
	the adjustments listed above may need to be made.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
