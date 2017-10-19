---
layout: page
title: "Q153763: Error Installing SSL with Setkey.exe"
permalink: /kb/153/Q153763/
---

## Q153763: Error Installing SSL with Setkey.exe

	Article: Q153763
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Setkey.exe, you will get the following error message:
	
	  SSL Key Set Utility, version 1.0
	
	  Error: The necessary security provider is not installed on this machine.
	  Run this again on the computer the http information server is installed on.
	  Failed to set the keys in the registry.
	
	CAUSE
	=====
	
	- One of the SSL security files, Sslsspi.dll is not in the
	  %systemroot%\system32 directory.
	
	- The path in the registry is not set properly. Using Regedt32.exe, check to
	  make sure the path to Sslsspi.dll is:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  HKEY_LOCAL_MACHINE
	   System
	    CurrentControlSet
	     Control
	      SecurityProviders
	       SecurityProviders = REG_SZ sslsspi.dll
	
	RESOLUTION
	==========
	
	Make sure the path in the registry is not corrupt and that the Sslsspi.dll file
	is on the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbiisSearch kbiis100
	Version           : :1.0
	
	=============================================================================
	
