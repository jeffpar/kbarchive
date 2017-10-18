---
layout: page
title: "Q90425: Using LAN Manager Scripts with WFWG Real-Mode Redirector"
permalink: kb/090/Q90425/
---

## Q90425: Using LAN Manager Scripts with WFWG Real-Mode Redirector

	Article: Q90425
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows for Workgroups and Workgroup Connections support Microsoft LAN
	Manager Logon scripts. This feature is supported when running Windows for
	Workgroups if LAN Manager has been installed as a secondary network through the
	Networks option in Control Panel.
	
	To support LAN Manager Logon scripts with Workgroup Connections, you must make
	some changes to your configuration.
	
	MORE INFORMATION
	================
	
	To enable this feature with Workgroup Connections or when starting the real-mode
	redirector from Windows for Workgroups, perform the following modifications to
	your configuration:
	
	1. When starting the real-mode redirector, use the FULL redirector by issuing
	  the following command when starting the network:
	
	  net start full
	
	2. Edit the SYSTEM.INI file, and add the following lines to the [Network]
	  section
	
	        LMLogon=Yes
	        LogonDomain=<Domain name>
	
	  where <Domain name> is the LAN Manager Domain that you have an account
	  on and want to logon to at startup.
	
	  NOTE: NET.EXE only reads the LMLogon=line with a value of YES or NO. Zero (0)
	  and one (1) are not acceptable values for this setting.
	
	The SYSTEM.INI file for Windows for Workgroups is normally in the WINDOWS
	directory.
	
	The SYSTEM.INI for Workgroup Connections is normally in the directory in which
	Workgroup Connections was installed (that is, C:\DOS\NET).
	
	Additional query words: 1.00 3.10 3rdparty wc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1; :1.0
	
	=============================================================================
	
