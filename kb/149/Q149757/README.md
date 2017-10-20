---
layout: page
title: "Q149757: Err Msg: The NetWare Compatible Shell Is Not Available"
permalink: /kb/149/Q149757/
---

## Q149757: Err Msg: The NetWare Compatible Shell Is Not Available

{% raw %}

	Article: Q149757
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you start Windows 95 or when
	you access the network:
	
	  The NetWare Compatible shell is not available.
	  Contact your network administrator.
	
	CAUSE
	=====
	
	This behavior occurs if the Microsoft Service for NetWare Directory Services
	(NDS) is removed but two files updated by the Microsoft Service for NDS are not
	replaced with the original files.
	
	RESOLUTION
	==========
	
	If you want NDS support for a NetWare network, reinstall the Microsoft Service
	for NDS. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q138596 Microsoft Service for NetWare Directory Services Readme.txt
	
	If you do not want NDS support, follow these steps to correctly remove the NDS
	services:
	
	1. Reinstall the Microsoft Service for NDS and the Microsoft Client for NetWare
	  Networks (if it is not currently installed). To reinstall the Microsoft
	  Client for NetWare Networks, double-click Network in Control Panel, click
	  Add, click Client, click Add, click Microsoft, click Microsoft Client For
	  NetWare Networks, and then click OK. After the client is installed, install
	  the Microsoft Service for NDS.
	
	2. In Control Panel, double-click Network. Remove the Microsoft Service for NDS
	  by clicking it and then clicking Remove. When you do this, Windows 95
	  reinstalls the original files used by the Microsoft Client for NetWare
	  Networks. When you are prompted whether to retain the newer versions of the
	  Nwnp32.dll and Nwredir.vxd files, click No so that the newer files are
	  replaced by the original files.
	
	  NOTE: If you are prompted whether to retain any other files, decide to replace
	  them with original versions only if doing so will not interfere with other
	  programs.
	
	3. When you are prompted to restart the computer, click No if you do not want
	  NetWare support and then skip to step 4. If you want NetWare support without
	  NDS services, click Yes.
	
	4. If you do not want NetWare support, remove the Microsoft Client for NetWare
	  Networks by clicking it and then clicking Remove. Restart the computer when
	  you are prompted to do so.
	
	NOTE: If you cannot complete these steps for some reason, renaming the Nwnp32.dll
	file should cause the error message to stop appearing. Note that this method
	does not correct the registry or replace the original files.
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
