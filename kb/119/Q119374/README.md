---
layout: page
title: "Q119374: Err Msg: Setup Error 108 or 110 During TCP/IP-32 Installation"
permalink: kb/119/Q119374/
---

## Q119374: Err Msg: Setup Error 108 or 110 During TCP/IP-32 Installation

	Article: Q119374
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you had a previous installation of Microsoft TCP/IP-32 on Windows for
	Workgroups version 3.11, one of the following error messages may appear when you
	attempt to re-install Microsoft TCP/IP-32:
	
	  Setup Error 108: Could not create or open the PROTOCOL.INI file.
	
	-or-
	
	  Setup Error 110: Could not find or open WIN.INI.
	
	CAUSE
	=====
	
	When you install TCP/IP-32, the OEMSETUP.INF file is copied to the SYSTEM
	directory and renamed OEMx.INF (where x is a number). The OEMx.INF file is then
	used by Setup to perform the necessary transactions for installation. The above
	error messages may appear due to earlier (beta) versions of the OEMx.INF file
	being in the SYSTEM directory.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Remove any previous versions of Microsoft TCP/IP-32.
	
	2. Quit Network Setup and restart your system.
	
	3. Rename any OEMx.INF (where x is a number) files that are in your
	  WINDOWS\SYSTEM directory.
	
	4. Start Network Setup again and install Microsoft TCP/IP-32, following the
	  installation instructions in the manual.
	
	Additional query words: wfw wfwg prodtcp32 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : 3.11
	
	=============================================================================
	
