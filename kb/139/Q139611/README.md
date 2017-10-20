---
layout: page
title: "Q139611: Using Network Client Administrator Files From Hard drive"
permalink: /kb/139/Q139611/
---

## Q139611: Using Network Client Administrator Files From Hard drive

{% raw %}

	Article: Q139611
	Product(s): Microsoft Windows NT
	Version(s): 3.0,3.11,3.11a,3.11b,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	- Microsoft Windows for Workgroups 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Windows NT Server Tools Network Client Administrator on files
	copied to a local hard drive, you receive an error similar to the following:
	
	  The path specified does not contain the network client installation files.
	  Verify that the path is correct, then retry the operation.
	
	This error message varies slightly, depending on which option you were selecting
	within the Network Client Administrator.
	
	CAUSE
	=====
	
	The Windows NT Server 3.5 "Installation Guide" (Chapter 9, Network Client
	Administrator, page 153) states that you can copy these files to your hard
	drive, then delete any of the directories you do not intend to use.
	
	However, you must not delete file NCADMIN.INF in the Clients directory, and you
	must not rename any of the subdirectories, as these actions will result in the
	error specified above.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbZNotKeyword kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbNetworkClientSearch kbNetworkClient300DOS kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : :3.0,3.11,3.11a,3.11b,3.5,3.51
	
	=============================================================================
	

{% endraw %}
