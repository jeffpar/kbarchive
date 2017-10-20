---
layout: page
title: "Q168683: Errors Installing Routing and Remote Access Using Have Disk"
permalink: /kb/168/Q168683/
---

## Q168683: Errors Installing Routing and Remote Access Using Have Disk

{% raw %}

	Article: Q168683
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Routing and Remote Access Service (RRAS) by clicking the Have
	Disk option on the Services tab of the Network Control Panel tool, it will
	result in the following error sequence:
	
	  Mprouter.exe - DLL Initialization Failed
	
	  Initialization of the dynamic link library \%SystemRoot%\System32\Rasiphlp.dll
	  failed. The process is terminating abnormally.
	
	After clearing this error, the following error is reported:
	
	  Service Control Manager
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	Examination of the Event Log shows the following Events:
	
	  Event ID: 20070
	  Source: RemoteAccess
	  Type: Error
	  Category: none
	
	  Point to Point Protocol engine was unable to load the
	  \%SystemRoot%\System32\Rasipcp.dll module. A dynamic link library (DLL)
	  initialization routine failed.
	
	  Event ID: 20063
	  Source: Router
	  Type: Error
	  Category: none
	
	  Remote Access Connection Manager failed to start because the Point to Point
	  Protocol failed to initialize. A dynamic link library (DLL) initialization
	  routine failed.
	
	  Event ID: 7024
	  Source: Service Control Manager
	  Type: Error
	  Category: none
	
	  The Remote Access Connection Manager service terminated with service specific
	  error 1114.
	
	  Event ID: 7001
	  Source: Service Control Manager
	  Type: Error
	  Category: none
	
	  The Routing and Remote Access Service depends on the Remote Access Connection
	  Manager service that failed to start because of the following error: The
	  service has returned a service specific error code.
	
	CAUSE
	=====
	
	When you install Routing and Remote Access Service by clicking the Have Disk
	option on the Services tab of the Network Control Panel tool, the files will be
	installed on the server. However, the original Oemnsvra.inf file will be used
	for binding review and configuration rather than the updated Oemnsvra.inf file
	included with Routing and Remote Access Service.
	
	
	RESOLUTION
	==========
	
	The supported method for installing Routing and Remote Access is to run
	Mprsetup.exe. This method copies the updated Oemnsvra.inf file into the
	%SystemRoot%\System32 directory allowing Microsoft Windows NT Server to use the
	proper Oemnsvra.inf file for binding review and configuration. The Have Disk
	method is unsupported. This behavior is by design.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	
	=============================================================================
	

{% endraw %}
