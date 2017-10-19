---
layout: page
title: "Q216991: Err Msg: The Service Configuration DLL 'W3pcfg.dll' Failed..."
permalink: /kb/216/Q216991/
---

## Q216991: Err Msg: The Service Configuration DLL 'W3pcfg.dll' Failed...

	Article: Q216991
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Site Server version 3.0 
	- Microsoft Proxy Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Proxy Server 2.0, whenever you start the Microsoft Management
	Console (MMC) using custom .msc files or existing .msc files from the Site
	Server program group, the following error messages occur:
	
	  The service configuration DLL 'w3pcfg.dll' failed to load correctly. The
	  specified module could not be found.
	
	  The service configuration DLL 'wspcfg.dll' failed to load correctly. The
	  specified module could not be found.
	
	  The service configuration DLL 'sockscfg.dll' failed to load correctly. The
	  specified module could not be found.
	
	After you click the OK button on all three error messages, you can then
	administer the IIS computer, but the Proxy Server services are not displayed and
	cannot be added as a snap in.
	
	CAUSE
	=====
	
	The working directory or startup directory for any .msc files containing the IIS
	snap-in should be %SYSTEMROOT%\System32\Inetsrv. However, the actual .msc file
	properties cannot be changed to allow for %SYSTEMROOT%\System32\Inetsrv as the
	default working directory.
	
	Any applications that are started without a user or application-specified working
	directory assume %SYSTEMROOT%\System32 as the default working directory.
	
	RESOLUTION
	==========
	
	Do one of the following to resolve this problem: Place the actual .msc file
	anywhere you want and create a shortcut to the .msc file from the location where
	you want to start the MMC. Modify the shortcut's properties, and on the Shortcut
	tab change the Start-in directory to %SYSTEMROOT%\System32\Inetsrv.
	
	-OR-
	
	Place the custom .msc file in the %SYSTEMROOT%\System32\Inetsrv directory and
	start the .msc file directly from this directory.
	
	-OR-
	
	Copy the following files from the %SYSTEMROOT%\System32\Inetsrv directory to the
	%SYSTEMROOT%\System32\ directory:
	
	- Mspip.dll
	
	- W3pcfg.dll
	
	- Wspcfg.dll
	
	- Sockscfg.dll
	
	Note: Simply adding the %SYSTEMROOT%\System32\Inetsrv directory to the path
	environment variable is not sufficient.
	
	Additional query words: Proxy 2.0, Site Server 3.0
	
	======================================================================
	Keywords          :  
	Technology        : kbSiteServSearch kbiisSearch kbAudDeveloper kbiis400 kbProxyServSearch kbProxyServ200 kbSiteServ300
	Version           : winnt:2.0,3.0,4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
