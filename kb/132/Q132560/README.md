---
layout: page
title: "Q132560: PC Win: WGPOMGR.DLL Will Not Work with a Standard Postoffice"
permalink: /kb/132/Q132560/
---

## Q132560: PC Win: WGPOMGR.DLL Will Not Work with a Standard Postoffice

{% raw %}

	Article: Q132560
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows for Workgroups versions 3.1 and 3.11 provide a simple, single
	postoffice for workgroup connectivity. Usually, this postoffice is installed by
	one user via the Workgroups Mail Windows client. This user can then administer
	this postoffice via the Microsoft Workgroup Postoffice Manager for Windows
	dynamic-link library (DLL)--WGPOMGR.DLL.
	
	Once this postoffice has been upgraded to a standard Microsoft Mail for PC
	Networks version 3.0 or 3.2 postoffice, WGPOMGR.DLL will no longer work against
	this upgraded postoffice. This article describes, with technical detail, why
	WGPOMGR.DLL does not work against a standard postoffice.
	
	MORE INFORMATION
	================
	
	When WGPOMGR.DLL initializes, it examines the MASTER.GLB file of the postoffice,
	the location of which is indicated by the "ServerPath=" statement in the
	[Microsoft Mail] section of the MSMAIL.INI file on that workstation:
	
	  [Microsoft Mail]
	  ServerPath=M:\
	
	WGPOMGR.DLL then checks the MASTER.GLB file to see if it is of type "single
	postoffice." If the postoffice is a single postoffice, the .DLL file then checks
	to ensure the proper template files exist.
	
	If the proper template files exist, WGPOMGR.DLL locks open the FLAG.GLB file and
	allows the user (with proper access rights) to administer the WGPO postoffice.
	
	NOTES:
	
	1. A standard Microsoft Mail for PC Networks postoffice will be an
	  "internetwork" type postoffice in the MASTER.GLB file. This postoffice type,
	  in the MASTER.GLB, allows message transfer agents to transfer mail to and
	  from the postoffice.
	
	2. WGPO postoffices all have the same serial number: 0799-99992. Standard
	  postoffices each have an individual serial number.
	
	3. The procedure to remove the WGPOMGR.DLL entries from the Windows Client for
	  an upgraded postoffice are outlined in the following article in the Microsoft
	  Knowledge Base:
	
	  Q91042 PC WFW: Postoffice Administration Not Available from Windows
	
	4. The WGPO postoffice always contains an ADMIN.TPL and ADMIN.INF file set.
	  These files hold additional user information. Standard postoffices need not
	  necessarily contain ADMIN.TPL and ADMIN.INF files; however, they may have
	  these files if they are defined by the administrator.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
