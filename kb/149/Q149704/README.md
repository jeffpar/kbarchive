---
layout: page
title: "Q149704: Browsing Shared Folders w/ IBM CA/400v3r1 Shows Local Drive"
permalink: /kb/149/Q149704/
---

## Q149704: Browsing Shared Folders w/ IBM CA/400v3r1 Shows Local Drive

	Article: Q149704
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The IBM Client Access, 400 Network Connections applet (icon titled Folders)
	contains a browse button that presents the available AS/400s. When you
	double-click one of the Systems (AS/400s), you should receive a list of the
	selected AS/400s shared folders. Instead, you will receive a list of directories
	on the local hard drive.
	
	CAUSE
	=====
	
	IBM CA/400 returns the incorrect drive if the Microsoft Windows 32-bit file
	access option is enabled.
	
	WORKAROUND
	==========
	
	To disable 32-bit File Access in Microsoft Windows for Workgroups, do the
	following:
	
	1. In Control Panel, select the Enhanced icon.
	
	2. Click the Virtual Memory button.
	
	3. Click the Change button.
	
	4. Clear the Use 32-Bit File Access option.
	
	5. Shutdown and reboot Windows for Workgroups for the change to take effect.
	
	MORE INFORMATION
	================
	
	This problem is not seen in IBM Client Access/400 v3r1m1.
	
	Additional query words: prodsna Client Access IBM CA/400 CA\400 w
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11,3.0
	Issue type        : kbprb
	
	=============================================================================
	
