---
layout: page
title: "Q154832: Disabling Thread Creation for CGI I/O in IIS 1.0"
permalink: kb/154/Q154832/
---

## Q154832: Disabling Thread Creation for CGI I/O in IIS 1.0

	Article: Q154832
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Internet Information Server 1.0 (IIS) creates a separate thread for Common
	Gateway Interface (CGI) application processing. This was not configurable in
	Internet Information Server.
	
	MORE INFORMATION
	================
	
	Some IIS installations may benefit from using server pool threads to perform CGI
	application processing. This reduces the overhead of creating a new thread for
	each CGI application running; however, if the CGI requests take an extended
	period of time, it can consume a server pool thread.
	
	RESOLUTION
	==========
	
	Obtain the fix referenced below (under STATUS), and then modify the registry as
	described here. W3svc.dll was modified to accept a registry entry that disables
	thread creation for managing CGI application I/O. The new registry entry is
	UsePoolThreadForCGI.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run "Net Stop w3svc"
	
	2. Run Registry Editor (REGEDT32.EXE).
	
	3. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     \SYSTEM\CurrentControlSet\Services\W3svc\Parameters
	
	  The parameters described below are located under this Registry subkey.
	
	  The following describes a new value for the W3SVC service parameters key that
	  can only be set by adding an entry in Registry Editor. This value entry does
	  not appear by default in the Registry, so you must add an entry if you want
	  to change its default value. The W3SVC service must be restarted for changes
	  to take effect.
	
	  UsePoolThreadForCGI
	     Data Type = REG_DWORD
	     Value:
	              0 - Use a server pool thread to do CGI processing.
	    (Default) 1 - Create a new thread to do CGI processing.
	
	4. Run "Net Start w3svc"
	
	STATUS
	======
	
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 1.00. A fix to this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments. Microsoft
	does not recommend implementing this fix at this time. Contact Microsoft Product
	Support Services for more information on the availability of this fix.
	
	
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	
