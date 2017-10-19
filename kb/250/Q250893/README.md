---
layout: page
title: "Q250893: Zoomit Server Service Does Not Start After Installing MMS"
permalink: /kb/250/Q250893/
---

## Q250893: Zoomit Server Service Does Not Start After Installing MMS

	Article: Q250893
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 14-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Metadirectory Services on your Windows 2000-based
	domain controller, the Zoomit Server service does not start. When you try to
	start the Zoomit Server service using the Computer Management tool, you receive
	the following error message:
	
	  Could not start the ZOOMIT Server Service on Local Computer. The service did
	  not return an error. This could be an internal Windows error or an internal
	  service error. If the problem persists, contact your system administrator.
	
	The Genlogs contain a more descriptive error message, stating the problem and the
	registry location to change port numbers. The Genlogs error message stating the
	LDAP port conflict looks like this:
	
	FTL_00 041c 00/01/13 11:59:53.929 (VSOCK_bind_socket) failed to bind to 
	      socket (416); errno [WSAEADDRINUSE/10048]
	FTL_00 041c 00/01/13 11:59:53.930 (HTTP_InitializeCommunications) Socket 
	      not available (10048)
	FTL_00 041c 00/01/13 11:59:53.931 (VIA_Initialize) HTTP port 80 is        unavailable.
	If necessary, this setting can be changed in the System Registry under
	      HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\ZOOMIT Server\ 
	      Parameters
	
	If the HTTP port was changed and the LDAP port was not, you would receive the
	same error message but the Genlog error message would change. The ZOOMIT Server
	service tries to bind to the HTTP port first, and when it fails, it stops and
	logs the error message in the Genlogs. The Genlogs error message stating the
	LDAP port conflict looks like this:
	
	FTL_00 0630 00/01/13 12:32:43.438 (VSOCK_bind_socket) failed to bind to 
	      socket (420); errno [WSAEADDRINUSE/10048]
	FTL_00 0630 00/01/13 12:32:43.439 (VIA_Initialize) LDAP port 389 is unavailable.
	If necessary, this setting can be changed in the System Registry under
	      HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\ZOOMIT Server\ 
	      Parameters
	
	CAUSE
	=====
	
	This issue can occur because both the HTTP port 80 and the LDAP port 389 are in
	use by the Windows 2000-based domain controller. When you try to start the
	Zoomit Server service, it is unable to bind to socket 416 for HTTP and 420 for
	LDAP.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure the MMS to use an HTTP port other than 80 and
	an LDAP port other than 389. For example, port 8080 and port 390 respectively.
	To do so, use the appropriate method:
	
	Use Registry Editor to Change the HTTP and LDAP Ports
	-----------------------------------------------------
	
	1. Start Regedt32.exe, and then view the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\ZOOMIT Server\Parameters
	
	  Double-click the HTTP port value, click Decimal, type "8080" (without the
	  quotation marks) (or the port number you want to use), and then click OK.
	  Double-click the LDAP port value, click Decimal, type "390" (without the
	  quotation marks) (or the port number you want to use), and then click OK.
	
	2. Quit Registry Editor, and then restart your computer.
	
	Use the Setupsvc Command to Change the HTTP and LDAP Ports
	----------------------------------------------------------
	
	1. At a command prompt, navigate to the Zoomserv\Bin folder. Note that the drive
	  should be your installation drive.
	
	2. Type "Setupsvc -update -httpport 8080 -ldapport 390" (without the quotation
	  marks), and then press ENTER.
	
	  NOTE: You must use the Update command as well as specifying all changes. The
	  parameters you do not specify will change back to the default settings.
	  Because of this, make sure you change both ports at the same time.
	
	MORE INFORMATION
	================
	
	For additional information about the SETUPSVC command and parameters, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q246599 Microsoft Metadirectory Service Startup Parameters Available
	
	Additional query words: via
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
