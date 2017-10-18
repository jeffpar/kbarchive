---
layout: page
title: "Q170859: Require Secure SSL Channel Option is Not Available"
permalink: kb/170/Q170859/
---

## Q170859: Require Secure SSL Channel Option is Not Available

	Article: Q170859
	Product(s): Internet Information Server
	Version(s): WinNT:2.0,3.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a Secure Sockets Layer (SSL) certificate, the Require Secure
	SSL Channel option in Internet Service Manager, WWW Service Properties,
	Directory Properties is not available (greyed out).
	
	CAUSE
	=====
	
	There are several causes of this condition, including:
	
	- The WWW service has not been stopped and restarted after the certificate was
	  installed.
	
	- No registry entry exists for Sspifilt.dll in HKEY_LOCAL_MACHINE/
	  System/CurrentControlSet/Services/W3SVC/Parameters/Filter DLLs.
	
	- The registry entry above exists, but it includes a space in the full drive
	  path description.
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	For the causes above, implement the following workarounds, respectively:
	
	1. Stop and restart the WWW service using Internet Service Manager.
	
	2. Open Registry Editor. Open the registry to HKEY_LOCAL_MACHINE/
	  System/CurrentControlSet/Services/W3SVC/Parameters/Filter DLLs. Enter the
	  full path and file name for Sspifilt.dll file (usually found in the
	  %System%\System32\Inetsrv subdirectory) in the registry value by
	  double-clicking the value, then entering full path and file name in the
	  String Editor. Be sure to confirm that the file exists in the path entered
	  into the registry. Close the registry by selecting Registry, Exit, then stop
	  and restart the WWW service.
	
	3. If the full path and file name for the Sspifilt.dll file contains any spaces
	  in the registry value above, use the String editor to remove the spaces,
	  close the registry, then stop and restart the WWW service.
	
	Additional query words: ssl grey gray greyed out
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : WinNT:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
