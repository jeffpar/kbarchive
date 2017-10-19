---
layout: page
title: "Q131096: Workgroup Name and Domain Name Same for Browsing"
permalink: /kb/131/Q131096/
---

## Q131096: Workgroup Name and Domain Name Same for Browsing

	Article: Q131096
	Product(s): Microsoft Windows NT
	Version(s): 3.11,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Windows NT Workstation version 3.5 Installation Guide incorrectly states
	the following on page 56:
	
	  Browsing will not be available if you log on to a Windows for Workgroups
	  computer whose workgroup name is the same as the name of a Windows NT
	  domain....
	
	RESOLUTION
	==========
	
	If you change the workgroup name of your Windows for Workgroups 3.11 client to
	the same name as a Windows NT domain that you are connected to, you are still
	able to browse. This is often the recommend configuration for troubleshooting.
	However if you do this, the workgroup machine will not become a browse master
	since it will always lose the browse master elections to the computers on the
	domain running Windows NT.
	
	Additional query words: documentation error 3.11 prodnt browsemaster
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : :3.11,3.5
	Issue type        : kbprb
	
	=============================================================================
	
