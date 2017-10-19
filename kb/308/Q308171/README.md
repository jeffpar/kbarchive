---
layout: page
title: "Q308171: IIS 5.1 Installation Tries to Register Sslcfg.dll"
permalink: /kb/308/Q308171/
---

## Q308171: IIS 5.1 Installation Tries to Register Sslcfg.dll

	Article: Q308171
	Product(s): Internet Information Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services, version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Internet Information Services (IIS) 5.1 with Windows XP
	Professional, the installation attempts to register the Sslcfg.dll file, even
	though this component is not intended for IIS 5.1.
	
	
	IIS 5.1 runs correctly without this component, and none of the functionality
	intended for IIS 5.1 is effected.
	
	MORE INFORMATION
	================
	
	The following error is reported in the Setupapi.log file:
	
	  ***************************************************************************
	  #-290 Processing REGISTERDLLS section [register_iis_core_dlls_Values]. Binary:
	  "%11%\inetsrv\sslcfg.dll", flags: 0x0001, timeout: 60s.
	  #E361 An unsigned or incorrectly signed file
	  "D:\WINDOWS\System32\inetsrv\sslcfg.dll" will be installed (Policy=Ignore).
	  Error 2: The system cannot find the file specified.
	  #E089 Failed to load the OLE Control "D:\WINDOWS\System32\inetsrv\sslcfg.dll".
	  Error 126: The specified module could not be found.
	  #E291 Failed to register OLE server "D:\WINDOWS\System32\inetsrv\sslcfg.dll".
	  Error 126: The specified module could not be found. [2001/10/03 09:51:49
	  3216.27]
	  ***************************************************************************
	
	This error only appears in the Setupapi.log file; no other error message is
	displayed.
	
	Additional query words: IIS5.1
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis510
	Version           : :
	Issue type        : kbinfo
	Solution Type     : kbpending
	
	=============================================================================
	
