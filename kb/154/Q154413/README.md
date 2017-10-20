---
layout: page
title: "Q154413: Changing Maximum Number of Users on an FPNW Server"
permalink: /kb/154/Q154413/
---

## Q154413: Changing Maximum Number of Users on an FPNW Server

{% raw %}

	Article: Q154413
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.00 
	- Microsoft File and Print Services for NetWare versions 3.51, 4.00 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	By default Microsoft File and Print Services for NetWare (FPNW) uses 10,000 as
	the maximum number of NetWare clients. This can cause problems when using
	applications such as backup utilities and older MS-DOS applications.
	
	RESOLUTION
	==========
	
	The maximum number of users that can be connected can be changed by making the
	following change in the registry:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  \SYSTEM\CurrentControlSet\Services\FPNW\Parameters
	
	3. Select MaxUsers and enter the desired value for the maximum connections of
	  NetWare clients. (default is 10000)
	
	4. Click OK and quit the Registry Editor.
	
	5. Shut down and restart Windows NT or stop and restart the FPNW service.
	
	NOTE: Page 95 of the "Microsoft File and Print Services for NetWare
	Administrator's Guide" incorrectly documents the default to be 1,000. The
	correct default setting for the maximum number of NetWare clients should be
	10,000.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	Version           : 3.51 4.0
	
	=============================================================================
	

{% endraw %}
