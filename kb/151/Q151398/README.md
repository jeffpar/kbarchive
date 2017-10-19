---
layout: page
title: "Q151398: &quot;The handle is invalid&quot; Error Using Server Tools and WFW"
permalink: /kb/151/Q151398/
---

## Q151398: &quot;The handle is invalid&quot; Error Using Server Tools and WFW

	Article: Q151398
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Server Tools for Windows NT on a Windows for Workgroups (WFWG)
	client, a user may see the following error when trying to use User Manager or
	Server Manager:
	
	  The Handle is invalid.
	
	CAUSE
	=====
	
	This error may occur if the Windows for Workgroups workstation is running ODI
	drivers.
	
	RESOLUTION
	==========
	
	To resolve this problem and still use ODI drivers, add directhost=no under the
	[network] section of the System.ini file of the Windows for Workgroups client.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11; winnt:3.5,3.51
	
	=============================================================================
	
